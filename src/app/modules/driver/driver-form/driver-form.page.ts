import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';
import { DifficultyDescription, DifficultyEnum, DifficultySelect } from 'src/app/shared/utils/enums/difficulty.enum';
import { RaceLengthDescription, RaceLengthEnum, RaceLengthSelect } from 'src/app/shared/utils/enums/race-length.enum';
import { ToastUtils } from 'src/app/shared/utils/toast.utils';
import { Driver } from '../models/driver.model';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'awt-driver-form',
  templateUrl: './driver-form.page.html',
  styleUrls: ['./driver-form.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DriverFormPage implements OnInit, OnDestroy {

  title = new BehaviorSubject<string>('');
  difficultyDescription = new BehaviorSubject<string>('');
  aggressionDescription = new BehaviorSubject<string>('');
  raceLengthDescription = new BehaviorSubject<string>('');

  driverForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    difficulty: new FormControl<DifficultyEnum | null>(null, [Validators.required]),
    raceLength: new FormControl<RaceLengthEnum | null>(null, [Validators.required])
  });

  difficultyOptions = DifficultySelect();
  raceLengthOptions = RaceLengthSelect();

  subscribeSubj = new Subject();

  constructor(
      private route: ActivatedRoute, private driverService: DriverService, private toast: ToastUtils
    ) {}

  ngOnInit() {
    this.driverForm.get('difficulty')?.valueChanges.pipe(takeUntil(this.subscribeSubj)).subscribe((value) => {
      const chosenDifficulty = DifficultyDescription(value as DifficultyEnum);
      this.difficultyDescription.next(chosenDifficulty.difficulty);
      this.aggressionDescription.next(chosenDifficulty.aggression);
    });

    this.driverForm.get('raceLength')?.valueChanges.pipe(takeUntil(this.subscribeSubj)).subscribe((value) => {
      const chosenLength = RaceLengthDescription(value as RaceLengthEnum);
      this.raceLengthDescription.next(chosenLength);
    });

    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.title.next('Edit Driver');
      } else {
        this.title.next('Create Driver');
        this.driverForm.get('difficulty')?.setValue(DifficultyEnum.Clubman);
        this.driverForm.get('raceLength')?.setValue(RaceLengthEnum.Medium);
      }
    })
  }

  ngOnDestroy() {
    this.subscribeSubj.next(true);
    this.subscribeSubj.complete();
  }

  hasError(field: string, error: string) {
    return (this.driverForm.get(field)?.touched && this.driverForm.get(field)?.hasError(error));
  }

  saveDriver() {
    this.driverForm.markAllAsTouched();
    if (this.driverForm.valid) {
      const driver = this.driverForm.value as Driver;
      if (!driver.id) {
        // this.driverService.addDriver(driver);
        this.toast.success('Driver Created!');
      } else {

      }
    } else {
      this.toast.error(`Check the form fields before saving`);
    }
  }
}

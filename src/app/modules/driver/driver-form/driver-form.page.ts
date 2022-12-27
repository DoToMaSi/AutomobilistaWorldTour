import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';
import { DifficultyEnum, DifficultySelect } from 'src/app/shared/utils/enums/difficulty.enum';

@Component({
  selector: 'awt-driver-form',
  templateUrl: './driver-form.page.html',
  styleUrls: ['./driver-form.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DriverFormPage implements OnInit {

  title = new BehaviorSubject<string>('');
  driverForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    difficulty: new FormControl<DifficultyEnum>(DifficultyEnum.Clubman, [Validators.required])
  });
  difficultyOptions = DifficultySelect();
  subscribeSubj = new Subject();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.title.next('Edit Driver');
      } else {
        this.title.next('Create Driver');
      }
    })

    this.driverForm.get('difficulty')?.valueChanges.pipe(takeUntil(this.subscribeSubj)).subscribe((value) => {

    });
  }

  hasError(field: string, error: string) {
    return (this.driverForm.get(field)?.touched && this.driverForm.get(field)?.hasError(error));
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'awt-driver-form',
  templateUrl: './driver-form.page.html',
  styleUrls: ['./driver-form.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DriverFormPage implements OnInit {

  title = new BehaviorSubject<string>('');
  driverForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.title.next('Edit Driver');
      } else {
        this.title.next('Create Driver');
      }
    })
  }

}

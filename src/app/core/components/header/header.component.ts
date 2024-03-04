import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import { getDriverLevel } from 'src/app/modules/driver/models/driver.model';
import { DriverService } from 'src/app/modules/driver/services/driver.service';

@Component({
  selector: 'awt-header-toolbar',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {

  @Input() showBackButton = false;
  @Input() breadcrumbText = ' Return';

  currentLevel = signal(0)

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.currentLevel.set(getDriverLevel(this.driverService.activeDriver));
    console.log(this.currentLevel());
  }

}

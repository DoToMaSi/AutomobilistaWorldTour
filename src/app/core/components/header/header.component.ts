import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'awt-header-toolbar',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {

  @Input() showBackButton = false;
  @Input() breadcrumbText = ' Return';

  constructor() { }

  ngOnInit() { }

}

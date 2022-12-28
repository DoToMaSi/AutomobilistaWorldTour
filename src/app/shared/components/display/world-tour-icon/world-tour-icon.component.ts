import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'awt-world-tour-icon',
  templateUrl: './world-tour-icon.component.html',
  styleUrls: ['./world-tour-icon.component.scss'],
})
export class WorldTourIconComponent implements OnInit {

  @Input() icon = '';
  @Input() title = '';
  @Input() tooltip = '';

  constructor() { }

  ngOnInit() {}

}

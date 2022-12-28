import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'awt-world-tour-icon',
  templateUrl: './world-tour-icon.component.html',
  styleUrls: ['./world-tour-icon.component.scss'],
})
export class WorldTourIconComponent implements OnInit {

  @ViewChild('wtIcon') wtIcon: any;

  @Input() icon = '';
  @Input() iconTitle = '';
  @Input() tooltip = '';

  constructor() { }

  ngOnInit() {}
}

import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-mini-stat-widget',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './mini-stat-widget.component.html',
  styleUrl: './mini-stat-widget.component.scss'
})
export class MiniStatWidgetComponent {

  @Input() backgroundColor: string = 'lightblue';
  @Input() leftLabel: string = 'Appointments';
  @Input() leftValue: number = 18;
  @Input() IconColor:string='blue';

}

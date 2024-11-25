import {Component, Input} from '@angular/core';
import {MiniStatWidgetComponent} from "./mini-stat-widget/mini-stat-widget.component";

@Component({
  selector: 'app-main-dash-widget',
  standalone: true,
  imports: [
    MiniStatWidgetComponent
  ],
  templateUrl: './main-dash-widget.component.html',
  styleUrl: './main-dash-widget.component.scss'
})
export class MainDashWidgetComponent {

}

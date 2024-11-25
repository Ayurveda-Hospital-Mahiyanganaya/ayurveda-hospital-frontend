import { Component } from '@angular/core';
import {MainDashWidgetComponent} from "./main-dash-widget/main-dash-widget.component";
import {AppoinmentViewWidgetComponent} from "./appoinment-view-widget/appoinment-view-widget.component";
import {ClinicGroupWidgetComponent} from "./clinic-group-widget/clinic-group-widget.component";

@Component({
  selector: 'app-doctor-main-dashboard',
  standalone: true,
  imports: [
    MainDashWidgetComponent,
    AppoinmentViewWidgetComponent,
    ClinicGroupWidgetComponent
  ],
  templateUrl: './doctor-main-dashboard.component.html',
  styleUrl: './doctor-main-dashboard.component.scss'
})
export class DoctorMainDashboardComponent {

}

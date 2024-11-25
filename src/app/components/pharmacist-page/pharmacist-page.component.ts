import { Component } from '@angular/core';
import {PharmacistNavBarComponent} from "./inner elements/pharmacist-nav-bar/pharmacist-nav-bar.component";
import {PatientWaitingAreaComponent} from "./inner elements/patient-waiting-area/patient-waiting-area.component";

@Component({
  selector: 'app-pharmacist-page',
  standalone: true,
  imports: [
    PharmacistNavBarComponent,
    PatientWaitingAreaComponent
  ],
  templateUrl: './pharmacist-page.component.html',
  styleUrl: './pharmacist-page.component.scss'
})
export class PharmacistPageComponent {

}

import { Component } from '@angular/core';
import {UserMainHeaderBarComponent} from "../main-user-module/user-main-header-bar/user-main-header-bar.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-doctor-page',
  standalone: true,
    imports: [
        UserMainHeaderBarComponent,
        RouterOutlet,
        RouterLink,
    ],
  templateUrl: './doctor-page.component.html',
  styleUrl: './doctor-page.component.scss'
})
export class DoctorPageComponent {

}

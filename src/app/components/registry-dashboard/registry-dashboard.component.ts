import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {UserMainHeaderBarComponent} from "../main-user-module/user-main-header-bar/user-main-header-bar.component";

@Component({
  selector: 'app-registry-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    UserMainHeaderBarComponent
  ],
  templateUrl: './registry-dashboard.component.html',
  styleUrl: './registry-dashboard.component.scss'
})
export class RegistryDashboardComponent {

}

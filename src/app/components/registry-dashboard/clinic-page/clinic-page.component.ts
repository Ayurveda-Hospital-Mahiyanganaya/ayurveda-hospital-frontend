import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-clinic-page',
  standalone: true,
    imports: [
        MatIcon,
        MatIconButton,
        MatPaginator,
        MatTooltip
    ],
  templateUrl: './clinic-page.component.html',
  styleUrl: './clinic-page.component.scss'
})
export class ClinicPageComponent {

}

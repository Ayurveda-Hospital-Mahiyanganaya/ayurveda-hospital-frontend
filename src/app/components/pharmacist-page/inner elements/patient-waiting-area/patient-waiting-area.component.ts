import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-patient-waiting-area',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './patient-waiting-area.component.html',
  styleUrl: './patient-waiting-area.component.scss'
})
export class PatientWaitingAreaComponent {
  isExpanded = false;
  waitingPatients = [
    { heading: 'Patient A', date: 'Wed', content: 'Some details about Patient A' },
    { heading: 'Patient B', date: 'Tues', content: 'Some details about Patient B' },
    // Additional patient data
  ];

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}

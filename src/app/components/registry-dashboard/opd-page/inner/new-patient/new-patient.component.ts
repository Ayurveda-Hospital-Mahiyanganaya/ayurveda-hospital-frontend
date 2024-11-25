import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-patient',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatButton,
    MatRadioButton,
    MatRadioGroup
  ],
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.scss'
})
export class NewPatientComponent {

  form=new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    birthDate:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    contactDetails:new FormControl('',[Validators.required])
  })
}

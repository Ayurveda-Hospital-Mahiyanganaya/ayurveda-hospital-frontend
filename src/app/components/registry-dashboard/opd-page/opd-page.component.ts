import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {NewPatientComponent} from "./inner/new-patient/new-patient.component";
import {response} from "express";

@Component({
  selector: 'app-opd-page',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatTooltip,
    MatPaginator
  ],
  templateUrl: './opd-page.component.html',
  styleUrl: './opd-page.component.scss'
})
export class OpdPageComponent {
constructor(private matDialog:MatDialog) {

}

openNewPatientForm(){
let matDialogRef =this.matDialog.open(NewPatientComponent,{

  width:'500px',
  disableClose:true
});

matDialogRef.afterClosed().subscribe(response=>{
  if(response){
    this.loadAllPatients();
  }
})
}

  private loadAllPatients() {

  }
}

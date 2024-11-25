import { Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegistryDashboardComponent} from "./components/registry-dashboard/registry-dashboard.component";
import {PharmacistPageComponent} from "./components/pharmacist-page/pharmacist-page.component";
import {DoctorPageComponent} from "./components/doctor-page/doctor-page.component";
import {OpdPageComponent} from "./components/registry-dashboard/opd-page/opd-page.component";
import {ClinicPageComponent} from "./components/registry-dashboard/clinic-page/clinic-page.component";
import {DischargePageComponent} from "./components/registry-dashboard/discharge-page/discharge-page.component";
import {AddmissionPageComponent} from "./components/registry-dashboard/addmission-page/addmission-page.component";
import {
  DoctorMainDashboardComponent
} from "./components/doctor-page/inner_pages/doctor-main-dashboard/doctor-main-dashboard.component";
import {
  DoctorPatientDashboardComponent
} from "./components/doctor-page/inner_pages/doctor-patient-dashboard/doctor-patient-dashboard.component";
import {
  DoctorAppoinmentsDashboardComponent
} from "./components/doctor-page/inner_pages/doctor-appoinments-dashboard/doctor-appoinments-dashboard.component";
import {
  DoctorContactDashboardComponent
} from "./components/doctor-page/inner_pages/doctor-contact-dashboard/doctor-contact-dashboard.component";

export const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginPageComponent},
  {path:'registry-dashboard',component:RegistryDashboardComponent,children:[
      {
        path: '',
        redirectTo: 'opd',
        pathMatch: 'full'
      },
      {
        path: 'opd',
        component: OpdPageComponent
      },
      {
        path: 'clinic',
        component: ClinicPageComponent
      },
      {
        path: 'discharge',
        component: DischargePageComponent
      },
      {
        path: 'addmission',
        component: AddmissionPageComponent
      },
    ]},
  {path:'pharmacist-dashboard',component:PharmacistPageComponent},
  {path:'doctor-page',component:DoctorPageComponent,children:[
      {
        path: '',
        redirectTo: 'doctor-main-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'doctor-main-dashboard',
        component: DoctorMainDashboardComponent
      },
      {
        path: 'doctor-patient-dashboard',
        component: DoctorPatientDashboardComponent
      },
      {
        path: 'doctor-appoinments-dashboard',
        component: DoctorAppoinmentsDashboardComponent
      },
      {
        path: 'doctor-contact-dashboard',
        component: DoctorContactDashboardComponent
      },
    ]},

];

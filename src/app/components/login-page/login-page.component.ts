import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserMainHeaderBarComponent} from "../main-user-module/user-main-header-bar/user-main-header-bar.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    UserMainHeaderBarComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  form=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  login() {
    let obj={
      username:this.form.value?.username,
      password:this.form.value?.password
    }


  }
}

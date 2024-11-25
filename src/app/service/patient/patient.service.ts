import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as http from "node:http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  baseUrl='http://localhost:8001/api/v1/patient';


  constructor(private http:HttpClient) { }


  create(obj:any):Observable<any>{

    return this.http.post(this.baseUrl,{
      firstName:obj.firstName,
      lastName:obj.lastName,
      
    })

  }
}

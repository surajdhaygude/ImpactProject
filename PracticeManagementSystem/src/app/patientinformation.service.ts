import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientinformationService {

  constructor(private http:HttpClient) { }

  public AddDemographics(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/PatientDemoInfos/CreateDemoInfo",formdata)
  }
}

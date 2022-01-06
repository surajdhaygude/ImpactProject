import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientinformationService {

  constructor(private http:HttpClient) { }

  public getAllPatientDemoInfos():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:39671/api/PatientDemoInfos/GetAllPatientDemoInfos");
  }

  public AddDemographics(formdata:any):Observable<any[]>{
    debugger
    return this.http.post<any>("http://localhost:39671/api/PatientDemoInfos/CreateDemoInfo",formdata)
  }

  public UpdatePatientDemoInfo(formdata:any){
    debugger
    return this.http.put<any>("http://localhost:39671/api/PatientDemoInfos/UpdateDemoInfo",formdata)
  }

  public Getbyuseriddemoinfo(id: any): Observable<any> {
    debugger
    // return this.http.delete(`${this.APIUrl}/${id}`)
    return this.http.get<any>(`http://localhost:29345/api/Admins/GetUserById/${id}`)
  }
  
 
}

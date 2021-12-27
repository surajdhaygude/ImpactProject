import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientvisitService {

  constructor(private http:HttpClient) { }

  public Adddiagnosis(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/Diagnosis/CreatePatientDiagnosis",formdata)
  }
  public GetPatientUsers():Observable<any>{
    //return this.http.get<any>(this.APIUrl);
    //changes According to Api URL
    return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/4");
    
  }

  public GetPhyasicanUsers():Observable<any>{
    //return this.http.get<any>(this.APIUrl);
    //changes According to Api URL
    return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/2");
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }

  APIUrl:string='http://localhost:3000/PatientData';
  
 getPatientList():Observable<any>
 {
   //debugger;
   //return this.http.get<any>("http://localhost:3000/PatientData");
   return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/3");
 }

 public AddPatientrecords(formdata:any){
  //return this.http.post<any>("http://localhost:3000/PatientData", formdata)
  return this.http.post<any>("http://localhost:29345/api/admins/CreateUser",formdata)
}

public GetHuserasByID(id: any):Observable<any>{
  return this.http.get(`${this.APIUrl}/${id}`)
}

public Husersupdapte(id: any, data: any): Observable<any> {
  return this.http.put(`${this.APIUrl}/${id}`, data)
}
public getUpdatePatient(id: number): Observable<any> {
  debugger
//  const url=`${this.APIUrl}/${id}`;
//   return this.http.get<any>(url)
return this.http.get(`http://localhost:29345/api/admins/GetUserById/${id}`)
}
public updatepatient(data:any): Observable<any> {
  debugger
//  const url=`${this.APIUrl}/${id}`;
//   return this.http.put<any>(url,data)
return this.http.put<any>("http://localhost:29345/api/admins/UpdateUser",data)

}

public Husersdelete(id: any): Observable<any> {
  debugger
  //return this.http.delete(`${this.APIUrl}/${id}`)
  return this.http.delete<any>(`http://localhost:29345/api/admins/DeleteUser/${id}`)
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NursemanagementService {

  APIUrl:string='http://localhost:3000/NurseUser';

  constructor(private http: HttpClient) { }

  
  public GetHospitalNurse():Observable<any>{
    debugger
    // return this.http.get<any>(this.APIUrl);
    return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/2");
  }
  
  public AddNurserecords(formdata:any){
    debugger
    //return this.http.post<any>("http://localhost:3000/NurseUser", formdata)
    return this.http.post<any>("http://localhost:29345/api/admins/CreateUser",formdata)
  }

  public GetNurseByID(id: any):Observable<any>{
    return this.http.get(`${this.APIUrl}/${id}`)
  }   

  public GetnursebyID(id: number): Observable<any> {
    debugger

  //  const url=`${this.APIUrl}/${id}`;

  //   return this.http.get<any>(url)
  return this.http.get(`http://localhost:29345/api/admins/GetUserById/${id}`)

  }

  public HNursedelete(id: any): Observable<any> {
    debugger
    // return this.http.delete(`${this.APIUrl}/${id}`)
    return this.http.delete<any>(`http://localhost:29345/api/admins/DeleteUser/${id}`)
  }

  public updateNurseusers(data:any): Observable<any> {
    debugger
  //  const url=`${this.APIUrl}/${id}`;
  //   return this.http.put<any>(url,data)
  return this.http.put<any>("http://localhost:29345/api/admins/UpdateUser",data)
  }




}

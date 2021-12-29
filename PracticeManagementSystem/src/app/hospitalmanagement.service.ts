import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Hospitalusers} from 'src/app/models/Hospitalusers'

@Injectable({
  providedIn: 'root'
})
export class HospitalmanagementService {

  hearders= new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');

  httpOptions={
    hearders:this.hearders,
    body: {
      id: 1006
    }
  }
  APIUrl:string='http://localhost:3000/rowdata';

  constructor(private http:HttpClient) { }

  public GetHospitalUsers():Observable<any>{
    //return this.http.get<any>(this.APIUrl);
    //changes According to Api URL
    return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/2");
    
  }


  public AddPhysicianrecords(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:29345/api/admins/CreateUser",formdata)
  }

  public GetHuserasByID(id: any):Observable<any>{
    return this.http.get(`http://localhost:29345/api/admins/GetUserById/${id}`)
  }

  public getUserByID(id: number): Observable<any> {
    debugger
    return this.http.get(`http://localhost:29345/api/admins/GetUserById/${id}`)
  //  const url=`${this.APIUrl}/${id}`;
  //   return this.http.get<any>(url)
  }
  public updateusers(data:any): Observable<any> {
    debugger
  //  const url=`${this.APIUrl}/${id}`;
  //   return this.http.put<any>(url,data)
  return this.http.put<any>("http://localhost:29345/api/admins/UpdateUser",data)

  }

  public Husersdelete(id: number): Observable<any> {
    debugger
    const url=`${this.APIUrl}/${id}`;
   // return this.http.delete<Hospitalusers>(url)
    return this.http.delete<any>(`http://localhost:29345/api/admins/DeleteUser/${id}`)
  }  

  public Providerregistration(formdata:any): Observable<any> {
    debugger
    //const url=`${this.APIUrl}/${id}`;
   // return this.http.delete<Hospitalusers>(url)
   return this.http.post<any>("http://localhost:29345/api/admins/CreateUser",formdata)
  }  
  
  
}



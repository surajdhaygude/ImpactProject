import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ IHospitalusers}  from 'src/app/models/IHospitalusers'

@Injectable({
  providedIn: 'root'
})
export class HospitalmanagementService {


  APIUrl:string='http://localhost:3000/rowdata';

  constructor(private http:HttpClient) { }

  public GetHospitalUsers():Observable<any>{
    return this.http.get<any>(this.APIUrl);
  }

  

  public AddPhysicianrecords(formdata:any){
    return this.http.post<any>("http://localhost:3000/AddPhysician", formdata)
  }

  public GetHuserasByID(id: any):Observable<any>{
    return this.http.get(`${this.APIUrl}/${id}`)
  }

  public Husersupdapte(id: any, data: any): Observable<any> {
    return this.http.put(`${this.APIUrl}/${id}`, data)
  }

  public Husersdelete(id: any): Observable<any> {
    debugger
    return this.http.delete(`${this.APIUrl}/${id}`)
  }

   
}



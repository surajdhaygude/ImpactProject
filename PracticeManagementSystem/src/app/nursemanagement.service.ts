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
    return this.http.get<any>(this.APIUrl);
  }
  
  public AddNurserecords(formdata:any){
    return this.http.post<any>("http://localhost:3000/NurseUser", formdata)
  }

  public GetNurseByID(id: any):Observable<any>{
    return this.http.get(`${this.APIUrl}/${id}`)
  }   

  public HNurseupdapte(id: number): Observable<any> {

    debugger

   const url=`${this.APIUrl}/${id}`;

    return this.http.get<any>(url)

  }

  public HNursedelete(id: any): Observable<any> {
    debugger
    return this.http.delete(`${this.APIUrl}/${id}`)
  }




}

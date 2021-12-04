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
    return this.http.get<any>(this.APIUrl);
  }


  public AddPhysicianrecords(formdata:any){
    return this.http.post<any>("http://localhost:3000/rowdata", formdata)
  }

  public GetHuserasByID(id: any):Observable<any>{
    return this.http.get(`${this.APIUrl}/${id}`)
  }

  public getUpdateUser(id: number): Observable<any> {
    debugger
   const url=`${this.APIUrl}/${id}`;
    return this.http.get<any>(url)
  }
  public updateusers(id: number, data:any): Observable<any> {
    debugger
   const url=`${this.APIUrl}/${id}`;
    return this.http.put<any>(url,data)
  }

  public Husersdelete(id: number): Observable<any> {
    debugger
    const url=`${this.APIUrl}/${id}`;
    return this.http.delete<Hospitalusers>(url)
    //return this.http.delete<any>("http://localhost:3000/rowdata/1")
  }

   
}



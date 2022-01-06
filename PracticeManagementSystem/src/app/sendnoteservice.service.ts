import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/IUser';

@Injectable({
  providedIn: 'root'
})
export class SendnoteserviceService {

  APIUrl:string='http://localhost:3000/receivednotes';

  constructor(private http:HttpClient) { }

  public getReceivers():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl);
  }
}

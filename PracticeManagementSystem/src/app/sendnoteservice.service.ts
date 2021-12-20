import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/IUser';

@Injectable({
  providedIn: 'root'
})
export class SendnoteserviceService {

  APIUrl:string='http://localhost:3000/users';

  constructor(private http:HttpClient) { }

  public getReceivers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.APIUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    debugger
    return this.http.post("http://localhost:42261/api/JWTAuth/login",data);
  }
}

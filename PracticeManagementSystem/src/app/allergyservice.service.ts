import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllergy } from 'IAllergy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllergyserviceService {

  APIUrl:string='http://localhost:3000/allergies';

  constructor(private http:HttpClient) { }

  public getAllergies():Observable<IAllergy[]>{
    return this.http.get<IAllergy[]>(this.APIUrl);
  }
}
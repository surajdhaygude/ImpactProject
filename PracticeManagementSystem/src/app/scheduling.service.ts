import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private http:HttpClient) {

   }
   public GetPhysicianUsers():Observable<any>{

    return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/2");
  }

  public GetPatientUsers():Observable<any>{

    return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/4");
  }

   public GetAllScheduling(){
    debugger
    return this.http.get<any>("http://localhost:62917/api/scheduling/GetAllScheduling")
  }

  
  public GetSchedulingbyID(id: number): Observable<any> {
    debugger
  return this.http.get(`http://localhost:62917/api/Scheduling/GetBySchedulingId/${id}`)
  }

  
  public AddAppointment(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:62917/api/Scheduling/CreateScheduling",formdata)
  }

  
  public UpdateAppointment(data:any): Observable<any> {
    debugger
  return this.http.put<any>("http://localhost:62917/api/Scheduling/UpdateScehduling",data)
  }

  public DeleteAppointment(id: any): Observable<any> {
    debugger
    

    // return this.http.delete(`${this.APIUrl}/${id}`)
    return this.http.delete<any>(`http://localhost:62917/api/Scheduling/DeleteScheduling/${id}`)
  }

  public GetPatientCalenderData():Observable<any>{

    return this.http.get<any>("http://localhost:62917/api/Scheduling/GetByUserId/4");
  }


}

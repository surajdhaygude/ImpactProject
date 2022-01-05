import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientvisitService {

  constructor(private http:HttpClient) { }

  public Adddiagnosis(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/Diagnosis/CreatePatientDiagnosis",formdata)
  }
  public AddPatientMedicatio(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/Drugs/CreatePatientMedication",formdata)
  }
  public AddMasterDrug(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/Drugs/CreateMasterDrug",formdata)
  }
  public AddMasterDignosis(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/Diagnosis/CreateMasterDiagnosis",formdata)
  }
  public AddMasterAllergy(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/Allergies/CreateMasterAllergy",formdata)
  }
  public AddPatientProcedure(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/Procedures/CreateProcedureInfo",formdata)
  }
  public AddPatientVitalSign(formdata:any){
    debugger
    return this.http.post<any>("http://localhost:39671/api/VitalInfos/CreateVitalInfo",formdata)
  }
  public GetPatientUsers():Observable<any>{
    //return this.http.get<any>(this.APIUrl);
    //changes According to Api URL
    return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/4");
    
  }

  public GetPhyasicanUsers():Observable<any>{
    //return this.http.get<any>(this.APIUrl);
    //changes According to Api URL
    return this.http.get<any>("http://localhost:29345/api/Admins/GetByRoleId/2");
    
  }


  public GetDiagnosisMasterData():Observable<any>{
 
    return this.http.get<any>("http://localhost:39671/api/Diagnosis/GetAllDiagnosis");
    
  }
  public GetDrugMasterData():Observable<any>{
 
    return this.http.get<any>("http://localhost:39671/api/Drugs/GetAllDrugs");
    
  }
  public GetProcedureData():Observable<any>{
 
    return this.http.get<any>("http://localhost:39671/api/Procedures/GetAllProcedures");  
    
  }

}

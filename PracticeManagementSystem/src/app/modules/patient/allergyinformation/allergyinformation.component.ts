import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAllergy } from 'IAllergy';
import { Subscription } from 'rxjs';
import { AllergyserviceService } from 'src/app/allergyservice.service';

@Component({
  selector: 'app-allergyinformation',
  templateUrl: './allergyinformation.component.html',
  styleUrls: ['./allergyinformation.component.css']
})
export class AllergyinformationComponent implements OnInit {

  allergyForm: FormGroup|any=null;
  isSubmitted!: boolean;
  type:number=0;
  enteredAlleryName:any;
  enteredAllergyclinicalinfo:any="";
  allergies: any[] = [];
  validationSubscription!: Subscription;
  allergynameddl:any="";
  showClinicalInfo:any="";
  BreakException:any = {};


  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  
  constructor(private fb: FormBuilder,private allergyService:AllergyserviceService,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.localUser=localStorage.getItem('currentUser');
          this.currentUser=JSON.parse(this.localUser);
          this.currentUserId=this.currentUser.userId;

    this.allergyForm = this.fb.group({
      hasAllergy:[''],
      allergyId: [''],
      allergyType: [''],    
      allergyName: [''], 
      allergyDescription: [''], 
      clinicalInfo: [''], 
      isFatal: [''],
      userId:['']
    });
    
    this.validationSubscription = this.allergyForm
                              .get('hasAllergy')
                              .valueChanges
                              .subscribe((newValue: number) => {
      if (newValue === 0) {
        this.allergyForm.get('allergyName').clearValidators();
        this.allergyForm.get('isFatal').clearValidators();
        this.allergyForm.get('clinicalInfo').clearValidators();
      } else {
        this.allergyForm.get('allergyName').setValidators([Validators.required]);
        this.allergyForm.get('isFatal').setValidators([Validators.required]);
        this.allergyForm.get('allergyDescription').setValidators([Validators.required,Validators.minLength(50),Validators.maxLength(1000)]);
      }
      // force valitators to be triggered, to update form validity.
      this.allergyForm.get('allergyName').updateValueAndValidity();
    });
    
    this.allergyService.getAllergies().subscribe(
      (data: any[]) => {
        debugger
        this.allergies = data;
      },

      (error) => {
        console.log('error', error);
      }
    );   
   
  }
  
  showAllergyId:any="";

  showClinicalInfoandAllergyIdOnAllergyName():void{ 
    try{
          this.allergies.forEach(record=>{
          if(this.allergynameddl==record.allergyName)
          {
            this.showAllergyName=record.allergyName;
            this.showAllergyType=record.allergyType;
            this.showClinicalInfo=record.clinicalInfo;
            this.showAllergyId=record.allergyId;
            throw this.BreakException;
          }
      });
    }
    catch(e)
    {
      console.log(e);
    }    
  }

  allergyIdDdl:any="";
  showAllergyType:any="";
  showAllergyName:any="";

  showOtherFieldsOnAllergyId():void{ 
    try{
          this.allergies.forEach(record=>{
          if(this.allergyIdDdl==record.allergyId)
          {
            this.showAllergyId=record.allergyId;
            this.showAllergyType=record.allergyType;
            this.showAllergyName=record.allergyName;
            this.showClinicalInfo=record.clinicalInfo;
            throw this.BreakException;
          }
      });
    }
    catch(e)
    {
      console.log(e);
    }    
  }

  otherAllergyName:any="";
  settingAllergyName():void{
    this.showAllergyName=this.allergynameddl;
  }

  get f() {
    return this.allergyForm?.controls;
  }

  onSubmit(){   
    // if(this.allergyForm.invalid)
    // {
    //   alert("Please fill all form fields");
    //   return;
    // }
    // else
    // {
      debugger
      this.isSubmitted=true;
      this.f.userId.setValue(this.currentUserId);
      this.f.allergyId.setValue(this.showAllergyId);
      this.f.clinicalInfo.setValue(this.showClinicalInfo);
      this.f.allergyType.setValue(this.showAllergyType);
      this.f.allergyName.setValue(this.showAllergyName);
        this.http.post<any>("http://localhost:39671/api/Allergies/CreatePatientAllergyInfo", this.allergyForm.value)
      .subscribe(res =>{
      console.log(this.allergyForm.value);
        alert("Allergy Form submitted successfully...!");
        this.allergyForm.reset();
        this.router.navigateByUrl('patientscheduling');
      },err=>{
      alert("Something went wrong...!");
      })
    //}    
   }

   ngOnDestroy() {
    if (this.validationSubscription) {
      this.validationSubscription.unsubscribe();
    }
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}

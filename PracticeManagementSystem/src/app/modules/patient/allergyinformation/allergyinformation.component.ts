import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  allergies: IAllergy[] = [];
  validationSubscription!: Subscription;
  allergynameddl:any="";
  showClinicalInfo:any="";
  BreakException:any = {};
  
  constructor(private fb: FormBuilder,private allergyService:AllergyserviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.allergyForm = this.fb.group({
      hasallergy:[''],
      allergyid: [''],
      allergytype: [''],    
      allergyname: [''], 
      allergydescription: [''], 
      allergyclinicalinfo: [''], 
      isfatal: ['']
    });
    
    this.validationSubscription = this.allergyForm
                              .get('hasallergy')
                              .valueChanges
                              .subscribe((newValue: number) => {
      if (newValue === 0) {
        this.allergyForm.get('allergyname').clearValidators();
        this.allergyForm.get('isfatal').clearValidators();
        this.allergyForm.get('allergydescription').clearValidators();
      } else {
        this.allergyForm.get('allergyname').setValidators([Validators.required]);
        this.allergyForm.get('isfatal').setValidators([Validators.required]);
        this.allergyForm.get('allergydescription').setValidators([Validators.required,Validators.minLength(50),Validators.maxLength(1000)]);
      }
      // force valitators to be triggered, to update form validity.
      this.allergyForm.get('allergyname').updateValueAndValidity();
    });
    
    this.allergyService.getAllergies().subscribe(
      (data: IAllergy[]) => {
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
          if(this.allergynameddl==record.allergyname)
          {
            this.showAllergyName=record.allergyname;
            this.showAllergyType=record.allergytype;
            this.showClinicalInfo=record.allergyclinicalinfo;
            this.showAllergyId=record.allergyid;
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
          if(this.allergyIdDdl==record.allergyid)
          {
            this.showAllergyId=record.allergyid;
            this.showAllergyType=record.allergytype;
            this.showAllergyName=record.allergyname;
            this.showClinicalInfo=record.allergyclinicalinfo;
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
      this.f.allergyid.setValue(this.showAllergyId);
      this.f.allergyclinicalinfo.setValue(this.showClinicalInfo);
      this.f.allergytype.setValue(this.showAllergyType);
      this.f.allergyname.setValue(this.showAllergyName);
        this.http.post<any>("http://localhost:3000/patientallergyinfo", this.allergyForm.value)
      .subscribe(res =>{
      console.log(this.allergyForm.value);
        alert("Allergy Form submitted successfully...!");
        this.allergyForm.reset();
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
  
}

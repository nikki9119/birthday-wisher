import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import { bName,fallen, setWished } from '../shared/material-module/material.module';
import { WishTransportService } from '../shared/services/wish-transport.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-create-wish',
  templateUrl: './create-wish.component.html',
  styleUrls: ['./create-wish.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CreateWishComponent implements OnInit {

  name: string;
  fallen:boolean;
  isLoading = false;
  isSent = false;
  timer=null;
  constructor(
    private formbuild:FormBuilder,
    private wishTransport: WishTransportService,
    private snack: MatSnackBar,
    private router:Router,
    private titleset:Title) {
      this.name = bName;
      this.fallen = fallen;
      this.titleset.setTitle('Wish');
    }

  agreementForm: FormGroup;
  basicInfoForm: FormGroup;
  aboutForm: FormGroup;
  wishForm:FormGroup;
  ngOnInit(){
    this.agreementForm = this.formbuild.group({
      hasAgreed: [null, Validators.required]
    });
    this.basicInfoForm = this.formbuild.group({
      name: ['',Validators.required],
      gender:['',Validators.required]
    });
    this.aboutForm = this.formbuild.group({
      whenKnown: ['',Validators.required],
      whenKnownSpecify: [''],
      rememberMet:['',Validators.required],
      howMet:[''],
      hasNickname:['',Validators.required],
      nickname:[''],
      likedThings:['',Validators.required],
      bestMemory:['',Validators.required]
    });
    this.wishForm = this.formbuild.group({
      wish:['',Validators.required]
    });
  }
  saveWish(){
    this.isLoading = true;
    if(!navigator.onLine){
      this.snack.open('Please check your internet connection and try again.','',{
        duration:3000,
        panelClass: ['mat-simple-snackbar']
      });
      this.isLoading= false;
    }
    this.wishTransport.addWish(this.aboutForm.value,this.basicInfoForm.value,this.wishForm.value)
    .then((val)=>{
      console.log(val);
      this.isLoading = false;
      this.isSent = true;
      setTimeout(()=>{
        this.router.navigate(['home']);
      },3500)
      this.snack.open('Your wish has been submitted successfully!','',{
        duration:3000,
        panelClass: ['mat-simple-snackbar']
      });
      setWished();
    },
    (err)=>{
      this.isLoading = false;
      this.snack.open('There has been some error, please try again after some time.','',{
        duration:3000,
        panelClass: ['mat-simple-snackbar']
      });
    });
  }
}

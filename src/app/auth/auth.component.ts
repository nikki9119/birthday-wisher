import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  pwd = new FormControl('',Validators.required);
  savedpwd = '';
  constructor(
    private snack:MatSnackBar,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  authenticate(){
    if(this.pwd.value==this.savedpwd){
      localStorage.clear();
      localStorage.setItem('Blogged','true');
      setTimeout(()=>{
        this.router.navigate(['home']);
      },3500)
      this.snack.open('Authentication Successful, Welcome pakki !','',{
        duration:3000,
        panelClass:['mat-simple-snackbar']
      });
    }
    else{
      console.log("failed");
      this.snack.open('Authentication Failed, You cannot access data. Please contact the Administrator.','',{
        duration:3000,
        panelClass:['mat-simple-snackbar']
      });
    }
  }
}

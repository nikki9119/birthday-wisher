import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fallen } from './../shared/material-module/material.module';

@Component({
  selector: 'app-open-last',
  templateUrl: './open-last.component.html',
  styleUrls: ['./open-last.component.scss']
})
export class OpenLastComponent implements OnInit {
  logged = false;
  fallen:boolean;
  constructor(private router:Router) {
    this.fallen = fallen;
   }

  ngOnInit(): void {
    if(localStorage.getItem('Blogged')=='true'){
      this.logged = true;
    }
    else{
      this.router.navigate(['auth']);
    }
  }

}

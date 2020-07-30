import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bName, fallen, wished } from './../shared/material-module/material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    name:  string;
    fallen:boolean;
    wished:boolean;
  constructor(private titleset:Title) {
    this.name = bName;
    this.fallen = fallen;
    this.wished = wished;
    this.titleset.setTitle('Happy birthday '+this.name+'!');
   }

  ngOnInit(): void {
  }

}

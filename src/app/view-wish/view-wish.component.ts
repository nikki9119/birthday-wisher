import { Component, OnInit } from '@angular/core';
import { WishTransportService } from '../shared/services/wish-transport.service';
import { Full } from '../shared/models/wish.model';
import { MatDialog } from '@angular/material/dialog';
import { WishModalComponent } from '../shared/wish-modal/wish-modal.component';
import { Title } from '@angular/platform-browser';
import { fallen } from './../shared/material-module/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-wish',
  templateUrl: './view-wish.component.html',
  styleUrls: ['./view-wish.component.scss']
})
export class ViewWishComponent implements OnInit {

  fetching:boolean;
  fallen:boolean;
  wishes:any;
  logged = false;
  constructor(
    private wishTransport: WishTransportService,
    private dialog:MatDialog,
    private titleset:Title,
    private router:Router
    ) { 
      this.titleset.setTitle('View Wishes');
      this.fallen = fallen;
    }

  ngOnInit(): void {
    if(localStorage.getItem('Blogged')=='true'){
      this.logged = true;
    }
    else{
      this.router.navigate(['auth']);
    }
    if(this.fallen && this.logged){
      this.getAllWishes();
    }
  }
  getAllWishes=()=>{
    this.fetching=true;
    this.wishTransport.getAll().subscribe(
      res=>{this.wishes = res;this.fetching=false;}
    );
  }
  openWish(wishdata:Full){
    const modalRef = this.dialog.open(
      WishModalComponent,{
        width:"100%",
        height:"70%",
        data:wishdata
      }
    )
  }
}

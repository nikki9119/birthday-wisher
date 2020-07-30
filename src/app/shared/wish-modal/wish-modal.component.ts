import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Full } from '../models/wish.model';

@Component({
  selector: 'app-wish-modal',
  templateUrl: './wish-modal.component.html',
  styleUrls: ['./wish-modal.component.scss']
})
export class WishModalComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data:Full,
    public modalRef : MatDialogRef<WishModalComponent>
    ) { }

  ngOnInit(): void {
  }
  close():void{
    this.modalRef.close();
  }
}

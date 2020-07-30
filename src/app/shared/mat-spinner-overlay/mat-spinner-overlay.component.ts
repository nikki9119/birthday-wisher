import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-spinner',
  templateUrl: './mat-spinner-overlay.component.html',
  styleUrls: ['./mat-spinner-overlay.component.scss']
})
export class MatSpinnerOverlayComponent implements OnInit {

  constructor() { }

  @Input() diameter: number = 70;
  @Input() mode : string ="indeterminate";
  @Input() strokeWidth : number = 7;
  @Input() overlay: boolean = false;
  @Input() color: string = "primary";

  ngOnInit() {

  }

}


import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.scss']
})
export class WishCardComponent implements OnInit {

  @Input() data:{name:string,wish:string};
  @Input() name:string;
  @Input() wish:string;
  @Output() emitEvent: EventEmitter<any> = new EventEmitter();
  trimmedWish:string;
  constructor() {
   }

  ngOnInit(): void {
  }
  trimdata(wish:string){
    if(wish.length<25){
      return wish;
    }
    else{
      this.trimmedWish = wish.split(' ')[0]+' '+wish.split(' ')[1]
                        +' '+wish.split(' ')[2]+' ...';
      return this.trimmedWish;
    }
  }
}

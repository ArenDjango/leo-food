import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders = [{id: 1, open: 'close'}, {id: 2, open: 'close'}, {id: 3, open: 'close'}];

  constructor() { }

  ngOnInit(): void {
  }

  public  switchOpen(event, item){
    let count = 0;
    for (let obj of this.orders){
      if(item === obj.id){
        if(this.orders[count].open === 'open'){
          this.orders[count].open = 'close';
        }else{
          this.orders[count].open = 'open';
        }
      }
      count++;
    }
  }

}

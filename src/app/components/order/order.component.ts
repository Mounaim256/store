import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/interfaces/Order';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderListe : Order[] = [];

  constructor(private auth : AuthService,
              private order : OrderService) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(){
    this.auth.isConnected()
             .pipe(map(data => data.uid),switchMap((id)=> this.order.getOrder(id)))
             .subscribe((dataOrder)=>this.orderListe = dataOrder);
  }

}

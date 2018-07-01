import { Component, OnInit } from '@angular/core';
import {ItemService} from '../app.service'

import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public itemArray=[];
  
  public addedItem=[];
  public cartAdded:boolean=false;
  public openPanel:boolean=false;
  public itemId=[];
  constructor(private itemService:ItemService,private router:Router){
    this.itemArray=this.itemService.getItems();
    
  }

  ngOnInit() {
  }
  onBuy(item){
    
    this.cartAdded=true;
    this.itemId=this.itemService.getItemId()
   
    if(this.itemId.indexOf(item.ItemId)==-1){
      item.quantity=1;
       this.itemService.addToCart(item)
      }
    else {
      
      this.itemService.updateExistingOrder(item.ItemId);
    }
  }

  openCart(){
    this.router.navigate(['/shopping-cart'])
    
  }

  drag(ev,data) {
    ev.dataTransfer.setData(data.ItemId, ev.target.id);
}
openFilter(){
  this.openPanel=!this.openPanel
}
filterItems(val){
  console.log(val);
}
}

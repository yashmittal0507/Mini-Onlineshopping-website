import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { ItemService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnChanges {
  getItem:any;
  deleteFlag:boolean=false;
  removeItem:any
  totalAmount:number=0;

 
    
  constructor(private itemService:ItemService,private router:Router) { 
   
    
  }

  ngOnChanges() {
    
  }

  ngOnInit() {
    this.getItem=this.itemService.returnItem();
    
    this.removeItem=this.getItem.slice()
    this.displayTotalAmount()
  }
  onDelete(index,item){
    this.totalAmount=0
    this.getItem.splice(index,1)
    this.itemService.deleteItemId(item)
    this.displayTotalAmount()
  }

  goToHome(){
    this.router.navigate(['/'])
  }
  displayTotalAmount(){
    for(let i=0;i<this.getItem.length;i++){
      this.totalAmount+=this.getItem[i].price*this.getItem[i].quantity
    }
  }

  checkoutPage(){
    this.router.navigate(['/checkoutPage'])
  }

}

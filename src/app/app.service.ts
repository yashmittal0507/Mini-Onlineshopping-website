import {Injectable} from '@angular/core';
import {Item} from './data.model';


@Injectable()
export class ItemService {
 itemId=[];
 items:Item[]=[

        new Item(1,'samsung Mobile',600,1,20),
        new Item(2,'Motorala Mobile',300,1,10),
        new Item(3,'Sony Telivision',350,1,40)
    ]
  

itemsCart=[];
    constructor(){

    }

    getItems(){
        return this.items
    }

    addToCart(item){
       
        this.itemsCart.push(item);
        this.itemId.push(item.ItemId);
      }
    
    updateExistingOrder(id){
        for(let i=0;i<this.itemsCart.length;i++){
            if(this.itemsCart[i].ItemId==id){
                this.itemsCart[i].quantity+=1
            }
        }
    }

    returnItem(){
        
        return this.itemsCart
    }
    getItemId(){
        return this.itemId
    }
    deleteItemId(item){
     item.quantity=1;
    this.itemId.splice(this.itemId.indexOf(item.ItemId),1)
   
    
    }
    resetCart(){
        this.itemsCart=[];
        this.itemId=[];
    }

    sort(){
        this.items.sort((a,b) => {
            return a.price-b.price
        })
        .sort((a,b)=>{
            return a.discount-b.discount
        })
    }
    
}
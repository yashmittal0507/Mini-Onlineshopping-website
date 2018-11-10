import { Component,AfterViewInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from './app.service'

import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  data:any
  @ViewChild(HomeComponent)

  accessHome:HomeComponent
  public cartAdded:boolean=false;
 
  constructor(private itemService:ItemService,private router:Router,private loginService:LoginService){
   this.router.navigate(['/'])
    
  }

allowDrop(ev) {
    ev.preventDefault();
}



drop(ev) {
    ev.preventDefault();
    this. data = ev.dataTransfer.types[0]
    let itemCollection=this.accessHome.itemArray
    let itemIndex:number;
    for(let i=0;i<itemCollection.length;i++){
    if(this.data == itemCollection[i].ItemId){
      this.accessHome.onBuy(itemCollection[i])
    }
  }
   
}

  
 
  

  


}

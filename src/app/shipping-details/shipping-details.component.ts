import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../app.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {
  orderPlaced:boolean=true;
  message:boolean=false;
  form:FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private itemService:ItemService) { 
    this.form = fb.group({
      contact: fb.group({
        name: ['', [Validators.required,Validators.minLength(3)]],
        address:['', [Validators.required]],
      }),
     
    });
  }

  ngOnInit() {
  }
  onPlaceOrder(form:FormGroup){
    if(form.status =='VALID'){
      this.message=true;
      this.orderPlaced=true;
      this.itemService.resetCart();
    }
    else {
      this.message=false;
      this.orderPlaced=false;
    }
   
    console.log(form);
  }

  get name(){
    return this.form.get('contact.name')
  }
  get address(){
    return this.form.get('contact.address')
  }

  goToHome(){
    this.itemService.resetCart();
    this.router.navigate(['/'])
  }


}

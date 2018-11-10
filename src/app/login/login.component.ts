import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {LoginService} from './login.service'
import {LoaderComponent} from '../loader/loader.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form:FormGroup
 loginDetails:any[];
 isLogged:boolean=true;
 loader:boolean=false;
  constructor(private loginService:LoginService,private router:Router ) { 
        this.form = new FormGroup({
            username: new FormControl('',Validators.required),
            password: new FormControl('',Validators.required)
        })

        
  }

  ngOnInit() {
  this.loginService.getLoginDetails()
  }
  loginFormSubmit(form){
    this.isLogged = this.loginService.verifyUser(this.form.value)
    if(!this.isLogged){
        this.form.setErrors({
            invalidLogin:true
        })
        this.loader=false;
    }

    else {
        this.loader=true;
        alert('Login is Successful')
        setTimeout(()=>{
            
            this.router.navigate(['/home'])
        },5000)
        
    }
      console.log(form)
  }

//   verifyUser(){
//       this.isLogged=this.loginService.verifyUser()
//   }

}
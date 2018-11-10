import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class LoginService {
    userDetails:any[]
    isSuccess:boolean
    constructor(private httpClient:HttpClient){

    }

    getLoginDetails(){
         this.httpClient.get<any[]>('assets/login-data.json'
        )
        .pipe(
            catchError(this.handleError)
        )
        .subscribe(user=>{
            this.userDetails =user.slice()
        
        })
    }

    verifyUser(userDetails){
        this.isSuccess=false;
        this.userDetails.forEach(itm =>{
            if(itm[userDetails.username]== userDetails.password){
                this.isSuccess= true
            }
           
        })
        return this.isSuccess
       
    }

    isAuthenticated(){
        return this.isSuccess
    }

    logout(){
        this.isSuccess=false;
    }

    private handleError(error:HttpErrorResponse){
        return ErrorObservable.create(
            'Something bad happened; please try again later.');
    }
}
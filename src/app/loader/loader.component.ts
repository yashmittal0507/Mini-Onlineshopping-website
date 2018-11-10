import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="loader"></div>`,
  styles: [`
  .loader {
    position:relative;
    margin:0 auto;
    
    border: 16px solid green;
    border-radius: 50%;
    border-top: 16px solid grey;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    top:-120px
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  `]
})
export class LoaderComponent  {
 
}

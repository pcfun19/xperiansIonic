import { Component } from '@angular/core';
import { ElementRef, OnInit, ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class Home  {

  constructor(private el:ElementRef, public platform: Platform) {
  }

  ngOnInit (){

  }
  
  ionViewDidEnter() {
    var appHeader = this.el.nativeElement.querySelector('ion-header').offsetHeight;
    var appFooter = this.el.nativeElement.querySelector('ion-footer').offsetHeight;
    var viewHeight = this.platform.height();
    if (this.platform.width()>this.platform.height()){

        this.el.nativeElement.querySelectorAll('.container').forEach(el => 
            {  el.style.width = viewHeight-appHeader-appFooter+'px';}
        ); 

      } else {

        this.el.nativeElement.querySelectorAll('.container').forEach(el => 
          {  el.style.width = '95%'; }
        ); 
    
      }
 
        this.el.nativeElement.querySelectorAll('.containerImg').forEach(el => 
            {  el.style.height = el.width/4*3+'px'; }
        ); 
    console.log(appFooter);


  }


}

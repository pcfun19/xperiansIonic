import { Component } from '@angular/core';
import { ElementRef, OnInit, ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class Home  {

  data = [];
  constructor(private el:ElementRef, public platform: Platform) {
  }

  ngOnInit (){

    this.data['image'] = 'https://ionicframework.com/docs/demos/api/card/madison.jpg';
    this.data['description'] = 'testing';
  }

  swiperight () {
    console.log('right');
  }  
  
  swipeleft () {
    console.log('left');
  }

  swipeup () {
    console.log('up');
  }

  swipedown () {
    console.log('down');
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
  }


}

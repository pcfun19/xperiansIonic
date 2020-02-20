import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Home } from './home';
import { Header } from "../templates/header/header.temp";
import { Footer } from "../templates/footer/footer.temp";

import {SwipeCardLibModule} from 'ng-swipe-card';
import {SW_SWIPE_CARD_DEFAULT_OPTIONS} from 'ng-swipe-card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipeCardLibModule,
    RouterModule.forChild([
      {
        path: '',
        component: Home
      }
    ])
  ],
  providers: [{
    provide: SW_SWIPE_CARD_DEFAULT_OPTIONS,
    useValue: {likeColor: '255,255,255', dislikeColor: '255,255,255'},
  }],
  entryComponents: [Header, Footer],
  declarations: [Home, Header, Footer]
})
export class HomeModule {}

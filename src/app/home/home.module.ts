import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Home } from './home';
import { Header } from "../templates/header/header.temp";
import { Footer } from "../templates/footer/footer.temp";

import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NbCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: Home
      }
    ])
  ],
  entryComponents: [Header, Footer],
  declarations: [Home, Header, Footer]
})
export class HomeModule {}

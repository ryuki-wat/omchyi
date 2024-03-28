import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutenscPageRoutingModule } from './routensc-routing.module';

import { RoutenscPage } from './routensc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutenscPageRoutingModule
  ],
  declarations: [RoutenscPage]
})
export class RoutenscPageModule {}

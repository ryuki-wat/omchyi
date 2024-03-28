import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinrtPageRoutingModule } from './prinrt-routing.module';

import { PrinrtPage } from './prinrt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrinrtPageRoutingModule
  ],
  declarations: [PrinrtPage]
})
export class PrinrtPageModule {}

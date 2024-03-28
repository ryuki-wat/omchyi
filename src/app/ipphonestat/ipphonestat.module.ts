import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IpphonestatPageRoutingModule } from './ipphonestat-routing.module';

import { IpphonestatPage } from './ipphonestat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IpphonestatPageRoutingModule
  ],
  declarations: [IpphonestatPage]
})
export class IpphonestatPageModule {}

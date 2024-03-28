import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IpphonePageRoutingModule } from './ipphone-routing.module';

import { IpphonePage } from './ipphone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IpphonePageRoutingModule
  ],
  declarations: [IpphonePage]
})
export class IpphonePageModule {}

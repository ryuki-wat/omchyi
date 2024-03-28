import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IpphoneselectPageRoutingModule } from './ipphoneselect-routing.module';

import { IpphoneselectPage } from './ipphoneselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IpphoneselectPageRoutingModule
  ],
  declarations: [IpphoneselectPage]
})
export class IpphoneselectPageModule {}

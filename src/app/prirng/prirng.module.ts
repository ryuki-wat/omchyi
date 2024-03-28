import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrirngPageRoutingModule } from './prirng-routing.module';

import { PrirngPage } from './prirng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrirngPageRoutingModule
  ],
  declarations: [PrirngPage]
})
export class PrirngPageModule {}

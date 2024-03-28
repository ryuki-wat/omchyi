import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpcPageRoutingModule } from './spc-routing.module';

import { SpcPage } from './spc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpcPageRoutingModule
  ],
  declarations: [SpcPage]
})
export class SpcPageModule {}

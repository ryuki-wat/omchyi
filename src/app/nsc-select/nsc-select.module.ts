import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NscSelectPageRoutingModule } from './nsc-select-routing.module';

import { NscSelectPage } from './nsc-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NscSelectPageRoutingModule
  ],
  declarations: [NscSelectPage]
})
export class NscSelectPageModule {}

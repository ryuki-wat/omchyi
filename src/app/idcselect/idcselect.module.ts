import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdcselectPageRoutingModule } from './idcselect-routing.module';

import { IdcselectPage } from './idcselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdcselectPageRoutingModule
  ],
  declarations: [IdcselectPage]
})
export class IdcselectPageModule {}

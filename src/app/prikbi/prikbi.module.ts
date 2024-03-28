import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrikbiPageRoutingModule } from './prikbi-routing.module';

import { PrikbiPage } from './prikbi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrikbiPageRoutingModule
  ],
  declarations: [PrikbiPage]
})
export class PrikbiPageModule {}

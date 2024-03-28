import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrikosPageRoutingModule } from './prikos-routing.module';

import { PrikosPage } from './prikos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrikosPageRoutingModule
  ],
  declarations: [PrikosPage]
})
export class PrikosPageModule {}

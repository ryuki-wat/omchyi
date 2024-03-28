import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriskaPageRoutingModule } from './priska-routing.module';

import { PriskaPage } from './priska.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriskaPageRoutingModule
  ],
  declarations: [PriskaPage]
})
export class PriskaPageModule {}

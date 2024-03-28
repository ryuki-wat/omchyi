import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectSelectPageRoutingModule } from './elect-select-routing.module';

import { ElectSelectPage } from './elect-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectSelectPageRoutingModule
  ],
  declarations: [ElectSelectPage]
})
export class ElectSelectPageModule {}

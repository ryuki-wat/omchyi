import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectPageRoutingModule } from './elect-routing.module';

import { ElectPage } from './elect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectPageRoutingModule
  ],
  declarations: [ElectPage]
})
export class ElectPageModule {}

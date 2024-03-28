import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriotherPageRoutingModule } from './priother-routing.module';

import { PriotherPage } from './priother.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriotherPageRoutingModule
  ],
  declarations: [PriotherPage]
})
export class PriotherPageModule {}

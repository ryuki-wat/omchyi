import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrichartPageRoutingModule } from './prichart-routing.module';

import { PrichartPage } from './prichart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrichartPageRoutingModule
  ],
  declarations: [PrichartPage]
})
export class PrichartPageModule {}

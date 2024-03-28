import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricpnPageRoutingModule } from './pricpn-routing.module';

import { PricpnPage } from './pricpn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricpnPageRoutingModule
  ],
  declarations: [PricpnPage]
})
export class PricpnPageModule {}

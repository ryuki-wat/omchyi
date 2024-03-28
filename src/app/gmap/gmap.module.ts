import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { IonicModule } from '@ionic/angular';

import { GmapPageRoutingModule } from './gmap-routing.module';

import { GmapPage } from './gmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GmapPageRoutingModule,
    GoogleMapsModule,
  ],
  declarations: [GmapPage]
})
export class GmapPageModule {}

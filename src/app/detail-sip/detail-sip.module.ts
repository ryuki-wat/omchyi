import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSipPageRoutingModule } from './detail-sip-routing.module';

import { DetailSipPage } from './detail-sip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSipPageRoutingModule
  ],
  declarations: [DetailSipPage]
})
export class DetailSipPageModule {}

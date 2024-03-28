import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TtDetailPageRoutingModule } from './tt-detail-routing.module';

import { TtDetailPage } from './tt-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TtDetailPageRoutingModule
  ],
  declarations: [TtDetailPage]
})
export class TtDetailPageModule {}

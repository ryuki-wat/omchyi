import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PripnaPageRoutingModule } from './pripna-routing.module';

import { PripnaPage } from './pripna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PripnaPageRoutingModule
  ],
  declarations: [PripnaPage]
})
export class PripnaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotPageRoutingModule } from './cot-routing.module';

import { CotPage } from './cot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotPageRoutingModule
  ],
  declarations: [CotPage]
})
export class CotPageModule {}

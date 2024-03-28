import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cot073PageRoutingModule } from './cot073-routing.module';

import { Cot073Page } from './cot073.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cot073PageRoutingModule
  ],
  declarations: [Cot073Page]
})
export class Cot073PageModule {}

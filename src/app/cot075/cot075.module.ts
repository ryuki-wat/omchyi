import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cot075PageRoutingModule } from './cot075-routing.module';

import { Cot075Page } from './cot075.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cot075PageRoutingModule
  ],
  declarations: [Cot075Page]
})
export class Cot075PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cot074PageRoutingModule } from './cot074-routing.module';

import { Cot074Page } from './cot074.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cot074PageRoutingModule
  ],
  declarations: [Cot074Page]
})
export class Cot074PageModule {}

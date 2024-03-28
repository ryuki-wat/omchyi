import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cot076PageRoutingModule } from './cot076-routing.module';

import { Cot076Page } from './cot076.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cot076PageRoutingModule
  ],
  declarations: [Cot076Page]
})
export class Cot076PageModule {}

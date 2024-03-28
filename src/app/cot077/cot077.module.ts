import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cot077PageRoutingModule } from './cot077-routing.module';

import { Cot077Page } from './cot077.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cot077PageRoutingModule
  ],
  declarations: [Cot077Page]
})
export class Cot077PageModule {}

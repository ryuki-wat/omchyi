import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ltgnsc2PageRoutingModule } from './ltgnsc2-routing.module';

import { Ltgnsc2Page } from './ltgnsc2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ltgnsc2PageRoutingModule
  ],
  declarations: [Ltgnsc2Page]
})
export class Ltgnsc2PageModule {}

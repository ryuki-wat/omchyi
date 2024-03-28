import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ltgnsc1PageRoutingModule } from './ltgnsc1-routing.module';

import { Ltgnsc1Page } from './ltgnsc1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ltgnsc1PageRoutingModule
  ],
  declarations: [Ltgnsc1Page]
})
export class Ltgnsc1PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PripktPageRoutingModule } from './pripkt-routing.module';

import { PripktPage } from './pripkt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PripktPageRoutingModule
  ],
  declarations: [PripktPage]
})
export class PripktPageModule {}

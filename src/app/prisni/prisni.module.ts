import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrisniPageRoutingModule } from './prisni-routing.module';

import { PrisniPage } from './prisni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrisniPageRoutingModule
  ],
  declarations: [PrisniPage]
})
export class PrisniPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiptotalPageRoutingModule } from './siptotal-routing.module';

import { SiptotalPage } from './siptotal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiptotalPageRoutingModule
  ],
  declarations: [SiptotalPage]
})
export class SiptotalPageModule {}

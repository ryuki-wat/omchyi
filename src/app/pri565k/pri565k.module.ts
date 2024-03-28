import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pri565kPageRoutingModule } from './pri565k-routing.module';

import { Pri565kPage } from './pri565k.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pri565kPageRoutingModule
  ],
  declarations: [Pri565kPage]
})
export class Pri565kPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdcservPageRoutingModule } from './idcserv-routing.module';

import { IdcservPage } from './idcserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdcservPageRoutingModule
  ],
  declarations: [IdcservPage]
})
export class IdcservPageModule {}

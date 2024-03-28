import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PritrgPageRoutingModule } from './pritrg-routing.module';

import { PritrgPage } from './pritrg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PritrgPageRoutingModule
  ],
  declarations: [PritrgPage]
})
export class PritrgPageModule {}

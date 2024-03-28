import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinwtPageRoutingModule } from './prinwt-routing.module';

import { PrinwtPage } from './prinwt.page';
import { PdfViewerModule} from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrinwtPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [PrinwtPage]
})
export class PrinwtPageModule {}

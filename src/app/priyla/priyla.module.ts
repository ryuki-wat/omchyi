import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriylaPageRoutingModule } from './priyla-routing.module';

import { PriylaPage } from './priyla.page';
import { PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriylaPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [PriylaPage]
})
export class PriylaPageModule {}

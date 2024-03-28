import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TtPageRoutingModule } from './tt-routing.module';
import { TtPage } from './tt.page';
import { PdfViewerModule} from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TtPageRoutingModule,
    PdfViewerModule,
  ],
  declarations: [TtPage]
})
export class TtPageModule {}

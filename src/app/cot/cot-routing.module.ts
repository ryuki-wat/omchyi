import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotPage } from './cot.page';

const routes: Routes = [
  {
    path: '',
    component: CotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotPageRoutingModule {}

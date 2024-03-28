import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikosPage } from './prikos.page';

const routes: Routes = [
  {
    path: '',
    component: PrikosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrikosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriylaPage } from './priyla.page';

const routes: Routes = [
  {
    path: '',
    component: PriylaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriylaPageRoutingModule {}

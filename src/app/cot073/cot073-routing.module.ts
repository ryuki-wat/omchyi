import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cot073Page } from './cot073.page';

const routes: Routes = [
  {
    path: '',
    component: Cot073Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cot073PageRoutingModule {}

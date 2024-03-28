import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cot075Page } from './cot075.page';

const routes: Routes = [
  {
    path: '',
    component: Cot075Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cot075PageRoutingModule {}

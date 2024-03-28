import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cot076Page } from './cot076.page';

const routes: Routes = [
  {
    path: '',
    component: Cot076Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cot076PageRoutingModule {}

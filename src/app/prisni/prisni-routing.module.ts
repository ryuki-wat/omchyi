import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrisniPage } from './prisni.page';

const routes: Routes = [
  {
    path: '',
    component: PrisniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrisniPageRoutingModule {}

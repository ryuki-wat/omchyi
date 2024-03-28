import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PritrgPage } from './pritrg.page';

const routes: Routes = [
  {
    path: '',
    component: PritrgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PritrgPageRoutingModule {}

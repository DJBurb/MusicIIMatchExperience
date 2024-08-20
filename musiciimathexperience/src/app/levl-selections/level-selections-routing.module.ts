import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelSelectionsPage } from './level-selections.page';

const routes: Routes = [
  {
    path: '',
    component: LevelSelectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelSelectionsPageRoutingModule {}

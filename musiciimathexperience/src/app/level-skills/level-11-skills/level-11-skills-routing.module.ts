import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level11SkillsPage } from './level-11-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level11SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level11SkillsPageRoutingModule {}

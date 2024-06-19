import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level3SkillsPage } from './level-3-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level3SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level3SkillsPageRoutingModule {}

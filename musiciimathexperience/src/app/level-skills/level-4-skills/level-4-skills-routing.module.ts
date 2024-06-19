import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level4SkillsPage } from './level-4-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level4SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level4SkillsPageRoutingModule {}

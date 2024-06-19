import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level8SkillsPage } from './level-8-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level8SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level8SkillsPageRoutingModule {}

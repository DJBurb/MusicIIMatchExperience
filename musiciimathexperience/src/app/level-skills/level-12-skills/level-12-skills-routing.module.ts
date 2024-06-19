import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level12SkillsPage } from './level-12-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level12SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level12SkillsPageRoutingModule {}

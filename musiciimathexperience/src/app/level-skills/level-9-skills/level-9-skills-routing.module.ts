import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level9SkillsPage } from './level-9-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level9SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level9SkillsPageRoutingModule {}

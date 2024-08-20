import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level3SkillsPageRoutingModule } from './level-3-skills-routing.module';

import { Level3SkillsPage } from './level-3-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level3SkillsPageRoutingModule
  ]
})
export class Level3SkillsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level4SkillsPageRoutingModule } from './level-4-skills-routing.module';

import { Level4SkillsPage } from './level-4-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level4SkillsPageRoutingModule
  ]
})
export class Level4SkillsPageModule {}

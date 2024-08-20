import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level2SkillsPageRoutingModule } from './level-2-skills-routing.module';

import { Level2SkillsPage } from './level-2-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level2SkillsPageRoutingModule
  ]
})
export class Level2SkillsPageModule {}

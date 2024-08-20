import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level6SkillsPageRoutingModule } from './level-6-skills-routing.module';

import { Level6SkillsPage } from './level-6-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level6SkillsPageRoutingModule
  ]
})
export class Level6SkillsPageModule {}

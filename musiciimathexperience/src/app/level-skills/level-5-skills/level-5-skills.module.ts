import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level5SkillsPageRoutingModule } from './level-5-skills-routing.module';

import { Level5SkillsPage } from './level-5-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level5SkillsPageRoutingModule
  ],
  declarations: [Level5SkillsPage]
})
export class Level5SkillsPageModule {}

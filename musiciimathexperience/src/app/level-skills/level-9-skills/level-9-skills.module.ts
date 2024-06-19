import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level9SkillsPageRoutingModule } from './level-9-skills-routing.module';

import { Level9SkillsPage } from './level-9-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level9SkillsPageRoutingModule
  ],
  declarations: [Level9SkillsPage]
})
export class Level9SkillsPageModule {}

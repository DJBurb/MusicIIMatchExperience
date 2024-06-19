import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verification-sent',
    loadChildren: () => import('./verification-sent/verification-sent.module').then( m => m.VerificationSentPageModule)
  },
  {
    path: 'finished-results',
    loadChildren: () => import('./finished-results/finished-results.module').then( m => m.FinishedResultsPageModule)
  },
  {
    path: 'game-play',
    loadChildren: () => import('./game-play/game-play.module').then( m => m.GamePlayPageModule)
  },
  {
    path: 'level-1-skills',
    loadChildren: () => import('./level-skills/level-1-skills/level-1-skills.module').then( m => m.Level1SkillsPageModule)
  },
  {
    path: 'level-2-skills',
    loadChildren: () => import('./level-skills/level-2-skills/level-2-skills.module').then( m => m.Level2SkillsPageModule)
  },
  {
    path: 'level-3-skills',
    loadChildren: () => import('./level-skills/level-3-skills/level-3-skills.module').then( m => m.Level3SkillsPageModule)
  },
  {
    path: 'level-4-skills',
    loadChildren: () => import('./level-skills/level-4-skills/level-4-skills.module').then( m => m.Level4SkillsPageModule)
  },
  {
    path: 'level-5-skills',
    loadChildren: () => import('./level-skills/level-5-skills/level-5-skills.module').then( m => m.Level5SkillsPageModule)
  },
  {
    path: 'level-6-skills',
    loadChildren: () => import('./level-skills/level-6-skills/level-6-skills.module').then( m => m.Level6SkillsPageModule)
  },
  {
    path: 'level-7-skills',
    loadChildren: () => import('./level-skills/level-7-skills/level-7-skills.module').then( m => m.Level7SkillsPageModule)
  },
  {
    path: 'level-8-skills',
    loadChildren: () => import('./level-skills/level-8-skills/level-8-skills.module').then( m => m.Level8SkillsPageModule)
  },
  {
    path: 'level-9-skills',
    loadChildren: () => import('./level-skills/level-9-skills/level-9-skills.module').then( m => m.Level9SkillsPageModule)
  },
  {
    path: 'level-10-skills',
    loadChildren: () => import('./level-skills/level-10-skills/level-10-skills.module').then( m => m.Level10SkillsPageModule)
  },
  {
    path: 'level-11-skills',
    loadChildren: () => import('./level-skills/level-11-skills/level-11-skills.module').then( m => m.Level11SkillsPageModule)
  },
  {
    path: 'level-12-skills',
    loadChildren: () => import('./level-skills/level-12-skills/level-12-skills.module').then( m => m.Level12SkillsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'level-1-skills',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path:'math-component-test',
    loadComponent: ()=>import('./component-tests/math-component-test/math-component-test.component').then((m)=>m.MathComponentTestComponent),
  },
  {
    path: 'results-test',
    loadComponent: ()=>import('./component-tests/results-component-test/results-test.component').then((m)=>m.ResultsTestComponent)
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.page').then( m => m.SignInPage)
  },
  {
    path: 'level-1-skills',
    loadComponent: () => import('./level-skills/level-1-skills/level-1-skills.page').then( m => m.Level1SkillsPage)
  },
  {
    path: 'level-2-skills',
    loadComponent: () => import('./level-skills/level-2-skills/level-2-skills.page').then( m => m.Level2SkillsPage)
  },
  {
    path: 'level-3-skills',
    loadComponent: () => import('./level-skills/level-3-skills/level-3-skills.page').then( m => m.Level3SkillsPage)
  },
  {
    path: 'level-4-skills',
    loadComponent: () => import('./level-skills/level-4-skills/level-4-skills.page').then( m => m.Level4SkillsPage)
  },
  {
    path: 'level-5-skills',
    loadComponent: () => import('./level-skills/level-5-skills/level-5-skills.page').then( m => m.Level5SkillsPage)
  },
  {
    path: 'level-6-skills',
    loadComponent: () => import('./level-skills/level-6-skills/level-6-skills.page').then( m => m.Level6SkillsPage)
  },
  {
    path: 'level-7-skills',
    loadComponent: () => import('./level-skills/level-7-skills/level-7-skills.page').then( m => m.Level7SkillsPage)
  },
  {
    path: 'level-8-skills',
    loadComponent: () => import('./level-skills/level-8-skills/level-8-skills.page').then( m => m.Level8SkillsPage)
  },
  {
    path: 'level-9-skills',
    loadComponent: () => import('./level-skills/level-9-skills/level-9-skills.page').then( m => m.Level9SkillsPage)
  },
  {
    path: 'level-10-skills',
    loadComponent: () => import('./level-skills/level-10-skills/level-10-skills.page').then( m => m.Level10SkillsPage)
  },
  {
    path: 'level-11-skills',
    loadComponent: () => import('./level-skills/level-11-skills/level-11-skills.page').then( m => m.Level11SkillsPage)
  },
  {
    path: 'level-12-skills',
    loadComponent: () => import('./level-skills/level-12-skills/level-12-skills.page').then( m => m.Level12SkillsPage)
  },
  {
    path: 'game-play',
    loadComponent: () => import('./game-play/game-play.page').then( m => m.GamePlayPage)
  },
  {
    path: 'finished-results',
    loadComponent: () => import('./finished-results/finished-results.page').then( m => m.FinishedResultsPage)
  },
];

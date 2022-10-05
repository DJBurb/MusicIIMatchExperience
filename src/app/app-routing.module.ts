import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../app/menu/menu.component';
import { SceneComponent } from '../app/scene/scene.component';
const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'scene', component: SceneComponent }
];
@NgModule({
  declarations: [
    MenuComponent,
    SceneComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
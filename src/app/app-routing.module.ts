import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KinematicLabComponent } from './kinematic-lab/kinematic-lab.component';

const routes: Routes = [
  {path: 'kinematic-lab', component: KinematicLabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

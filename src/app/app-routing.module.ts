import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLabComponent } from './dynamic-lab/dynamic-lab.component';
import { KinematicLabComponent } from './kinematic-lab/kinematic-lab.component';

const routes: Routes = [
  {path: 'kinematic-lab', component: KinematicLabComponent},
  {path: 'dynamic-lab', component: DynamicLabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

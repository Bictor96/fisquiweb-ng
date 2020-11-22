import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLabComponent } from './dynamic-lab/dynamic-lab.component';
import { EnergyLabComponent } from './energy-lab/energy-lab.component';
import { FrictionLabComponent } from './friction-lab/friction-lab.component';
import { KinematicLabComponent } from './kinematic-lab/kinematic-lab.component';

const routes: Routes = [
  {path: 'kinematic-lab', component: KinematicLabComponent},
  {path: 'dynamic-lab', component: DynamicLabComponent},
  {path: 'friction-lab', component: FrictionLabComponent},
  {path: 'energy-lab', component : EnergyLabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

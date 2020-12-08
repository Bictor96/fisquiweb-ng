import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CircuitsLabComponent } from './circuits-lab/circuits-lab.component';
import { DynamicLabComponent } from './dynamic-lab/dynamic-lab.component';
import { EnergyLabComponent } from './energy-lab/energy-lab.component';
import { FrictionLabComponent } from './friction-lab/friction-lab.component';
import { HomeComponent } from './home/home.component';
import { KinematicLabComponent } from './kinematic-lab/kinematic-lab.component';
import { LoginComponent } from './login/login.component';
import { RefractionLabComponent } from './refraction-lab/refraction-lab.component';
import { WaveLabComponent } from './wave-lab/wave-lab.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kinematic-lab', component: KinematicLabComponent},
  {path: 'dynamic-lab', component: DynamicLabComponent},
  {path: 'friction-lab', component: FrictionLabComponent},
  {path: 'energy-lab', component : EnergyLabComponent},
  {path: 'wave-lab', component : WaveLabComponent},
  {path: 'refraction-lab', component : RefractionLabComponent},
  {path: 'circuits-lab', component : CircuitsLabComponent, canActivate: [AuthGuardService]},
  {path: 'login', component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

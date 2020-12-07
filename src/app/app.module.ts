import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KinematicLabComponent } from './kinematic-lab/kinematic-lab.component';
import { KinematicFormComponent } from './kinematic-lab/kinematic-form/kinematic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {TextFieldModule} from '@angular/cdk/text-field'; 
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatTableModule} from '@angular/material/table';
import { KinematicOutputComponent } from './kinematic-lab/kinematic-output/kinematic-output.component';
import { DynamicLabComponent } from './dynamic-lab/dynamic-lab.component';
import { DynamicInputComponent } from './dynamic-lab/dynamic-input/dynamic-input.component';
import { DynamicOutputComponent } from './dynamic-lab/dynamic-output/dynamic-output.component';
import { FrictionLabComponent } from './friction-lab/friction-lab.component';
import { FrictionUiComponent } from './friction-lab/friction-ui/friction-ui.component';
import { EnergyLabComponent } from './energy-lab/energy-lab.component';
import { EnergyInputComponent } from './energy-lab/energy-input/energy-input.component';
import { EnergyOutputComponent } from './energy-lab/energy-output/energy-output.component';
import { WaveLabComponent } from './wave-lab/wave-lab.component';
import { WaveInputComponent } from './wave-lab/wave-input/wave-input.component';
import { WaveToolsComponent } from './wave-lab/wave-tools/wave-tools.component';
import { RefractionLabComponent } from './refraction-lab/refraction-lab.component';
import { RefractionUiComponent } from './refraction-lab/refraction-ui/refraction-ui.component';
import { CircuitsLabComponent } from './circuits-lab/circuits-lab.component';
import { CircuitsUiComponent } from './circuits-lab/circuits-ui/circuits-ui.component';
import { LoginComponent } from './login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    KinematicLabComponent,
    KinematicFormComponent,
    KinematicOutputComponent,
    DynamicLabComponent,
    DynamicInputComponent,
    DynamicOutputComponent,
    FrictionLabComponent,
    FrictionUiComponent,
    EnergyLabComponent,
    EnergyInputComponent,
    EnergyOutputComponent,
    WaveLabComponent,
    WaveInputComponent,
    WaveToolsComponent,
    RefractionLabComponent,
    RefractionUiComponent,
    CircuitsLabComponent,
    CircuitsUiComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

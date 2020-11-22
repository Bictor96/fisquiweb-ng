import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KinematicLabComponent } from './kinematic-lab/kinematic-lab.component';
import { KinematicFormComponent } from './kinematic-form/kinematic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

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
import { KinematicOutputComponent } from './kinematic-output/kinematic-output.component';
import { DynamicLabComponent } from './dynamic-lab/dynamic-lab.component';
import { DynamicInputComponent } from './dynamic-lab/dynamic-input/dynamic-input.component';
import { DynamicOutputComponent } from './dynamic-lab/dynamic-output/dynamic-output.component';
import { FrictionLabComponent } from './friction-lab/friction-lab.component';
import { FrictionUiComponent } from './friction-lab/friction-ui/friction-ui.component';
import { EnergyLabComponent } from './energy-lab/energy-lab.component'; 

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
  ],
  imports: [
    BrowserModule,
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

/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LegumeComponent } from './Legume/Legume.component';
import { ListeDesLegumesComponent } from './ListeDesLegumes/ListeDesLegumes.component';

import { ClientComponent } from './Client/Client.component';
import { EntrepotComponent } from './Entrepot/Entrepot.component';
import { AgriculteurComponent } from './Agriculteur/Agriculteur.component';
import { TransporteurComponent } from './Transporteur/Transporteur.component';

import { D_CommandeClientComponent } from './D_CommandeClient/D_CommandeClient.component';
import { B_CommandeEntrepotComponent } from './B_CommandeEntrepot/B_CommandeEntrepot.component';
import { A_RecolterComponent } from './A_Recolter/A_Recolter.component';
import { C_LivraisonEntrepotComponent } from './C_LivraisonEntrepot/C_LivraisonEntrepot.component';
import { E_LivraisonClientComponent } from './E_LivraisonClient/E_LivraisonClient.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegumeComponent,
    ListeDesLegumesComponent,
    ClientComponent,
    EntrepotComponent,
    AgriculteurComponent,
    TransporteurComponent,
    D_CommandeClientComponent,
    B_CommandeEntrepotComponent,
    A_RecolterComponent,
    C_LivraisonEntrepotComponent,
    E_LivraisonClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Legume', component: LegumeComponent },
  { path: 'ListeDesLegumes', component: ListeDesLegumesComponent },
  { path: 'Client', component: ClientComponent },
  { path: 'Entrepot', component: EntrepotComponent },
  { path: 'Agriculteur', component: AgriculteurComponent },
  { path: 'Transporteur', component: TransporteurComponent },
  { path: 'D_CommandeClient', component: D_CommandeClientComponent },
  { path: 'B_CommandeEntrepot', component: B_CommandeEntrepotComponent },
  { path: 'A_Recolter', component: A_RecolterComponent },
  { path: 'C_LivraisonEntrepot', component: C_LivraisonEntrepotComponent },
  { path: 'E_LivraisonClient', component: E_LivraisonClientComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }

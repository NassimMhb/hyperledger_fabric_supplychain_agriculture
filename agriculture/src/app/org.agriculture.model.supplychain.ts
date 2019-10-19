import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.agriculture.model.supplychain{
   export class Legume extends Asset {
      idLegume: string;
      owner: string;
   }
   export enum EtatListe {
      PRET_POUR_RECOLTE,
      RECOLTÉ,
      EN_LIVRAISON_A_LENTREPOT,
      EN_LIVRAISON_AU_CLIENT,
      LIVRÉ_A_LENTREPOT,
      LIVRÉ_AU_CLIENT,
   }
   export class ListeDesLegumes extends Asset {
      listeId: string;
      etat: EtatListe;
      legume: Legume;
   }
   export abstract class Utilisateur extends Participant {
      uid: string;
      name: string;
   }
   export class Client extends Utilisateur {
      vorder: string;
   }
   export class Entrepot extends Utilisateur {
   }
   export class Agriculteur extends Utilisateur {
   }
   export class Transporteur extends Utilisateur {
   }
   export class D_CommandeClient extends Transaction {
      liste: ListeDesLegumes;
      client: Client;
   }
   export class B_CommandeEntrepot extends Transaction {
      liste: ListeDesLegumes;
      member: Entrepot;
   }
   export class A_Recolter extends Transaction {
      liste: ListeDesLegumes;
      member: Agriculteur;
   }
   export class C_LivraisonEntrepot extends Transaction {
      liste: ListeDesLegumes;
      legumeId: Legume;
      entrepot: Entrepot;
      id: Transporteur;
   }
   export class E_LivraisonClient extends Transaction {
      liste: ListeDesLegumes;
      legumeId: Legume;
      client: Client;
      id: Transporteur;
   }
// }

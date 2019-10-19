/**
 * New script file
 */

/**
      * @param {org.agriculture.model.supplychain.A_Recolter} recolte
       * @transaction 
 */
function recolte(A_Recolter){
  var liste=A_Recolter.liste;
    if(liste.etat=='PRET_POUR_RECOLTE'){
      liste.etat='RECOLTÉ';
    }
    else if(liste.etat=='RECOLTÉ'){
      throw new window.alert('Legume déjà récolté');
    }
  else if(liste.etat=='LIVRÉ_A_LENTREPOT'){
    throw new window.alert('Légume livré à l\'entrepôt');
  }
  else if(liste.etat=='LIVRÉ_AU_CLIENT'){
    throw new window.alert('Légume livré au client');
  }
    else{
      throw new window.alert('Problème dans la transaction');
    }
  return getAssetRegistry('org.agriculture.model.supplychain.ListeDesLegumes')
        .then(function(legumeListeRegistry) {
            return legumeListeRegistry.update(liste);
        });
}



/**
      * @param {org.agriculture.model.supplychain.B_CommandeEntrepot} entrepotPasseCommande
       * @transaction 
 */
function entrepotPasseCommande(B_CommandeEntrepot) 
{
    var liste = B_CommandeEntrepot.liste;
    if (liste.etat == 'PRET_POUR_RECOLTE') {
        throw new window.alert('Légume pas prêt pour livraison !!');
    }
    else if(liste.etat=='RECOLTÉ'){
      liste.etat='EN_LIVRAISON_A_LENTREPOT';
    }
    else if(liste.etat=='EN_LIVRAISON_A_LENTREPOT'){
      throw new window.alert('Légume en livraison à l\'entrepôt !!');
    }
  else if(liste.etat=='LIVRÉ_A_LENTREPOT'){
      throw new window.alert('Légume déjà livré à l\'entrepôt');
  }
    
   return getAssetRegistry('org.agriculture.model.supplychain.ListeDesLegumes')
        .then(function(legumeListeRegistry) {
            return legumeListeRegistry.update(liste);
        });
   
}

/**
      * @param {org.agriculture.model.supplychain.C_LivraisonEntrepot} livrerEntrepot
       * @transaction 
 */

function livrerEntrepot(C_LivraisonEntrepot){
  var liste=C_LivraisonEntrepot.liste;
  var legume=C_LivraisonEntrepot.legumeId;
  var entrepot=C_LivraisonEntrepot.entrepot;
  if(liste.etat=='EN_LIVRAISON_A_LENTREPOT'){
    legume.owner=entrepot.uid;
    liste.etat='LIVRÉ_A_LENTREPOT';
  }
  else if(liste.etat=='LIVRÉ_A_LENTREPOT'){
   throw window.alert('Livré à l\'entrepôt');
  }
  else {
    throw window.alert('Cette commande n\'est pas pour un entrepôt');
  }
  return getAssetRegistry('org.agriculture.model.supplychain.ListeDesLegumes')
        .then(function(listeLegumesRegistry) {
            return listeLegumesRegistry.update(liste);
        });
  return getAssetRegistry('org.agriculture.model.supplychain.Legume')
        .then(function(assetRegistry) {
            return assetRegistry.update(legume);
        });
}


/**
      * @param {org.agriculture.model.supplychain.D_CommandeClient} clientPasseCommande
       * @transaction 
 */
function clientPasseCommande(D_CommandeClient) 
{
    var liste = D_CommandeClient.liste;
    if(liste.etat=='EN_LIVRAISON_AU_CLIENT'){
      throw new window.alert('Livraison au client !!');
    }
  
    else if(liste.etat=='LIVRÉ_A_LENTREPOT' ){
      liste.etat='EN_LIVRAISON_AU_CLIENT';
    }
  else{
    throw new window.alert('Stock épuisé !!');
  }
    
   return getAssetRegistry('org.agriculture.model.supplychain.ListeDesLegumes')
        .then(function(listeLegumesRegistry) {
            return listeLegumesRegistry.update(liste);
        });
}


/**
      * @param {org.agriculture.model.supplychain.E_LivraisonClient} livrerClient
       * @transaction 
 */

function livrerClient(E_LivraisonClient){
  var liste=E_LivraisonClient.liste;
  var legume=E_LivraisonClient.legumeId;
  var client=E_LivraisonClient.client;
  if(liste.etat=='EN_LIVRAISON_AU_CLIENT'){
    legume.owner=client.uid;
    liste.etat='LIVRÉ_AU_CLIENT';
  }
  else if(liste.etat=='LIVRÉ_AU_CLIENT'){
   throw window.alert('Livré au client');
  }
  else {
    throw window.alert('Cette commande n\'est pas pour un client');
  }
  return getAssetRegistry('org.agriculture.model.supplychain.ListeDesLegumes')
        .then(function(listeLegumesRegistry) {
            return listeLegumesRegistry.update(liste);
        });
  return getAssetRegistry('org.agriculture.model.supplychain.Legume')
        .then(function(assetRegistry) {
            return assetRegistry.update(legume);
        });
}

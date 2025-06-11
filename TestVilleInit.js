class TestVilleInitialisation {
  
  testeVilleInitialisation() {
    const ville = new Ville("Vancouver", 94.0, 15.0);

    // Tester les accesseurs pour vérifier la bonne initialisation
    Test.assertEquals(ville.getX(), 94.0, "Init Ville => coordonnées x = 94.0");
    Test.assertEquals(ville.getY(), 15.0, "Init Ville => coordonnées y = 15.0");
    Test.assertEquals(ville.getNom(), "Vancouver", "Init Ville => nom = Vancouver");
  }
}

// Fonction main pour lancer les tests
function main() {
  const testVilleInitialisation = new TestVilleInitialisation();
  testVilleInitialisation.testeVilleInitialisation();
}

main();

class Plateau {
    constructor() {
        this.etats = [];
        this.villes = [];
        this.routes = [];

        this.initialiseEtats();   // Données fournies
        this.initialiseVilles(); // Extraction et parsing depuis Donnees.VILLES
        this.initialiseRoutes(); // Construction des routes entre villes
    }

    // Accesseurs
    getEtats() {
        return this.etats;
    }

    getVilles() {
        return this.villes;
    }

    getRoutes() {
        return this.routes;
    }

    // Initialise les états depuis Donnees.ETATS
    initialiseEtats() {
        this.etats = Donnees.ETATS.map(([nom, contour]) => new Etat(nom, contour));
    }

    // Initialise les villes depuis Donnees.VILLES
    initialiseVilles() {
        this.villes = Donnees.VILLES.map(donneesVille => {
            let index2 = donneesVille.lastIndexOf(' ');
            let index1 = donneesVille.lastIndexOf(' ', index2 - 1);
            let nom = donneesVille.substring(0, index1);
            let x = parseFloat(donneesVille.substring(index1 + 1, index2));
            let y = parseFloat(donneesVille.substring(index2 + 1));
            return new Ville(nom, x, y);
        });
    }

    // Initialise les routes à partir de Donnees.ROUTES
    initialiseRoutes() {
        this.routes = Donnees.ROUTES.map(([nomVille1, nomVille2, nomRoute]) => {
            const ville1 = this.rechercheVille(nomVille1);
            const ville2 = this.rechercheVille(nomVille2);
            return new Route(ville1, ville2, nomRoute);
        });
    }

    // Recherche une ville par son nom
    rechercheVille(nom) {
        return this.villes.find(ville => ville.getNom() === nom);
    }

    // Recherche une route par son nom
    rechercheRoute(nom) {
        return this.routes.find(route => route.getNom() === nom);
    }
}

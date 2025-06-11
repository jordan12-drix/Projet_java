class Route {
    constructor(villeArrivee, villeDepart, couleur) {
        this.villeArrivee = villeArrivee;
        this.villeDepart = villeDepart;
        this.couleur = couleur;
    }

    getCouleur() {
        return this.couleur;
    }

    getVilleArrivee() {
        return this.villeArrivee;
    }

    getVilleDepart() {
        return this.villeDepart;
    }

    getNom() {
        return `${this.villeArrivee.getNom()} - ${this.villeDepart.getNom()}`;
    }

    getLongueur() {
        const x = this.villeArrivee.getX() - this.villeDepart.getX();
        const y = this.villeArrivee.getY() - this.villeDepart.getY();
        const d = Math.sqrt(x * x + y * y);

        const dmin = Math.sqrt(Math.pow(94.0 - 88.0, 2) + Math.pow(15.0 - 52.0, 2));
        const dmax = 1000.0;
        let normalized = (d - dmin) / (dmax - dmin);

        let ratio = Math.floor(1 + normalized * (6 - 1));
        ratio = Math.max(1, Math.min(6, ratio));
        return ratio;
    }

    versChaine() {
        return `${this.getNom()} /${this.getCouleur()} - ${this.getLongueur()}`;
    }

    getNombrePoints() {
        const longueur = this.getLongueur();
        const normalized = (longueur - 1) / (6 - 1);
        const gainPoints = Math.floor(1 + normalized * (15 - 1));
        return gainPoints;
    }
}

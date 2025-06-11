class Ville {
    constructor(nom, x, y) {
        this.nom = nom;
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getNom() {
        return this.nom;
    }

    versChaine() {
        return `${this.nom} (${this.getX()}, ${this.getY()})`;
    }
}

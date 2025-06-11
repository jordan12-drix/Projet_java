class Etat {
  /**
   * Crée un état
   * @param {string} nom - Le nom de l'état
   * @param {string} contour - Les coordonnées des points à dessiner
   */
  constructor(nom, contour) {
    this.nom = nom;
    this.contour = contour;
  }

  /**
   * Retourne le nom de l'état
   * @returns {string}
   */
  getNom() {
    return this.nom;
  }

  /**
   * Retourne les coordonnées du contour
   * @returns {string}
   */
  getContour() {
    return this.contour;
  }
}

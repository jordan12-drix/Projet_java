class Crayon {
  constructor(ctx) {
    this.ctx = ctx; // contexte de dessin (CanvasRenderingContext2D)
    this.x = 0;
    this.y = 0;
    this.couleurFond = 'white';
    this.couleurTrait = 'black';
  }

  // Méthodes d'accès
  getX() { return this.x; }
  getY() { return this.y; }
  getCouleurFond() { return this.couleurFond; }
  getCouleurTrait() { return this.couleurTrait; }

  // Déplacement
  deplace(x, y) {
    this.x = x;
    this.y = y;
  }

  translate(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  // Changement de couleur
  changeEncre(couleurTrait, couleurFond, opaciteFond = 1.0) {
    this.couleurTrait = couleurTrait;
    this.couleurFond = this._applyOpacity(couleurFond, opaciteFond);
  }

  _applyOpacity(color, opacity) {
    // Simule une couleur RGBA
    return color.includes('rgba') || color.includes('rgb')
      ? color
      : this._hexToRgba(color, opacity);
  }

  _hexToRgba(hex, alpha) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  // Dessin de formes
  dessineRectangle(largeur, hauteur) {
    const ctx = this.ctx;
    ctx.fillStyle = this.couleurFond;
    ctx.strokeStyle = this.couleurTrait;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.rect(this.x, this.y, largeur, hauteur);
    ctx.fill();
    ctx.stroke();
  }

  dessineCercle(rayon) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, rayon, 0, 2 * Math.PI);
    ctx.fillStyle = this.couleurFond;
    ctx.strokeStyle = this.couleurTrait;
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();
  }

  dessineLigne(dx, dy, epaisseur) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + dx, this.y + dy);
    ctx.strokeStyle = this.couleurTrait;
    ctx.lineWidth = epaisseur;
    ctx.stroke();
  }

  dessineTexte(texte, taille = 16, centre = false, translate = false, bold = false) {
    const ctx = this.ctx;
    ctx.font = `${bold ? 'bold' : 'normal'} ${taille}px system-ui`;
    ctx.fillStyle = this.couleurTrait;
    const textWidth = ctx.measureText(texte).width;
    let drawX = this.x;
    let drawY = this.y;

    if (centre) {
      drawX -= textWidth / 2;
      drawY += taille / 2;
    }

    ctx.fillText(texte, drawX, drawY);

    if (translate) {
      this.translate(textWidth + 8, 0);
    }
  }
}

import Piece from "./Piece.js";

export class Conception extends Piece {
    constructor(...args) {
        super();
        this.svg = '/models/Conception.svg'
        this.color = 'green'
        this.scale = 0.03
        this.x = 0
        this.y = 0
        this.order = 0

        this.setModel();
    }
}

export class Implantation extends Piece {
    constructor(...args) {
        super();
        this.svg = '/models/Implantation.svg'
        this.color = 'blue'
        this.scale = 0.0302
        this.x = 0
        this.y = -0.22
        this.order = -1
        this.setModel();
    }
}

export class Heart extends Piece {
    constructor(...args) {
        super();
        this.svg = '/models/Heart.svg'
        this.color = 'red'
        this.scale = 0.03
        this.x = 0
        this.y = 0.80
        this.order = -2
        this.setModel();
    }
}

export class Body extends Piece {
    constructor(...args) {
        super();
        this.svg = '/models/Body.svg'
        this.color = 'purple'
        this.scale = 0.03
        this.x = 0
        this.y = 0
        this.order = -3
        this.setModel();
    }
}


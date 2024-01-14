import Experience from '../Experience.js';

// scenes
import Environment from './Environment.js';
import Plane from './Plane.js';
import {Conception, Implantation, Heart, Body} from './Labyrinth/Pieces.js';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on('ready', () => {
      this.environment = new Environment();
      this.conception = new Conception();
      this.implantation = new Implantation();
      this.heart = new Heart();
      this.body = new Body();
    });
  }

  resize() {

    if (this.conception) {
      this.conception.resize();
    }
    if (this.implantation) {
      this.implantation.resize();
    }
    if (this.heart) {
      this.heart.resize();
    }
    if (this.body) {
      this.body.resize();
    }
    if (this.plane) {
      this.plane.resize();
    }
    if (this.environment) {
      this.environment.resize();
    }
  }

  update() {

    if (this.implantation) {
      this.implantation.update();
    }
    if (this.conception) {
      this.conception.update();
    }
    if (this.heart) {
      this.heart.update();
    }
    if (this.body) {
      this.body.update();
    }
    if (this.plane) {
      this.plane.update();
    }
    if (this.environment) {
      this.environment.update();
    }
  }
}

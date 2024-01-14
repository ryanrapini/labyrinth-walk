import Experience from "@/Experience.js";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

import svg from '@models/vite.svg'

import { renderSVG } from "@helpers/SVG.js";

export default class Piece {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time = this.experience.time;
        this.resources = this.experience.resources;
        this.debug = this.experience.debug;

        this.isLoaded = false
        
        this.x = 0
        this.y = 0
        this.z = 0

        this.color = 'white'

        this.parameters = {
            rotationSpeed: 0.0005,
            size: 1,
        };
    }

     getCenterPoint(mesh) {
        var geometry = mesh.geometry;
        geometry.computeBoundingBox();
        var center = new THREE.Vector3();
        geometry.boundingBox.getCenter( center );
        mesh.localToWorld( center );
        return center;
    }
    
    setModel() {
        new SVGLoader().load( this.svg, (svg)=>this.svgLoaded(svg) );
    }

    animateBox() {
        this.model.rotation.x = this.time.elapsed * this.parameters.rotationSpeed;
        this.model.rotation.y = this.time.elapsed * this.parameters.rotationSpeed;
    }

    resize() {}

    update() {
        if(this.isLoaded){
           //this.animateBox();
        }
    }

    svgLoaded( svg ) {
        var material = new THREE.MeshLambertMaterial( {
            color: this.color
        } );

        var extrudeOptions = {
            bevelEnabled: true,
            bevelSize: 1,
            bevelThickness: 1,
            bevelSegments: 15,
            depth: 8,
        };

        var shape = SVGLoader.createShapes( svg.paths[0] )[0]
        var geometry = new THREE.ExtrudeGeometry( shape, extrudeOptions ),
        mesh = new THREE.Mesh( geometry, material );

        mesh.scale.set( this.scale, this.scale, this.scale );
        mesh.geometry.center()
        mesh.translateX(this.x)
        mesh.translateY(this.y)
        mesh.translateZ(this.order*0.5)


        this.model = mesh
        this.scene.add(this.model)

        this.isLoaded = true

    }

}



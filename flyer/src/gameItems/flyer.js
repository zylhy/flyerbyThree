import * as THREE from 'three'
import colors from './color';

class Flyer {
    group = new THREE.Group()
    propeller = null
    constructor() {
        let wingLeft = new Wing().mesh
        let wingRight = new Wing().mesh
        let engineRoom = new EngineRoom().mesh
        engineRoom.position.x = 12.5
        let fuselage = new Fuselage().mesh
        this.propeller = new Propeller().mesh
        let frontScrew = new Screw().mesh
        let backScrew = new Screw().mesh
        backScrew.position.x = 15
        backScrew.rotation.z = Math.PI/2
        frontScrew.position.x =17
        frontScrew.rotation.z = Math.PI/2
        this.propeller.position.x = 16
        this.group.add(wingLeft)
        this.group.add(wingRight)
        this.group.add(engineRoom)
        this.group.add(this.propeller)
        this.group.add(frontScrew)
        this.group.add(backScrew)
        this.group.add(fuselage)
        // this.group.rotation.x = Math.PI/36
        // this.group.rotation.y = -Math.PI/36
    }
    propellerRun() {
        this.propeller.rotation.x +=0.5
  }
}

class Wing {
    mesh = null;
    constructor() {
        let geometry = new THREE.BoxGeometry(15, 3, 40)
        let material = new THREE.MeshPhongMaterial({ color: colors.pink ,flatShading:true})
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
    }
}
class EngineRoom {
    mesh = null
    constructor() {
        let geometry = new THREE.BoxGeometry(5, 15, 20)
        let material = new THREE.MeshPhongMaterial({ color: colors.white,flatShading:true })
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
    }
}
class Fuselage {
    mesh = null
    constructor() {
        let geometry = new THREE.BoxGeometry(20,15,20)
        let material = new THREE.MeshPhongMaterial({ color: colors.pink,flatShading:true })
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
    }
}
class Propeller {
    mesh = null
    constructor() {
        let geometry = new THREE.BoxGeometry(1, 35,5)
        let material = new THREE.MeshPhongMaterial({ color: colors.brown,flatShading:true })
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
    }
}

class Screw {
    mesh = null
    constructor() {
        let geometry = new THREE.CylinderGeometry(1, 1, 2)
        let material = new THREE.MeshPhongMaterial({ color: colors.pink ,flatShading:true})
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
    }
}

export default Flyer 
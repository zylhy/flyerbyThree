import * as THREE from 'three'
import colors from './color';
export default class Clouds {
    geometry = null;
    material = null;
    group = new THREE.Group();
    constructor( ) {
        this.geometry = new THREE.BoxGeometry(20, 20, 20)
        this.material = new THREE.MeshPhongMaterial({ color: colors.pink })
        //随机生成3~5个方块组云
        let num = 3 + Math.floor(Math.random() * 3)
        for (let i = 0; i <= num; i++) {
            let mesh = new THREE.Mesh(this.geometry, this.material)
            mesh.position.x = i * 15
            mesh.position.y = Math.random() * 10
            mesh.position.z = Math.random() * 10
            mesh.rotation.z = Math.random() * Math.PI * 2;
            mesh.rotation.y = Math.random() * Math.PI * 2;
            mesh.castShadow = true
            this.group.add(mesh)
        }
        // 设置随机大小
        let scale  =.1+ Math.random()*0.9
        this.group.scale.set(scale,scale,scale)
    }
}
import * as THREE from 'three'
import Clouds from "./clouds";
class Sky {

    group = new THREE.Group();
    constructor(num =20) {
        let baseAngle = 2 * Math.PI / num;
        // 生成对应数量的云
        for (let i = 0; i < num; i++) {
            let a = baseAngle * i
            let cloud = new Clouds().group
            // 云与原点的直线距离
            let h = Math.floor(Math.random() * (170 - 30 + 1) + 30) + 450
            // 把云本身旋转到对应的角度
            cloud.rotation.z = a + Math.PI / 2
            cloud.position.y = Math.sin(a) * h
            cloud.position.x = Math.cos(a) * h
            this.group.add(cloud)
        }

    }
}
export default Sky 
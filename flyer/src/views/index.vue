<template>
  <div class="Wrap">
    <canvas ref="gameContainer" id="game"></canvas>
  </div>
</template>
<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const colors = {
  red: 0xf25346,
  white: 0xd8d0d1,
  brown: 0x59332e,
  pink: 0xf5986e,
  brownDark: 0x23190f,
  blue: 0x68c3c0,
};
const renderer = ref(null);
const gameContainer = ref(null);
const gameCamera = ref(null);
const initThree = () => {
  gameContainer.value.width = window.innerWidth;
  gameContainer.value.height = window.innerHeight;
  //   创建场景
  const scene = new THREE.Scene();
//   scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
  //创建渲染器
  const render = new THREE.WebGLRenderer({
    canvas: gameContainer.value,
    antialias: true,
    alpha: true,
  });
  renderer.value = render;
  render.shadowMap.enabled = true;
  render.setSize(window.innerWidth, window.innerHeight);
  //   创建相机
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  gameCamera.value = camera;
  camera.position.set(0, 100,200);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  // 创建轨道控制器
  const cameraControls = new OrbitControls(camera, gameContainer.value);

  cameraControls.update();
  //   创建坐标系
  const axes = new THREE.AxesHelper(10000);
  scene.add(axes);
  // 创建半球光
  const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);
  scene.add(hemisphereLight);
  //   创建平行光
  const light = new THREE.DirectionalLight(0xffffff, 0.9);
  // 设置灯光位置
  light.position.set(150, 350, 350);
  // 设置是否可以投射阴影
  light.castShadow = true;
  // 设置阴影图的宽度和高度
  light.shadow.width = 2024;
  light.shadow.height = 2024;
  // 设置阴影图的左边界
  light.shadow.camera.left = -400;
  // 设置阴影图的右边界
  light.shadow.camera.right = 400;
  // 设置阴影图的上边界
  light.shadow.camera.top = 400;
  // 设置阴影图的下边界
  light.shadow.camera.bottom = -400;
  // 设置阴影图的近边界
  light.shadow.camera.near = 1;
  // 设置阴影图的远边界
  light.shadow.camera.far = 1000;

  scene.add(light);
  let sea = createSea();
  sea.receiveShadow = true;
  sea.position.y =-800;
  sea.rotation.x = -Math.PI/2
  scene.add(sea);
  scene.add(createCube())
  function animate() {
    render.render(scene, camera);
    cameraControls.update();
    requestAnimationFrame(animate);
  }
  animate();
};
const createSea = () => {
  // 定义几何体
  const geometry = new THREE.CylinderGeometry(600, 600,800, 30, 10);
  //   geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI/2));
  // 定义材质
  const material = new THREE.MeshPhongMaterial({
    // 材质颜色
    color: colors.blue,
    // 是否可透明
    transparent: true,
    // 设置透明度
    opacity: 0.7,
    flatShading:true
  });
  const sea = new THREE.Mesh(geometry, material);
  return sea;
};
const createCube = ()=>{
    // 创建几何体
    const geometry  = new THREE.BoxGeometry(10,10,10)

    const material = new THREE.MeshBasicMaterial({color:colors.blue})

    const cube  = new THREE.Mesh(geometry,material)
    cube.castShadow = true
    cube.position.y = 50
    return cube
}
const windowResize = () => {
  gameContainer.value.width = window.innerWidth;
  gameContainer.value.height = window.innerHeight;
  renderer.value.setSize(window.innerWidth, window.innerHeight);
  gameCamera.value.aspect = window.innerWidth / window.innerHeight;
  gameCamera.value.updateProjectionMatrix();
};
onMounted(() => {
  initThree();
  window.onresize = () => {
    windowResize();
  };
});
</script>
<style lang="scss" scoped>
.Wrap {
  background: linear-gradient(#e4e0ba, #f7d9aa);
}
</style>

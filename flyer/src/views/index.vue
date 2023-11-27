<template>
  <div class="Wrap">
    <canvas ref="gameContainer" id="game"></canvas>
  </div>
</template>
<script setup>
import * as THREE from "three";
const gameContainer = ref(null);
const initThree = () => {
  let width, height;
  width = gameContainer.value.width = window.innerWidth;
  height = gameContainer.value.height = window.innerHeight;
  //   创建场景
  const scene = new THREE.Scene();
  //创建渲染器
  const render = new THREE.WebGLRenderer({ canvas: gameContainer.value, antialias: true });
  render.setClearColor(0xd5d9df);
  render.shadowMap.enabled = true;
  //   创建相机
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(0,0,50);
  scene.add(camera);
//   创建坐标系
const axes = new THREE.AxesHelper(1000)
scene.add(axes)
// 创建环境光
const light = new THREE.AmbientLight(0xcccccc)
  scene.add(light);
  function animate() {
    render.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
};
onMounted(() => {
  initThree();
});
</script>
<style lang="scss" scoped></style>

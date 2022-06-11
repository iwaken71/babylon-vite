import * as BABYLON from '@babylonjs/core';

const renderCanvas = <HTMLCanvasElement>document.getElementById('renderCanvas');

const main = (canvas: HTMLCanvasElement) => {
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.ArcRotateCamera("camera", 0, 1.3, 10, BABYLON.Vector3.Zero(), scene);
  const light = new BABYLON.DirectionalLight("light",new BABYLON.Vector3(0, Math.PI/4, Math.PI/4),scene);
  camera.attachControl(canvas);
  const cube = BABYLON.MeshBuilder.CreateBox("cube",{size:1});
  scene.debugLayer.show();
  engine.runRenderLoop(() => {
    scene.render();
  });
};

main(renderCanvas);
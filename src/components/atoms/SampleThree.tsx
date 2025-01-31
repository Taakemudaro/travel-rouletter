// import { useEffect } from "react";
// import * as THREE from "three";

// export const SampleThree = () => {
//   useEffect(() => {
//     // init
//     // 3D空間をどの視点から描画するか設定するための機能(遠近法)
//     const camera = new THREE.PerspectiveCamera(
//       70,
//       window.innerWidth / window.innerHeight,
//       0.01,
//       10
//     );
//     // カメラの位置設定（xyz）
//     // 下記みたいにセットも可能
//     // camera.position.set(0, 0, 0);
//     camera.position.z = 1;

//     // 3Dオブジェクトやライト、カメラなどを配置する3D空間
//     const scene = new THREE.Scene();

//     const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
//     const material = new THREE.MeshNormalMaterial();

//     // 3D空間を実装
//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     // カメラとシーンを組み合わせて、実際に描画を行う機能
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     // 描画するcanvasのサイズを設定
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     // アニメーションのセット
//     renderer.setAnimationLoop(animation);
//     document.body.appendChild(renderer.domElement);

//     // animation
//     function animation(time: number) {
//       // <= 1. timeにnumberの方を追加
//       mesh.rotation.x = time / 2000;
//       mesh.rotation.y = time / 1000;
//       // SceneとCameraを受け取って、canvasに描画を開始
//       renderer.render(scene, camera);
//     }
//     return () => {
//       // コンポーネントがアンマウントされる時にcanvasを削除
//       if (renderer.domElement) {
//         document.body.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <></>; // <= 2. divとhogeを削除
// };

// react19以降svgがモジュール範囲外となった為、型定義の変更
declare module "*.svg" {
  const content: string;
  export default content;
}

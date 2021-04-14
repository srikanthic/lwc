

import { createCachingCssGenerator } from 'lwc';

function generateCss(hostSelector, shadowSelector, nativeShadow) {
  return ["[dir=\"ltr\"] {order: 0;}[dir=\"ltr\"] test", shadowSelector, " {order: 1;}[dir=\"ltr\"] test", shadowSelector, " {order: 2;}[dir=\"ltr\"] test", shadowSelector, " {order: 3;}[dir=\"ltr\"] test", shadowSelector, " test", shadowSelector, " {order: 4;}[dir=\"rtl\"] {order: 5;}[dir=\"rtl\"] test", shadowSelector, " {order: 6;}[dir=\"rtl\"] test", shadowSelector, " {order: 7;}[dir=\"rtl\"] test", shadowSelector, " {order: 8;}[dir=\"rtl\"] test", shadowSelector, " test", shadowSelector, " {order: 9;}"].join('');
}

const stylesheet = createCachingCssGenerator(generateCss);

export default [stylesheet];
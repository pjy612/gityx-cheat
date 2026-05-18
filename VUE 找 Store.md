```js
var appEl = document.querySelector('#app') || document.querySelector('[data-v-app]') || document.body.firstElementChild
var app = appEl.__vue_app__
var provides = app._context.provides
var pinia = Object.getOwnPropertySymbols(provides)
  .map(sym => provides[sym])
  .find(v => v && v._s)
console.log(pinia)
console.log(Array.from(pinia._s.keys()))



var st = pinia._s.get('character');
st.character.reincarnationPoints = 999999;
console.log({
  reincarnationPoints: st.character.reincarnationPoints,
  consumedPoints: st.consumedPoints,
  availablePoints: st.character.reincarnationPoints - st.consumedPoints
});
```

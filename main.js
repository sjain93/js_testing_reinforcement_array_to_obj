// function arrayToObj(array) {
//   let container = {};
//   const output = array.map( transformed => {
//     let director = transformed[0]
//     container[director] = transformed[1];
//   });
//   return container;
// }


// function arrayToObj(array) {
//   return array.reduce( ( container, transformed) => {
//     container[transformed[0]] = transformed[1];
//     return container;
//   }, {});
// }

let arrayToObj = array => array.reduce((a, c) => Object.assign(a, { [c[0]]: c[1]}), {})

module.exports = arrayToObj;

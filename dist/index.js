webpackJsonp([0],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(10)
__webpack_require__(53)
module.exports = function() {
  console.log('b')
  let users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
 users = _.find(users, function(o) { return o.age < 40; });

  console.log(users)
}

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)
module.exports = function() {
  console.log('c')
}

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

console.log('load.js')

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
module.exports = __webpack_require__(57);


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

const a = __webpack_require__(18)
const b = __webpack_require__(52)
const c = __webpack_require__(54)
const d = __webpack_require__(61)

__webpack_require__(56)

a()
b()
c()
d()

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = function() {
  console.log('d')
}

/***/ })

},[58]);
//# sourceMappingURL=index.js.map
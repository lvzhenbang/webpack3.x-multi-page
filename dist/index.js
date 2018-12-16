webpackJsonp([0],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(10)
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

module.exports = function() {
  console.log('c')
}

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

console.log('load.js')

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
module.exports = __webpack_require__(54);


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

const a = __webpack_require__(18)
const b = __webpack_require__(52)
const c = __webpack_require__(53)
const d = __webpack_require__(57)

a()
b()
c()
d()

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = function() {
  console.log('d')
}

/***/ })

},[55]);
//# sourceMappingURL=index.js.map
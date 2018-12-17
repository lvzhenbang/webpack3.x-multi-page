webpackJsonp([2],{

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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

const a = __webpack_require__(18)
const b = __webpack_require__(52)
__webpack_require__(56)
__webpack_require__(64)
a()
b()

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[62]);
//# sourceMappingURL=aboutUs.js.map
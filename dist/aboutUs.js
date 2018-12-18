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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

const a = __webpack_require__(18)
const b = __webpack_require__(52)
__webpack_require__(56)
__webpack_require__(67)
a()
b()
document.body.querySelector('.container').innerHTML = '<h1> 这是 about-us 页</h1>'

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[65]);
//# sourceMappingURL=aboutUs.js.map
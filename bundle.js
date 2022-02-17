/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Beandisplay-JRyXK.ttf */ "./src/Beandisplay-JRyXK.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: bean;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    background-color: #283A6A;\n    font-family: bean;\n    font-size: 30px;\n    padding: 10px;\n    height: 100%;\n}\n\n#logo {\n    font-size: 50px;\n    color: #DFE7EC;\n}\n\nbutton {\n    color: #141E1F;\n    background-color: #A4C2C4;\n    padding: 5px;\n    border-radius: 5px;\n    font-family: inherit;\n    font-size: 25px;\n    cursor: pointer;\n    border-style: solid;\n    max-width: 100%;\n}\n\nbutton:hover {\n    background-color: #c0e1e4;\n}\n\nbutton:active {\n    scale: 0.9;\n}\n\n.dueDate {\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n    height: 25px;\n}\n\n.edit {\n    padding: 0;\n    height: 30px;\n    width: 30px;\n    flex-shrink: 0;\n}\n\n.close {\n    padding: 0;\n    font-size: 20px;\n    color: white;\n    height: 30px;\n    width: 30px;\n    background-color: darkred;\n    flex-shrink: 0;\n}\n\n.close:hover {\n    background-color: rgb(100, 1, 1);\n}\n\n#allProjects .close {\n    font-size: 15px;\n    height: 20px;\n    width: 20px;\n}\n\n#addProject, #addTodo {\n    padding: 0;\n    height: 40px;\n    width: 100%;\n    font-size: 30px;\n    background-color: transparent;\n}\n\n#addProject:hover, #addTodo:hover {\n    background-color: #DFE7EC;\n}\n\n#addProject:active, #addTodo:active {\n    background-color: #DFE7EC;\n}\n\n.project {\n    color: #141E1F;\n    background-color: #A4C2C4;\n    font-size: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 5px;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    border-style: solid;\n    border-color: #DFE7EC;\n    border-width: 2px;\n}\n\n.project:hover {\n    background-color: #c0e1e4;\n}\n\n.project:active {\n    background-color: azure;\n}\n\n\n#menuAndList {\n    display: flex;\n    gap: 20px;\n    color: #DFE7EC;\n}\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    background-color: #5E879D;\n    border-radius: 5px;\n    padding: 20px;\n    align-items: center;\n    gap: 20px;\n    flex-shrink: 0;\n    width: 245px;\n}\n\n#sortItemsBy {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 100%;\n}\n\n#allProjects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    width: 100%;\n}\n\n#todoList {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    background-color: #5E879D;\n    border-radius: 5px;\n    padding: 20px;\n    padding-left: 50px;\n    padding-right: 50px;\n    gap: 5px;\n    width: 100%;\n}\n\n.listItem {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-align: left;\n    font-size: 25px;\n    gap: 10px;\n    color: #141E1F;\n    background-color: #DFE7EC;\n    border-radius: 5px;\n    padding: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-overflow: clip;\n}\n\n.itemDescription {\n    cursor: pointer;\n}\n\n.itemSettings {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.projectTemplate, .listTemplate {\n    display: none;\n}\n\n.textInputProject {\n    width: 150px;\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n}\n\n.textInputItem {\n    width: 300px;\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,4CAA+B;AACnC;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,WAAW;IACX,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;IACf,SAAS;IACT,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: bean;\n    src: url(Beandisplay-JRyXK.ttf);\n}\n\nbody {\n    background-color: #283A6A;\n    font-family: bean;\n    font-size: 30px;\n    padding: 10px;\n    height: 100%;\n}\n\n#logo {\n    font-size: 50px;\n    color: #DFE7EC;\n}\n\nbutton {\n    color: #141E1F;\n    background-color: #A4C2C4;\n    padding: 5px;\n    border-radius: 5px;\n    font-family: inherit;\n    font-size: 25px;\n    cursor: pointer;\n    border-style: solid;\n    max-width: 100%;\n}\n\nbutton:hover {\n    background-color: #c0e1e4;\n}\n\nbutton:active {\n    scale: 0.9;\n}\n\n.dueDate {\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n    height: 25px;\n}\n\n.edit {\n    padding: 0;\n    height: 30px;\n    width: 30px;\n    flex-shrink: 0;\n}\n\n.close {\n    padding: 0;\n    font-size: 20px;\n    color: white;\n    height: 30px;\n    width: 30px;\n    background-color: darkred;\n    flex-shrink: 0;\n}\n\n.close:hover {\n    background-color: rgb(100, 1, 1);\n}\n\n#allProjects .close {\n    font-size: 15px;\n    height: 20px;\n    width: 20px;\n}\n\n#addProject, #addTodo {\n    padding: 0;\n    height: 40px;\n    width: 100%;\n    font-size: 30px;\n    background-color: transparent;\n}\n\n#addProject:hover, #addTodo:hover {\n    background-color: #DFE7EC;\n}\n\n#addProject:active, #addTodo:active {\n    background-color: #DFE7EC;\n}\n\n.project {\n    color: #141E1F;\n    background-color: #A4C2C4;\n    font-size: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 5px;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    border-style: solid;\n    border-color: #DFE7EC;\n    border-width: 2px;\n}\n\n.project:hover {\n    background-color: #c0e1e4;\n}\n\n.project:active {\n    background-color: azure;\n}\n\n\n#menuAndList {\n    display: flex;\n    gap: 20px;\n    color: #DFE7EC;\n}\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    background-color: #5E879D;\n    border-radius: 5px;\n    padding: 20px;\n    align-items: center;\n    gap: 20px;\n    flex-shrink: 0;\n    width: 245px;\n}\n\n#sortItemsBy {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 100%;\n}\n\n#allProjects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    width: 100%;\n}\n\n#todoList {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    background-color: #5E879D;\n    border-radius: 5px;\n    padding: 20px;\n    padding-left: 50px;\n    padding-right: 50px;\n    gap: 5px;\n    width: 100%;\n}\n\n.listItem {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-align: left;\n    font-size: 25px;\n    gap: 10px;\n    color: #141E1F;\n    background-color: #DFE7EC;\n    border-radius: 5px;\n    padding: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-overflow: clip;\n}\n\n.itemDescription {\n    cursor: pointer;\n}\n\n.itemSettings {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.projectTemplate, .listTemplate {\n    display: none;\n}\n\n.textInputProject {\n    width: 150px;\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n}\n\n.textInputItem {\n    width: 300px;\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectFactory = (name) => {
    let todoList = [];

    const addItem = (item) => {
        todoList.push(item);
    }

    const deleteItem = (item) => {
        todoList = todoList.filter(task => task.name !== item.name);
    }

    const getList = () => {
        return todoList;
    }

    return {name, addItem, deleteItem, getList}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const todoItem = (name, status = 'none', date = 'none') => {

    const toggleStatus = () => {
        if (status === 'none') {
            status = 'done';
        } else {
            status = 'none';
        }
    }

    const getStatus = () => {
        return status;
    }

    const setDate = (newDate) => {
        date = newDate;
    }

    const getDate = () => {
        return date;
    }

    return {name, toggleStatus, getStatus, setDate, getDate}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");



const userInterface = () => {
    let allProjectNames = [];
    let allProjects = [];


    const updateProjectList = () => {
        let projectTemplate = document.querySelector('.projectTemplate');
        let projectList = document.querySelector('#allProjects');
        let newProjectButton = document.querySelector('#addProject');

        //clear project menu
        for (let i=projectList.childElementCount-2; i > 1 ; i--) {
            projectList.children[i].remove();
        }

        //loop through project list and add back the projects which haven't been deleted.
        for (let i=0; i < allProjectNames.length; i++) {
            let newProject = projectTemplate.cloneNode(true);
            newProject.classList.remove('projectTemplate');
            newProject.children[0].textContent = allProjectNames[i];
            projectList.insertBefore(newProject, newProjectButton);
        }

        //initiate project divs
        const projects = document.querySelectorAll('.project');
        projects.forEach(button => button.addEventListener('click', (e) => {
            projectTabButton(e);
        }))

        //initiate delete buttons
        const deleteProjectButtons = document.querySelectorAll('.deleteProject');
        deleteProjectButtons.forEach(button => button.addEventListener('click', (e) => {
            deleteProject(e);
        }))        
    }

    const addNewProject = () => {
        let projectTemplate = document.querySelector('.projectTemplate');
        let newProject = projectTemplate.cloneNode(true);
        newProject.classList.remove('projectTemplate');
        let newProjectButton = document.querySelector('#addProject');
        let projectList = document.querySelector('#allProjects');
        let projectNameDiv = document.querySelector('#projectName');
        let newTodoButton = document.querySelector('#addTodo');

        //once + button is pressed, replace name with input box
        newProject.children[0].innerHTML = "<input type='text' value='' class='textInputProject'>";
        
        newProject.children[0].children[0].addEventListener('keydown', (e) => {
            //press enter to submit name
            if (e.code === 'Enter' && newProject.children[0].children[0].value.trim() !== '') {
                
                //add new project to the 2 arrays
                allProjectNames.push(newProject.children[0].children[0].value);
                allProjects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(newProject.children[0].children[0].value));

                //replace input box with name
                newProject.children[0].innerHTML = newProject.children[0].children[0].value;

                projectNameDiv.textContent = newProject.children[0].textContent;
                newTodoButton.style.display = 'block';
                displayTodoItems();
            }
        })

        //adding project to menu before new project button
        projectList.insertBefore(newProject, newProjectButton);

        const projects = document.querySelectorAll('.project');
        projects.forEach(button => button.addEventListener('click', (e) => {
            projectTabButton(e);
        }))

        const deleteProjectButtons = document.querySelectorAll('.deleteProject');
        deleteProjectButtons.forEach(button => button.addEventListener('click', (e) => {
            deleteProject(e);
        }))
    }

    const projectTabButton = (e) => {
        let todoListDiv = document.querySelector('#todoList');
        let projectNameDiv = document.querySelector('#projectName');
        let listItemTemplate = document.querySelector('.listTemplate');
        let newTodoButton = document.querySelector('#addTodo');

        if (e.target.classList[0] === 'textInputProject' || e.target.classList[0] === 'close' ) {
            return;
        } else if (e.target.parentNode.classList[0] === 'project') {
            projectNameDiv.textContent = e.target.textContent;
            newTodoButton.style.display = 'block';
            displayTodoItems();
        } else if (e.target.children[0].innerHTML.slice(0,6) !== '<input') {
            projectNameDiv.textContent = e.target.children[0].textContent;   
            newTodoButton.style.display = 'block';
            displayTodoItems(); 
        }

    }

    const displayTodoItems = () => {
        const todoListDiv = document.querySelector('#todoList');
        const projectNameDiv = document.querySelector('#projectName');
        const listItemTemplate = document.querySelector('.listTemplate');
        const newTodoButton = document.querySelector('#addTodo');

        for (let i=todoListDiv.childElementCount-2; i > 1 ; i--) {
            todoListDiv.children[i].remove();
        }

        let currentProject = allProjects.find(project => project.name.toLowerCase() === projectNameDiv.textContent.toLowerCase());
        for (let i=0; i < currentProject.getList().length; i++) {
            let newListItem = listItemTemplate.cloneNode(true);
            newListItem.classList.remove('listTemplate');

            let currentItemName = currentProject.getList()[i].name;
            newListItem.children[0].textContent = currentProject.getList()[i].name;

            let currentItem = currentProject.getList().find(item => item.name === currentItemName);
            if (currentItem.getStatus() === 'done') {
                newListItem.children[0].style.textDecoration = 'line-through 3px';
                newListItem.style.backgroundColor = '#bbc0c4';
            } else if (currentItem.getStatus() === 'none') {
                newListItem.children[0].style.textDecoration = '';
                newListItem.style.backgroundColor = '#DFE7EC';
            }

            todoListDiv.insertBefore(newListItem, newTodoButton);
        }

        const deleteTodoButtons = document.querySelectorAll('.deleteTodoItem');
        deleteTodoButtons.forEach(button => button.addEventListener('click', (e) => {
            deleteTodoItem(e);
        }))

        const itemDescriptions = document.querySelectorAll('.itemDescription');
        itemDescriptions.forEach(div => div.addEventListener('click', (e) => {
            toggleItemStatus(e)
        }))
    }

    const deleteProject = (e) => {
        let projectNameDiv = document.querySelector('#projectName');
        let newTodoButton = document.querySelector('#addTodo');

        if (e.target.previousElementSibling.innerHTML.slice(0,6) !== '<input') {
            allProjectNames = allProjectNames.filter(project => project !== e.target.previousElementSibling.innerHTML);
            allProjects = allProjects.filter(project => project.name !== e.target.previousElementSibling.innerHTML);
            updateProjectList();

            projectNameDiv.textContent = '';
            newTodoButton.style.display = 'none';
        } else {
            updateProjectList();
        }
    }

    /*const loadAllPage = () => {
        let todoListDiv = document.querySelector('#todoList');
        let projectNameDiv = document.querySelector('#projectName');
        let listItemTemplate = document.querySelector('.listTemplate');
        let newTodoButton = document.querySelector('#addTodo');

        newTodoButton.style.display = 'none';

        projectNameDiv.textContent = "all";

        for (let i=todoListDiv.childElementCount-2; i > 1 ; i--) {
            todoListDiv.children[i].remove();
        }

        for (let i=0; i<allProjects.length; i++) {
            for (let j=0; j<allProjects[i].getList().length; j++) {
                let newListItem = listItemTemplate.cloneNode(true);
                newListItem.classList.remove('listTemplate');
                newListItem.children[0].textContent = allProjects[i].getList()[j].name;
                todoListDiv.insertBefore(newListItem, newTodoButton);
            }
        }
    }*/

    /*const loadTodayPage = () => {
        let todoListDiv = document.querySelector('#todoList');
        let projectNameDiv = document.querySelector('#projectName');
        let listItemTemplate = document.querySelector('.listTemplate');
        let newTodoButton = document.querySelector('#addTodo');

        newTodoButton.style.display = 'none';

        projectNameDiv.textContent = "today";

        for (let i=todoListDiv.childElementCount-2; i > 1 ; i--) {
            todoListDiv.children[i].remove();
        }

    }*/

    const addNewTodo = () => {
        const todoListDiv = document.querySelector('#todoList');
        const projectNameDiv = document.querySelector('#projectName');
        const listItemTemplate = document.querySelector('.listTemplate');
        const newTodoButton = document.querySelector('#addTodo');

        let newItem = listItemTemplate.cloneNode(true);
        newItem.classList.remove('listTemplate');
        newItem.children[0].innerHTML = "<input type='text' value='' class='textInputItem'>";
        
        newItem.children[0].children[0].addEventListener('keydown', (event) => {
            //press enter to submit
            if (event.code === 'Enter' && newItem.children[0].children[0].value.trim() !== '') {
                
                //add new item to the arrays inside the correct project
                let currentProject = allProjects.find(project => project.name === projectNameDiv.textContent.toLowerCase());
                currentProject.addItem((0,_todoItem__WEBPACK_IMPORTED_MODULE_1__["default"])(newItem.children[0].children[0].value));
                
                //replace input box with name
                newItem.children[0].innerHTML = newItem.children[0].children[0].value;

                displayTodoItems();
            }
        })

        todoListDiv.insertBefore(newItem, newTodoButton);
        
        const deleteTodoButtons = document.querySelectorAll('.deleteTodoItem');
        deleteTodoButtons.forEach(button => button.addEventListener('click', (e) => {
            deleteTodoItem(e);
        }))
    }

    const deleteTodoItem = (e) => {
        let currentProjectName = document.querySelector('#projectName').textContent;
        let currentProject = allProjects.find(project => project.name === currentProjectName);

        if (e.target.parentNode.parentNode.children[0].innerHTML.slice(0,6) !== '<input') {
            currentProject.deleteItem((0,_todoItem__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.parentNode.parentNode.children[0].textContent));
            displayTodoItems();
        } else if (e.target.parentNode.parentNode.children[0].innerHTML.slice(0,6) === '<input') {
            displayTodoItems();
        }
    }

    const buttonEventListeners = () => {
        let newProjectButton = document.querySelector('#addProject');
        newProjectButton.addEventListener('click', () => {addNewProject()});

        /*let allButton = document.querySelector('#all');
        allButton.addEventListener('click', () => {loadAllPage()});*/

        /*let todayButton = document.querySelector('#today');
        todayButton.addEventListener('click', () => {loadTodayPage()});*/

        let newTodoButton = document.querySelector('#addTodo');
        newTodoButton.addEventListener('click', () => {addNewTodo()})
    }

    const toggleItemStatus = (e) => {
        if (e.target.classList[0] === 'textInputItem') {
            return;
        }

        let currentProjectName = document.querySelector('#projectName').textContent;
        let currentItemName = e.target.textContent;
        let currentProject = allProjects.find(project => project.name === currentProjectName);
        let currentItem = currentProject.getList().find(item => item.name === currentItemName);

        if (currentItem.getStatus() === 'none') {
            e.target.style.textDecoration = 'line-through 3px';
            e.target.parentNode.style.backgroundColor = '#bbc0c4';
            currentItem.toggleStatus();
        } else if (currentItem.getStatus() === 'done') {
            e.target.style.textDecoration = '';
            e.target.parentNode.style.backgroundColor = '#DFE7EC';
            currentItem.toggleStatus();
        }

    }

    return {buttonEventListeners}
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userInterface);

/***/ }),

/***/ "./src/Beandisplay-JRyXK.ttf":
/*!***********************************!*\
  !*** ./src/Beandisplay-JRyXK.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acd73bce99a5080ced35.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");




let UI = (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])();

document.addEventListener('DOMContentLoaded', UI.buttonEventListeners());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCx3QkFBd0IsMkRBQTJELEdBQUcsVUFBVSxnQ0FBZ0Msd0JBQXdCLHNCQUFzQixvQkFBb0IsbUJBQW1CLEdBQUcsV0FBVyxzQkFBc0IscUJBQXFCLEdBQUcsWUFBWSxxQkFBcUIsZ0NBQWdDLG1CQUFtQix5QkFBeUIsMkJBQTJCLHNCQUFzQixzQkFBc0IsMEJBQTBCLHNCQUFzQixHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsY0FBYyxvQkFBb0Isc0JBQXNCLHlCQUF5QixtQkFBbUIsR0FBRyxXQUFXLGlCQUFpQixtQkFBbUIsa0JBQWtCLHFCQUFxQixHQUFHLFlBQVksaUJBQWlCLHNCQUFzQixtQkFBbUIsbUJBQW1CLGtCQUFrQixnQ0FBZ0MscUJBQXFCLEdBQUcsa0JBQWtCLHVDQUF1QyxHQUFHLHlCQUF5QixzQkFBc0IsbUJBQW1CLGtCQUFrQixHQUFHLDJCQUEyQixpQkFBaUIsbUJBQW1CLGtCQUFrQixzQkFBc0Isb0NBQW9DLEdBQUcsdUNBQXVDLGdDQUFnQyxHQUFHLHlDQUF5QyxnQ0FBZ0MsR0FBRyxjQUFjLHFCQUFxQixnQ0FBZ0Msc0JBQXNCLG1CQUFtQix5QkFBeUIsMEJBQTBCLHlCQUF5QixpQkFBaUIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsc0JBQXNCLDBCQUEwQiw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLGdDQUFnQyxHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyxvQkFBb0Isb0JBQW9CLGdCQUFnQixxQkFBcUIsR0FBRyxXQUFXLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHlCQUF5QixvQkFBb0IsMEJBQTBCLGdCQUFnQixxQkFBcUIsbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsZUFBZSxrQkFBa0IsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsZUFBZSxrQkFBa0IsR0FBRyxlQUFlLHlCQUF5QixvQkFBb0IsNkJBQTZCLGdDQUFnQyx5QkFBeUIsb0JBQW9CLHlCQUF5QiwwQkFBMEIsZUFBZSxrQkFBa0IsR0FBRyxlQUFlLG9CQUFvQiwwQkFBMEIscUNBQXFDLHVCQUF1QixzQkFBc0IsZ0JBQWdCLHFCQUFxQixnQ0FBZ0MseUJBQXlCLG9CQUFvQix5QkFBeUIsMEJBQTBCLDBCQUEwQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyxtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsZUFBZSxHQUFHLHFDQUFxQyxvQkFBb0IsR0FBRyx1QkFBdUIsbUJBQW1CLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsb0JBQW9CLG1CQUFtQixvQkFBb0Isc0JBQXNCLHlCQUF5QixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksc0NBQXNDLHdCQUF3QixzQ0FBc0MsR0FBRyxVQUFVLGdDQUFnQyx3QkFBd0Isc0JBQXNCLG9CQUFvQixtQkFBbUIsR0FBRyxXQUFXLHNCQUFzQixxQkFBcUIsR0FBRyxZQUFZLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLHlCQUF5QiwyQkFBMkIsc0JBQXNCLHNCQUFzQiwwQkFBMEIsc0JBQXNCLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyxjQUFjLG9CQUFvQixzQkFBc0IseUJBQXlCLG1CQUFtQixHQUFHLFdBQVcsaUJBQWlCLG1CQUFtQixrQkFBa0IscUJBQXFCLEdBQUcsWUFBWSxpQkFBaUIsc0JBQXNCLG1CQUFtQixtQkFBbUIsa0JBQWtCLGdDQUFnQyxxQkFBcUIsR0FBRyxrQkFBa0IsdUNBQXVDLEdBQUcseUJBQXlCLHNCQUFzQixtQkFBbUIsa0JBQWtCLEdBQUcsMkJBQTJCLGlCQUFpQixtQkFBbUIsa0JBQWtCLHNCQUFzQixvQ0FBb0MsR0FBRyx1Q0FBdUMsZ0NBQWdDLEdBQUcseUNBQXlDLGdDQUFnQyxHQUFHLGNBQWMscUJBQXFCLGdDQUFnQyxzQkFBc0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIseUJBQXlCLGlCQUFpQixvQkFBb0IsMEJBQTBCLHFDQUFxQyxzQkFBc0IsMEJBQTBCLDRCQUE0Qix3QkFBd0IsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLG9CQUFvQixvQkFBb0IsZ0JBQWdCLHFCQUFxQixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixnQ0FBZ0MseUJBQXlCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLHFCQUFxQixtQkFBbUIsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2QixlQUFlLGtCQUFrQixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQixlQUFlLGtCQUFrQixHQUFHLGVBQWUseUJBQXlCLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHlCQUF5QixvQkFBb0IseUJBQXlCLDBCQUEwQixlQUFlLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLDBCQUEwQixxQ0FBcUMsdUJBQXVCLHNCQUFzQixnQkFBZ0IscUJBQXFCLGdDQUFnQyx5QkFBeUIsb0JBQW9CLHlCQUF5QiwwQkFBMEIsMEJBQTBCLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQixlQUFlLEdBQUcscUNBQXFDLG9CQUFvQixHQUFHLHVCQUF1QixtQkFBbUIsb0JBQW9CLHNCQUFzQix5QkFBeUIsR0FBRyxvQkFBb0IsbUJBQW1CLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsbUJBQW1CO0FBQzdpUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQ2xCUzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQzNCZ0I7QUFDTDs7QUFFbEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRCxRQUFRO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFjOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0QsUUFBUTtBQUM1RDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFDQUFxQztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0RBQW9ELFFBQVE7QUFDNUQ7QUFDQTs7QUFFQSxzQkFBc0Isc0JBQXNCO0FBQzVDLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9EQUFvRCxRQUFRO0FBQzVEO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFEQUFRO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxxREFBUTtBQUM5QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7O0FBRTFFO0FBQ0EsbURBQW1ELGNBQWMsRUFBRTs7QUFFbkU7QUFDQSxxREFBcUQsZ0JBQWdCLEVBQUU7O0FBRXZFO0FBQ0EsdURBQXVELGFBQWE7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWTtBQUNaOzs7QUFHQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O1VDNVI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCcUI7O0FBRXVCOztBQUU1QyxTQUFTLDBEQUFhOztBQUV0Qix5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIkJlYW5kaXNwbGF5LUpSeVhLLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYmVhbjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4M0E2QTtcXG4gICAgZm9udC1mYW1pbHk6IGJlYW47XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgY29sb3I6ICNERkU3RUM7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjMTQxRTFGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTRDMkM0O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGUxZTQ7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBzY2FsZTogMC45O1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5lZGl0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5jbG9zZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMSwgMSk7XFxufVxcblxcbiNhbGxQcm9qZWN0cyAuY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNhZGRQcm9qZWN0LCAjYWRkVG9kbyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyLCAjYWRkVG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU3RUM7XFxufVxcblxcbiNhZGRQcm9qZWN0OmFjdGl2ZSwgI2FkZFRvZG86YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTdFQztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBjb2xvcjogIzE0MUUxRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E0QzJDNDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjREZFN0VDO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBlMWU0O1xcbn1cXG5cXG4ucHJvamVjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuXFxuI21lbnVBbmRMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogI0RGRTdFQztcXG59XFxuXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4NzlEO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAyNDVweDtcXG59XFxuXFxuI3NvcnRJdGVtc0J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0b2RvTGlzdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFODc5RDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY29sb3I6ICMxNDFFMUY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU3RUM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4uaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbVNldHRpbmdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdFRlbXBsYXRlLCAubGlzdFRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRleHRJbnB1dFByb2plY3Qge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGV4dElucHV0SXRlbSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsNENBQStCO0FBQ25DOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJlYW47XFxuICAgIHNyYzogdXJsKEJlYW5kaXNwbGF5LUpSeVhLLnR0Zik7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzQTZBO1xcbiAgICBmb250LWZhbWlseTogYmVhbjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb2xvcjogI0RGRTdFQztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6ICMxNDFFMUY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNEMyQzQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwZTFlNDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHNjYWxlOiAwLjk7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmVkaXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxLCAxKTtcXG59XFxuXFxuI2FsbFByb2plY3RzIC5jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuI2FkZFByb2plY3QsICNhZGRUb2RvIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIsICNhZGRUb2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTdFQztcXG59XFxuXFxuI2FkZFByb2plY3Q6YWN0aXZlLCAjYWRkVG9kbzphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFN0VDO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGNvbG9yOiAjMTQxRTFGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTRDMkM0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICNERkU3RUM7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGUxZTQ7XFxufVxcblxcbi5wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG5cXG4jbWVudUFuZExpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbG9yOiAjREZFN0VDO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RTg3OUQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDI0NXB4O1xcbn1cXG5cXG4jc29ydEl0ZW1zQnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhbGxQcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3RvZG9MaXN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4NzlEO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjogIzE0MUUxRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTdFQztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbi5pdGVtRGVzY3JpcHRpb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtU2V0dGluZ3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0VGVtcGxhdGUsIC5saXN0VGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGV4dElucHV0UHJvamVjdCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50ZXh0SW5wdXRJdGVtIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdG9kb0xpc3QgPSBbXTtcblxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICB0b2RvTGlzdCA9IHRvZG9MaXN0LmZpbHRlcih0YXNrID0+IHRhc2submFtZSAhPT0gaXRlbS5uYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9kb0xpc3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtuYW1lLCBhZGRJdGVtLCBkZWxldGVJdGVtLCBnZXRMaXN0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RmFjdG9yeTsiLCJpbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5J1xuXG5jb25zdCB0b2RvSXRlbSA9IChuYW1lLCBzdGF0dXMgPSAnbm9uZScsIGRhdGUgPSAnbm9uZScpID0+IHtcblxuICAgIGNvbnN0IHRvZ2dsZVN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnZG9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgICAgIGRhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIHJldHVybiB7bmFtZSwgdG9nZ2xlU3RhdHVzLCBnZXRTdGF0dXMsIHNldERhdGUsIGdldERhdGV9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtOyIsImltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gJy4vdG9kb0l0ZW0nO1xuXG5jb25zdCB1c2VySW50ZXJmYWNlID0gKCkgPT4ge1xuICAgIGxldCBhbGxQcm9qZWN0TmFtZXMgPSBbXTtcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRlbXBsYXRlJyk7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxQcm9qZWN0cycpO1xuICAgICAgICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Jyk7XG5cbiAgICAgICAgLy9jbGVhciBwcm9qZWN0IG1lbnVcbiAgICAgICAgZm9yIChsZXQgaT1wcm9qZWN0TGlzdC5jaGlsZEVsZW1lbnRDb3VudC0yOyBpID4gMSA7IGktLSkge1xuICAgICAgICAgICAgcHJvamVjdExpc3QuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2xvb3AgdGhyb3VnaCBwcm9qZWN0IGxpc3QgYW5kIGFkZCBiYWNrIHRoZSBwcm9qZWN0cyB3aGljaCBoYXZlbid0IGJlZW4gZGVsZXRlZC5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgYWxsUHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2plY3RUZW1wbGF0ZScpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGFsbFByb2plY3ROYW1lc1tpXTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0Lmluc2VydEJlZm9yZShuZXdQcm9qZWN0LCBuZXdQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaW5pdGlhdGUgcHJvamVjdCBkaXZzXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RUYWJCdXR0b24oZSk7XG4gICAgICAgIH0pKVxuXG4gICAgICAgIC8vaW5pdGlhdGUgZGVsZXRlIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlUHJvamVjdCcpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChlKTtcbiAgICAgICAgfSkpICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUZW1wbGF0ZScpO1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdFRlbXBsYXRlJyk7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKTtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFByb2plY3RzJyk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgICAgICBsZXQgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG5cbiAgICAgICAgLy9vbmNlICsgYnV0dG9uIGlzIHByZXNzZWQsIHJlcGxhY2UgbmFtZSB3aXRoIGlucHV0IGJveFxuICAgICAgICBuZXdQcm9qZWN0LmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPScnIGNsYXNzPSd0ZXh0SW5wdXRQcm9qZWN0Jz5cIjtcbiAgICAgICAgXG4gICAgICAgIG5ld1Byb2plY3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAvL3ByZXNzIGVudGVyIHRvIHN1Ym1pdCBuYW1lXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInICYmIG5ld1Byb2plY3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vYWRkIG5ldyBwcm9qZWN0IHRvIHRoZSAyIGFycmF5c1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3ROYW1lcy5wdXNoKG5ld1Byb2plY3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWUpO1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkobmV3UHJvamVjdC5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZSkpO1xuXG4gICAgICAgICAgICAgICAgLy9yZXBsYWNlIGlucHV0IGJveCB3aXRoIG5hbWVcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IG5ld1Byb2plY3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZURpdi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb0l0ZW1zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9hZGRpbmcgcHJvamVjdCB0byBtZW51IGJlZm9yZSBuZXcgcHJvamVjdCBidXR0b25cbiAgICAgICAgcHJvamVjdExpc3QuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3QsIG5ld1Byb2plY3RCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RUYWJCdXR0b24oZSk7XG4gICAgICAgIH0pKVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZVByb2plY3QnKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoZSk7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RUYWJCdXR0b24gPSAoZSkgPT4ge1xuICAgICAgICBsZXQgdG9kb0xpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0xpc3QnKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGxldCBsaXN0SXRlbVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RUZW1wbGF0ZScpO1xuICAgICAgICBsZXQgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gJ3RleHRJbnB1dFByb2plY3QnIHx8IGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gJ2Nsb3NlJyApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdFswXSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZURpdi50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvSXRlbXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGlsZHJlblswXS5pbm5lckhUTUwuc2xpY2UoMCw2KSAhPT0gJzxpbnB1dCcpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50ID0gZS50YXJnZXQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7ICAgXG4gICAgICAgICAgICBuZXdUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZGlzcGxheVRvZG9JdGVtcygpOyBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRvZG9JdGVtcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0xpc3QnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0VGVtcGxhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaT10b2RvTGlzdERpdi5jaGlsZEVsZW1lbnRDb3VudC0yOyBpID4gMSA7IGktLSkge1xuICAgICAgICAgICAgdG9kb0xpc3REaXYuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjdXJyZW50UHJvamVjdC5nZXRMaXN0KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdMaXN0SXRlbSA9IGxpc3RJdGVtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgbmV3TGlzdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdFRlbXBsYXRlJyk7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50SXRlbU5hbWUgPSBjdXJyZW50UHJvamVjdC5nZXRMaXN0KClbaV0ubmFtZTtcbiAgICAgICAgICAgIG5ld0xpc3RJdGVtLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QuZ2V0TGlzdCgpW2ldLm5hbWU7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50SXRlbSA9IGN1cnJlbnRQcm9qZWN0LmdldExpc3QoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBjdXJyZW50SXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmdldFN0YXR1cygpID09PSAnZG9uZScpIHtcbiAgICAgICAgICAgICAgICBuZXdMaXN0SXRlbS5jaGlsZHJlblswXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2ggM3B4JztcbiAgICAgICAgICAgICAgICBuZXdMaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2JiYzBjNCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJdGVtLmdldFN0YXR1cygpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBuZXdMaXN0SXRlbS5jaGlsZHJlblswXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuICAgICAgICAgICAgICAgIG5ld0xpc3RJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjREZFN0VDJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9kb0xpc3REaXYuaW5zZXJ0QmVmb3JlKG5ld0xpc3RJdGVtLCBuZXdUb2RvQnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvZG9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZVRvZG9JdGVtJyk7XG4gICAgICAgIGRlbGV0ZVRvZG9CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvSXRlbShlKTtcbiAgICAgICAgfSkpXG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtRGVzY3JpcHRpb24nKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9ucy5mb3JFYWNoKGRpdiA9PiBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlSXRlbVN0YXR1cyhlKVxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGxldCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG8nKTtcblxuICAgICAgICBpZiAoZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwuc2xpY2UoMCw2KSAhPT0gJzxpbnB1dCcpIHtcbiAgICAgICAgICAgIGFsbFByb2plY3ROYW1lcyA9IGFsbFByb2plY3ROYW1lcy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0ICE9PSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCk7XG4gICAgICAgICAgICBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSAhPT0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwpO1xuICAgICAgICAgICAgdXBkYXRlUHJvamVjdExpc3QoKTtcblxuICAgICAgICAgICAgcHJvamVjdE5hbWVEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIG5ld1RvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKmNvbnN0IGxvYWRBbGxQYWdlID0gKCkgPT4ge1xuICAgICAgICBsZXQgdG9kb0xpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0xpc3QnKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGxldCBsaXN0SXRlbVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RUZW1wbGF0ZScpO1xuICAgICAgICBsZXQgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG5cbiAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50ID0gXCJhbGxcIjtcblxuICAgICAgICBmb3IgKGxldCBpPXRvZG9MaXN0RGl2LmNoaWxkRWxlbWVudENvdW50LTI7IGkgPiAxIDsgaS0tKSB7XG4gICAgICAgICAgICB0b2RvTGlzdERpdi5jaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPGFsbFByb2plY3RzW2ldLmdldExpc3QoKS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBuZXdMaXN0SXRlbSA9IGxpc3RJdGVtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RUZW1wbGF0ZScpO1xuICAgICAgICAgICAgICAgIG5ld0xpc3RJdGVtLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbaV0uZ2V0TGlzdCgpW2pdLm5hbWU7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3REaXYuaW5zZXJ0QmVmb3JlKG5ld0xpc3RJdGVtLCBuZXdUb2RvQnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0qL1xuXG4gICAgLypjb25zdCBsb2FkVG9kYXlQYWdlID0gKCkgPT4ge1xuICAgICAgICBsZXQgdG9kb0xpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0xpc3QnKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGxldCBsaXN0SXRlbVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RUZW1wbGF0ZScpO1xuICAgICAgICBsZXQgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG5cbiAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50ID0gXCJ0b2RheVwiO1xuXG4gICAgICAgIGZvciAobGV0IGk9dG9kb0xpc3REaXYuY2hpbGRFbGVtZW50Q291bnQtMjsgaSA+IDEgOyBpLS0pIHtcbiAgICAgICAgICAgIHRvZG9MaXN0RGl2LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICB9Ki9cblxuICAgIGNvbnN0IGFkZE5ld1RvZG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9MaXN0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFRlbXBsYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9kbycpO1xuXG4gICAgICAgIGxldCBuZXdJdGVtID0gbGlzdEl0ZW1UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdFRlbXBsYXRlJyk7XG4gICAgICAgIG5ld0l0ZW0uY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9JycgY2xhc3M9J3RleHRJbnB1dEl0ZW0nPlwiO1xuICAgICAgICBcbiAgICAgICAgbmV3SXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvL3ByZXNzIGVudGVyIHRvIHN1Ym1pdFxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicgJiYgbmV3SXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9hZGQgbmV3IGl0ZW0gdG8gdGhlIGFycmF5cyBpbnNpZGUgdGhlIGNvcnJlY3QgcHJvamVjdFxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZEl0ZW0odG9kb0l0ZW0obmV3SXRlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vcmVwbGFjZSBpbnB1dCBib3ggd2l0aCBuYW1lXG4gICAgICAgICAgICAgICAgbmV3SXRlbS5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBuZXdJdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG9JdGVtcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9MaXN0RGl2Lmluc2VydEJlZm9yZShuZXdJdGVtLCBuZXdUb2RvQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvZG9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZVRvZG9JdGVtJyk7XG4gICAgICAgIGRlbGV0ZVRvZG9CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvSXRlbShlKTtcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVG9kb0l0ZW0gPSAoZSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJykudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblswXS5pbm5lckhUTUwuc2xpY2UoMCw2KSAhPT0gJzxpbnB1dCcpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmRlbGV0ZUl0ZW0odG9kb0l0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb0l0ZW1zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmlubmVySFRNTC5zbGljZSgwLDYpID09PSAnPGlucHV0Jykge1xuICAgICAgICAgICAgZGlzcGxheVRvZG9JdGVtcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHthZGROZXdQcm9qZWN0KCl9KTtcblxuICAgICAgICAvKmxldCBhbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJyk7XG4gICAgICAgIGFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkQWxsUGFnZSgpfSk7Ki9cblxuICAgICAgICAvKmxldCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuICAgICAgICB0b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkVG9kYXlQYWdlKCl9KTsqL1xuXG4gICAgICAgIGxldCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG8nKTtcbiAgICAgICAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHthZGROZXdUb2RvKCl9KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUl0ZW1TdGF0dXMgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSAndGV4dElucHV0SXRlbScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtTmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBjdXJyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSBjdXJyZW50UHJvamVjdC5nZXRMaXN0KCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gY3VycmVudEl0ZW1OYW1lKTtcblxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uZ2V0U3RhdHVzKCkgPT09ICdub25lJykge1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoIDNweCc7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYmJjMGM0JztcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtLnRvZ2dsZVN0YXR1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJdGVtLmdldFN0YXR1cygpID09PSAnZG9uZScpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjREZFN0VDJztcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtLnRvZ2dsZVN0YXR1cygpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2J1dHRvbkV2ZW50TGlzdGVuZXJzfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnRlcmZhY2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHVzZXJJbnRlcmZhY2UgZnJvbSAnLi91c2VySW50ZXJmYWNlJztcblxubGV0IFVJID0gdXNlckludGVyZmFjZSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkuYnV0dG9uRXZlbnRMaXN0ZW5lcnMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: bean;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    background-color: #283A6A;\n    font-family: bean;\n    font-size: 30px;\n    padding: 10px;\n    height: 100%;\n}\n\n#logo {\n    font-size: 50px;\n    color: #DFE7EC;\n}\n\nbutton {\n    color: #141E1F;\n    background-color: #A4C2C4;\n    padding: 5px;\n    border-radius: 5px;\n    font-family: inherit;\n    font-size: 25px;\n    cursor: pointer;\n    border-style: solid;\n    max-width: 100%;\n}\n\nbutton:hover {\n    background-color: #c0e1e4;\n}\n\nbutton:active {\n    scale: 0.9;\n}\n\n.dueDate {\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n    height: 25px;\n}\n\n.close {\n    padding: 0;\n    font-size: 20px;\n    color: white;\n    height: 30px;\n    width: 30px;\n    background-color: darkred;\n    flex-shrink: 0;\n}\n\n.close:hover {\n    background-color: rgb(100, 1, 1);\n}\n\n#allProjects .close {\n    font-size: 15px;\n    height: 20px;\n    width: 20px;\n}\n\n#addProject, #addTodo {\n    padding: 0;\n    height: 40px;\n    width: 100%;\n    font-size: 30px;\n    background-color: transparent;\n    color: #DFE7EC;\n}\n\n#addProject:hover, #addTodo:hover {\n    background-color: #DFE7EC;\n    color: black;\n}\n\n#addProject:active, #addTodo:active {\n    background-color: #DFE7EC;\n    color: black;\n}\n\n.project {\n    color: #141E1F;\n    background-color: #A4C2C4;\n    font-size: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 5px;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    border-style: solid;\n    border-color: #DFE7EC;\n    border-width: 2px;\n}\n\n.project:hover {\n    background-color: #c0e1e4;\n}\n\n.project:active {\n    background-color: azure;\n}\n\n\n#menuAndList {\n    display: flex;\n    gap: 20px;\n    color: #DFE7EC;\n}\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    background-color: #5E879D;\n    border-radius: 5px;\n    padding: 20px;\n    align-items: center;\n    gap: 20px;\n    flex-shrink: 0;\n    width: 245px;\n}\n\n#sortItemsBy {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 100%;\n}\n\n#allProjects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    width: 100%;\n}\n\n#todoList {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    background-color: #5E879D;\n    border-radius: 5px;\n    padding: 20px;\n    padding-left: 50px;\n    padding-right: 50px;\n    gap: 5px;\n    width: 100%;\n}\n\n.listItem {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-align: left;\n    font-size: 25px;\n    gap: 10px;\n    color: #141E1F;\n    background-color: #DFE7EC;\n    border-radius: 5px;\n    padding: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-overflow: clip;\n}\n\n.itemDescription {\n    cursor: pointer;\n}\n\n.itemSettings {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.projectTemplate, .listTemplate {\n    display: none;\n}\n\n.textInputProject {\n    width: 150px;\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n}\n\n.textInputItem {\n    width: 300px;\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,4CAA+B;AACnC;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,WAAW;IACX,eAAe;IACf,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;IACf,SAAS;IACT,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: bean;\n    src: url(Beandisplay-JRyXK.ttf);\n}\n\nbody {\n    background-color: #283A6A;\n    font-family: bean;\n    font-size: 30px;\n    padding: 10px;\n    height: 100%;\n}\n\n#logo {\n    font-size: 50px;\n    color: #DFE7EC;\n}\n\nbutton {\n    color: #141E1F;\n    background-color: #A4C2C4;\n    padding: 5px;\n    border-radius: 5px;\n    font-family: inherit;\n    font-size: 25px;\n    cursor: pointer;\n    border-style: solid;\n    max-width: 100%;\n}\n\nbutton:hover {\n    background-color: #c0e1e4;\n}\n\nbutton:active {\n    scale: 0.9;\n}\n\n.dueDate {\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n    height: 25px;\n}\n\n.close {\n    padding: 0;\n    font-size: 20px;\n    color: white;\n    height: 30px;\n    width: 30px;\n    background-color: darkred;\n    flex-shrink: 0;\n}\n\n.close:hover {\n    background-color: rgb(100, 1, 1);\n}\n\n#allProjects .close {\n    font-size: 15px;\n    height: 20px;\n    width: 20px;\n}\n\n#addProject, #addTodo {\n    padding: 0;\n    height: 40px;\n    width: 100%;\n    font-size: 30px;\n    background-color: transparent;\n    color: #DFE7EC;\n}\n\n#addProject:hover, #addTodo:hover {\n    background-color: #DFE7EC;\n    color: black;\n}\n\n#addProject:active, #addTodo:active {\n    background-color: #DFE7EC;\n    color: black;\n}\n\n.project {\n    color: #141E1F;\n    background-color: #A4C2C4;\n    font-size: 25px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 5px;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    border-style: solid;\n    border-color: #DFE7EC;\n    border-width: 2px;\n}\n\n.project:hover {\n    background-color: #c0e1e4;\n}\n\n.project:active {\n    background-color: azure;\n}\n\n\n#menuAndList {\n    display: flex;\n    gap: 20px;\n    color: #DFE7EC;\n}\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    background-color: #5E879D;\n    border-radius: 5px;\n    padding: 20px;\n    align-items: center;\n    gap: 20px;\n    flex-shrink: 0;\n    width: 245px;\n}\n\n#sortItemsBy {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 100%;\n}\n\n#allProjects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    width: 100%;\n}\n\n#todoList {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    background-color: #5E879D;\n    border-radius: 5px;\n    padding: 20px;\n    padding-left: 50px;\n    padding-right: 50px;\n    gap: 5px;\n    width: 100%;\n}\n\n.listItem {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-align: left;\n    font-size: 25px;\n    gap: 10px;\n    color: #141E1F;\n    background-color: #DFE7EC;\n    border-radius: 5px;\n    padding: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-overflow: clip;\n}\n\n.itemDescription {\n    cursor: pointer;\n}\n\n.itemSettings {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.projectTemplate, .listTemplate {\n    display: none;\n}\n\n.textInputProject {\n    width: 150px;\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n}\n\n.textInputItem {\n    width: 300px;\n    font: inherit;\n    font-size: 25px;\n    border-radius: 5px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");



const storage = () => {
    const setAllProjects = (allProjectsArray) => {

        let allProjectNames = [];
        let allTodoListNames = [];
        let allTodoListStatuses = [];
        let allTodoListDates = [];

        for (let i=0; i<allProjectsArray.length; i++) {
            //project names:
            allProjectNames.push(allProjectsArray[i].name);

            //todo lists:
            let todoListNames = [];
            let todoListStatuses = [];
            let todoListDates = []
            for (let j=0; j<allProjectsArray[i].getList().length; j++) {
                todoListNames.push(allProjectsArray[i].getList()[j].name);

                todoListStatuses.push(allProjectsArray[i].getList()[j].getStatus());

                todoListDates.push(allProjectsArray[i].getList()[j].getDate())
            }
            allTodoListNames.push(todoListNames);
            allTodoListStatuses.push(todoListStatuses);
            allTodoListDates.push(todoListDates);
        }
        localStorage.setItem('allProjectNames', JSON.stringify(allProjectNames));
        localStorage.setItem('allTodoListNames', JSON.stringify(allTodoListNames));
        localStorage.setItem('allTodoListStatuses', JSON.stringify(allTodoListStatuses));
        localStorage.setItem('allTodoListDates', JSON.stringify(allTodoListDates));
    }

    const getAllProjects = () => {
        if (localStorage.getItem('allProjectNames') == null) {
            return [];
        } else {
            let allProjectsArray = [];
            let allProjectNames = JSON.parse(localStorage.getItem('allProjectNames'));
            let allTodoListNames = JSON.parse(localStorage.getItem('allTodoListNames'));
            let allTodoListStatuses = JSON.parse(localStorage.getItem('allTodoListStatuses'));
            let allTodoListDates = JSON.parse(localStorage.getItem('allTodoListDates'));

            for (let i=0; i<allProjectNames.length; i++) {
                allProjectsArray.push((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(allProjectNames[i]));

                for (let j=0; j<allTodoListNames[i].length; j++) {
                    allProjectsArray[i].addItem((0,_todoItem__WEBPACK_IMPORTED_MODULE_1__["default"])(allTodoListNames[i][j], allTodoListStatuses[i][j], allTodoListDates[i][j]));
                }
            }

            return allProjectsArray;
        }
    }

    const getAllProjectNames = () => {
        if (localStorage.getItem('allProjectNames') == null) {
            return [];
        } else {
            let allProjectNames = JSON.parse(localStorage.getItem('allProjectNames'));
            return allProjectNames;
        }
    }

    return {setAllProjects, getAllProjects, getAllProjectNames}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




const userInterface = () => {
    
    let allProjectNames = (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().getAllProjectNames();
    let allProjects = (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().getAllProjects();

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
                
                if (allProjectNames.includes(newProject.children[0].children[0].value.trim().toLowerCase())) {
                    alert("Two projects can't have the same name. Please try again!");
                    return;
                } 

                //add new project to the 2 arrays
                allProjectNames.push(newProject.children[0].children[0].value.toLowerCase());
                allProjects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(newProject.children[0].children[0].value.toLowerCase()));
                
                //replace input box with name
                newProject.children[0].innerHTML = newProject.children[0].children[0].value.toLowerCase();

                projectNameDiv.textContent = newProject.children[0].textContent;
                newTodoButton.style.display = 'block';
                displayTodoItems();
                (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().setAllProjects(allProjects);
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
        let projectNameDiv = document.querySelector('#projectName');
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

            let dueDate = currentProject.getList()[i].getDate();
            newListItem.children[1].children[0].children[0].value = dueDate;

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

        const dateInputBoxes = document.querySelectorAll('.date');
        dateInputBoxes.forEach(box => box.addEventListener('change', (e) => {
            updateDate(e);
        }))
    }

    const deleteProject = (e) => {
        const projectNameDiv = document.querySelector('#projectName');
        const newTodoButton = document.querySelector('#addTodo');
        const todoListDiv = document.querySelector('#todoList');

        if (e.target.previousElementSibling.innerHTML.slice(0,6) !== '<input') {
            allProjectNames = allProjectNames.filter(project => project !== e.target.previousElementSibling.innerHTML);
            allProjects = allProjects.filter(project => project.name !== e.target.previousElementSibling.innerHTML);
            updateProjectList();

            projectNameDiv.textContent = '';
            newTodoButton.style.display = 'none';
            for (let i=todoListDiv.childElementCount-2; i > 1 ; i--) {
                todoListDiv.children[i].remove();
            }
            (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().setAllProjects(allProjects);
        } else {
            updateProjectList();
        }
    }

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
                let allItemNames = [];
                for (let i=0; i<currentProject.getList().length; i++) {
                    allItemNames.push(currentProject.getList()[i].name);
                }
                if (allItemNames.includes(newItem.children[0].children[0].value.trim().toLowerCase())) {
                    alert("Two tasks can't be the same. Please try again!");
                    return;
                }

                
                let dueDate = newItem.children[1].children[0].children[0].value;

                currentProject.addItem((0,_todoItem__WEBPACK_IMPORTED_MODULE_1__["default"])(newItem.children[0].children[0].value, 'none', dueDate));
                
                //replace input box with name
                newItem.children[0].innerHTML = newItem.children[0].children[0].value;

                displayTodoItems();
                (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().setAllProjects(allProjects);
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
            (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().setAllProjects(allProjects);
        } else if (e.target.parentNode.parentNode.children[0].innerHTML.slice(0,6) === '<input') {
            displayTodoItems();
        }
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

        (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().setAllProjects(allProjects);
    }

    const updateDate = (e) => {
        let newDate = e.target.value;
        let currentProjectName = document.querySelector('#projectName').textContent;
        let currentProject = allProjects.find(project => project.name === currentProjectName);
        let currentItemName = e.target.parentNode.parentNode.parentNode.children[0].textContent;
        let currentItem = currentProject.getList().find(item => item.name === currentItemName);

        currentItem.setDate(newDate);
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().setAllProjects(allProjects);
    }

    const buttonEventListeners = () => {

        let newProjectButton = document.querySelector('#addProject');
        newProjectButton.addEventListener('click', () => {addNewProject()});

        let newTodoButton = document.querySelector('#addTodo');
        newTodoButton.addEventListener('click', () => {addNewTodo()});

        updateProjectList();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQnFCOztBQUV1Qjs7QUFFNUMsU0FBUywwREFBYTs7QUFFdEIseUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJCZWFuZGlzcGxheS1KUnlYSy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJlYW47XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODNBNkE7XFxuICAgIGZvbnQtZmFtaWx5OiBiZWFuO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiAjREZFN0VDO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjb2xvcjogIzE0MUUxRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E0QzJDNDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBlMWU0O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgc2NhbGU6IDAuOTtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEsIDEpO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgLmNsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCwgI2FkZFRvZG8ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI0RGRTdFQztcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIsICNhZGRUb2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTdFQztcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jYWRkUHJvamVjdDphY3RpdmUsICNhZGRUb2RvOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU3RUM7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBjb2xvcjogIzE0MUUxRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E0QzJDNDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjREZFN0VDO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBlMWU0O1xcbn1cXG5cXG4ucHJvamVjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuXFxuI21lbnVBbmRMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogI0RGRTdFQztcXG59XFxuXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4NzlEO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAyNDVweDtcXG59XFxuXFxuI3NvcnRJdGVtc0J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0b2RvTGlzdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFODc5RDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY29sb3I6ICMxNDFFMUY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU3RUM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4uaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbVNldHRpbmdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdFRlbXBsYXRlLCAubGlzdFRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRleHRJbnB1dFByb2plY3Qge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGV4dElucHV0SXRlbSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsNENBQStCO0FBQ25DOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYmVhbjtcXG4gICAgc3JjOiB1cmwoQmVhbmRpc3BsYXktSlJ5WEsudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODNBNkE7XFxuICAgIGZvbnQtZmFtaWx5OiBiZWFuO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiAjREZFN0VDO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjb2xvcjogIzE0MUUxRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E0QzJDNDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBlMWU0O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgc2NhbGU6IDAuOTtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEsIDEpO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgLmNsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCwgI2FkZFRvZG8ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI0RGRTdFQztcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIsICNhZGRUb2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTdFQztcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jYWRkUHJvamVjdDphY3RpdmUsICNhZGRUb2RvOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU3RUM7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBjb2xvcjogIzE0MUUxRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E0QzJDNDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjREZFN0VDO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBlMWU0O1xcbn1cXG5cXG4ucHJvamVjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuXFxuI21lbnVBbmRMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogI0RGRTdFQztcXG59XFxuXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4NzlEO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdpZHRoOiAyNDVweDtcXG59XFxuXFxuI3NvcnRJdGVtc0J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0b2RvTGlzdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFODc5RDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY29sb3I6ICMxNDFFMUY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU3RUM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4uaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbVNldHRpbmdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdFRlbXBsYXRlLCAubGlzdFRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRleHRJbnB1dFByb2plY3Qge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGV4dElucHV0SXRlbSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHRvZG9MaXN0ID0gW107XG5cbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgdG9kb0xpc3QucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgdG9kb0xpc3QgPSB0b2RvTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLm5hbWUgIT09IGl0ZW0ubmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0O1xuICAgIH1cblxuICAgIHJldHVybiB7bmFtZSwgYWRkSXRlbSwgZGVsZXRlSXRlbSwgZ2V0TGlzdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3Rvcnk7IiwiaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgdG9kb0l0ZW0gZnJvbSAnLi90b2RvSXRlbSc7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2V0QWxsUHJvamVjdHMgPSAoYWxsUHJvamVjdHNBcnJheSkgPT4ge1xuXG4gICAgICAgIGxldCBhbGxQcm9qZWN0TmFtZXMgPSBbXTtcbiAgICAgICAgbGV0IGFsbFRvZG9MaXN0TmFtZXMgPSBbXTtcbiAgICAgICAgbGV0IGFsbFRvZG9MaXN0U3RhdHVzZXMgPSBbXTtcbiAgICAgICAgbGV0IGFsbFRvZG9MaXN0RGF0ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8YWxsUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy9wcm9qZWN0IG5hbWVzOlxuICAgICAgICAgICAgYWxsUHJvamVjdE5hbWVzLnB1c2goYWxsUHJvamVjdHNBcnJheVtpXS5uYW1lKTtcblxuICAgICAgICAgICAgLy90b2RvIGxpc3RzOlxuICAgICAgICAgICAgbGV0IHRvZG9MaXN0TmFtZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCB0b2RvTGlzdFN0YXR1c2VzID0gW107XG4gICAgICAgICAgICBsZXQgdG9kb0xpc3REYXRlcyA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8YWxsUHJvamVjdHNBcnJheVtpXS5nZXRMaXN0KCkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdE5hbWVzLnB1c2goYWxsUHJvamVjdHNBcnJheVtpXS5nZXRMaXN0KClbal0ubmFtZSk7XG5cbiAgICAgICAgICAgICAgICB0b2RvTGlzdFN0YXR1c2VzLnB1c2goYWxsUHJvamVjdHNBcnJheVtpXS5nZXRMaXN0KClbal0uZ2V0U3RhdHVzKCkpO1xuXG4gICAgICAgICAgICAgICAgdG9kb0xpc3REYXRlcy5wdXNoKGFsbFByb2plY3RzQXJyYXlbaV0uZ2V0TGlzdCgpW2pdLmdldERhdGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbFRvZG9MaXN0TmFtZXMucHVzaCh0b2RvTGlzdE5hbWVzKTtcbiAgICAgICAgICAgIGFsbFRvZG9MaXN0U3RhdHVzZXMucHVzaCh0b2RvTGlzdFN0YXR1c2VzKTtcbiAgICAgICAgICAgIGFsbFRvZG9MaXN0RGF0ZXMucHVzaCh0b2RvTGlzdERhdGVzKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdE5hbWVzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdE5hbWVzKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUb2RvTGlzdE5hbWVzJywgSlNPTi5zdHJpbmdpZnkoYWxsVG9kb0xpc3ROYW1lcykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVG9kb0xpc3RTdGF0dXNlcycsIEpTT04uc3RyaW5naWZ5KGFsbFRvZG9MaXN0U3RhdHVzZXMpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRvZG9MaXN0RGF0ZXMnLCBKU09OLnN0cmluZ2lmeShhbGxUb2RvTGlzdERhdGVzKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdE5hbWVzJykgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFsbFByb2plY3RzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGxldCBhbGxQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0TmFtZXMnKSk7XG4gICAgICAgICAgICBsZXQgYWxsVG9kb0xpc3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRvZG9MaXN0TmFtZXMnKSk7XG4gICAgICAgICAgICBsZXQgYWxsVG9kb0xpc3RTdGF0dXNlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRvZG9MaXN0U3RhdHVzZXMnKSk7XG4gICAgICAgICAgICBsZXQgYWxsVG9kb0xpc3REYXRlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRvZG9MaXN0RGF0ZXMnKSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxhbGxQcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdEZhY3RvcnkoYWxsUHJvamVjdE5hbWVzW2ldKSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8YWxsVG9kb0xpc3ROYW1lc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c0FycmF5W2ldLmFkZEl0ZW0odG9kb0l0ZW0oYWxsVG9kb0xpc3ROYW1lc1tpXVtqXSwgYWxsVG9kb0xpc3RTdGF0dXNlc1tpXVtqXSwgYWxsVG9kb0xpc3REYXRlc1tpXVtqXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFsbFByb2plY3RzQXJyYXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbGxQcm9qZWN0TmFtZXMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdE5hbWVzJykgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFsbFByb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3ROYW1lcycpKTtcbiAgICAgICAgICAgIHJldHVybiBhbGxQcm9qZWN0TmFtZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge3NldEFsbFByb2plY3RzLCBnZXRBbGxQcm9qZWN0cywgZ2V0QWxsUHJvamVjdE5hbWVzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsImNvbnN0IHRvZG9JdGVtID0gKG5hbWUsIHN0YXR1cyA9ICdub25lJywgZGF0ZSA9ICdub25lJykgPT4ge1xuXG4gICAgY29uc3QgdG9nZ2xlU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdkb25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICAgICAgZGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtuYW1lLCB0b2dnbGVTdGF0dXMsIGdldFN0YXR1cywgc2V0RGF0ZSwgZ2V0RGF0ZX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kb0l0ZW07IiwiaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgdG9kb0l0ZW0gZnJvbSAnLi90b2RvSXRlbSc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jb25zdCB1c2VySW50ZXJmYWNlID0gKCkgPT4ge1xuICAgIFxuICAgIGxldCBhbGxQcm9qZWN0TmFtZXMgPSBzdG9yYWdlKCkuZ2V0QWxsUHJvamVjdE5hbWVzKCk7XG4gICAgbGV0IGFsbFByb2plY3RzID0gc3RvcmFnZSgpLmdldEFsbFByb2plY3RzKCk7XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGVtcGxhdGUnKTtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFByb2plY3RzJyk7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKTtcblxuICAgICAgICAvL2NsZWFyIHByb2plY3QgbWVudVxuICAgICAgICBmb3IgKGxldCBpPXByb2plY3RMaXN0LmNoaWxkRWxlbWVudENvdW50LTI7IGkgPiAxIDsgaS0tKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5jaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbG9vcCB0aHJvdWdoIHByb2plY3QgbGlzdCBhbmQgYWRkIGJhY2sgdGhlIHByb2plY3RzIHdoaWNoIGhhdmVuJ3QgYmVlbiBkZWxldGVkLlxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBhbGxQcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdFRlbXBsYXRlJyk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYWxsUHJvamVjdE5hbWVzW2ldO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3QsIG5ld1Byb2plY3RCdXR0b24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pbml0aWF0ZSBwcm9qZWN0IGRpdnNcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFRhYkJ1dHRvbihlKTtcbiAgICAgICAgfSkpXG5cbiAgICAgICAgLy9pbml0aWF0ZSBkZWxldGUgYnV0dG9uc1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVQcm9qZWN0Jyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KGUpO1xuICAgICAgICB9KSkgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRlbXBsYXRlJyk7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0VGVtcGxhdGUnKTtcbiAgICAgICAgbGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpO1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsUHJvamVjdHMnKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGxldCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG8nKTtcblxuICAgICAgICAvL29uY2UgKyBidXR0b24gaXMgcHJlc3NlZCwgcmVwbGFjZSBuYW1lIHdpdGggaW5wdXQgYm94XG4gICAgICAgIG5ld1Byb2plY3QuY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9JycgY2xhc3M9J3RleHRJbnB1dFByb2plY3QnPlwiO1xuICAgICAgICBcbiAgICAgICAgbmV3UHJvamVjdC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vcHJlc3MgZW50ZXIgdG8gc3VibWl0IG5hbWVcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicgJiYgbmV3UHJvamVjdC5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGFsbFByb2plY3ROYW1lcy5pbmNsdWRlcyhuZXdQcm9qZWN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlR3byBwcm9qZWN0cyBjYW4ndCBoYXZlIHRoZSBzYW1lIG5hbWUuIFBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgIC8vYWRkIG5ldyBwcm9qZWN0IHRvIHRoZSAyIGFycmF5c1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3ROYW1lcy5wdXNoKG5ld1Byb2plY3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0RmFjdG9yeShuZXdQcm9qZWN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL3JlcGxhY2UgaW5wdXQgYm94IHdpdGggbmFtZVxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gbmV3UHJvamVjdC5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVEaXYudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0LmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIG5ld1RvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG9JdGVtcygpO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2UoKS5zZXRBbGxQcm9qZWN0cyhhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9hZGRpbmcgcHJvamVjdCB0byBtZW51IGJlZm9yZSBuZXcgcHJvamVjdCBidXR0b25cbiAgICAgICAgcHJvamVjdExpc3QuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3QsIG5ld1Byb2plY3RCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RUYWJCdXR0b24oZSk7XG4gICAgICAgIH0pKVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZVByb2plY3QnKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoZSk7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RUYWJCdXR0b24gPSAoZSkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICAgICAgbGV0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9kbycpO1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICd0ZXh0SW5wdXRQcm9qZWN0JyB8fCBlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICdjbG9zZScgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3RbMF0gPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgcHJvamVjdE5hbWVEaXYudGV4dENvbnRlbnQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIG5ld1RvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb0l0ZW1zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hpbGRyZW5bMF0uaW5uZXJIVE1MLnNsaWNlKDAsNikgIT09ICc8aW5wdXQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZURpdi50ZXh0Q29udGVudCA9IGUudGFyZ2V0LmNoaWxkcmVuWzBdLnRleHRDb250ZW50OyAgIFxuICAgICAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvSXRlbXMoKTsgXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUb2RvSXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9MaXN0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFRlbXBsYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9kbycpO1xuXG4gICAgICAgIGZvciAobGV0IGk9dG9kb0xpc3REaXYuY2hpbGRFbGVtZW50Q291bnQtMjsgaSA+IDEgOyBpLS0pIHtcbiAgICAgICAgICAgIHRvZG9MaXN0RGl2LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZS50b0xvd2VyQ2FzZSgpID09PSBwcm9qZWN0TmFtZURpdi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY3VycmVudFByb2plY3QuZ2V0TGlzdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmV3TGlzdEl0ZW0gPSBsaXN0SXRlbVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RUZW1wbGF0ZScpO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudEl0ZW1OYW1lID0gY3VycmVudFByb2plY3QuZ2V0TGlzdCgpW2ldLm5hbWU7XG4gICAgICAgICAgICBuZXdMaXN0SXRlbS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LmdldExpc3QoKVtpXS5uYW1lO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSBjdXJyZW50UHJvamVjdC5nZXRMaXN0KCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gY3VycmVudEl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5nZXRTdGF0dXMoKSA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdEl0ZW0uY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoIDNweCc7XG4gICAgICAgICAgICAgICAgbmV3TGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNiYmMwYzQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SXRlbS5nZXRTdGF0dXMoKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdEl0ZW0uY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgICAgICAgICAgICBuZXdMaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0RGRTdFQyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkdWVEYXRlID0gY3VycmVudFByb2plY3QuZ2V0TGlzdCgpW2ldLmdldERhdGUoKTtcbiAgICAgICAgICAgIG5ld0xpc3RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlID0gZHVlRGF0ZTtcblxuICAgICAgICAgICAgdG9kb0xpc3REaXYuaW5zZXJ0QmVmb3JlKG5ld0xpc3RJdGVtLCBuZXdUb2RvQnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvZG9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZVRvZG9JdGVtJyk7XG4gICAgICAgIGRlbGV0ZVRvZG9CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvSXRlbShlKTtcbiAgICAgICAgfSkpXG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtRGVzY3JpcHRpb24nKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9ucy5mb3JFYWNoKGRpdiA9PiBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlSXRlbVN0YXR1cyhlKVxuICAgICAgICB9KSlcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXRCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dEJveGVzLmZvckVhY2goYm94ID0+IGJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlRGF0ZShlKTtcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9kbycpO1xuICAgICAgICBjb25zdCB0b2RvTGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTGlzdCcpO1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTC5zbGljZSgwLDYpICE9PSAnPGlucHV0Jykge1xuICAgICAgICAgICAgYWxsUHJvamVjdE5hbWVzID0gYWxsUHJvamVjdE5hbWVzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QgIT09IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzID0gYWxsUHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lICE9PSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TmFtZURpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZm9yIChsZXQgaT10b2RvTGlzdERpdi5jaGlsZEVsZW1lbnRDb3VudC0yOyBpID4gMSA7IGktLSkge1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0RGl2LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcmFnZSgpLnNldEFsbFByb2plY3RzKGFsbFByb2plY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdUb2RvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTGlzdCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgICAgICBjb25zdCBsaXN0SXRlbVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RUZW1wbGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG8nKTtcblxuICAgICAgICBsZXQgbmV3SXRlbSA9IGxpc3RJdGVtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RUZW1wbGF0ZScpO1xuICAgICAgICBuZXdJdGVtLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPScnIGNsYXNzPSd0ZXh0SW5wdXRJdGVtJz5cIjtcbiAgICAgICAgXG4gICAgICAgIG5ld0l0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy9wcmVzcyBlbnRlciB0byBzdWJtaXRcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInICYmIG5ld0l0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWUudHJpbSgpICE9PSAnJykge1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgbmV3IGl0ZW0gdG8gdGhlIGFycmF5cyBpbnNpZGUgdGhlIGNvcnJlY3QgcHJvamVjdFxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIGxldCBhbGxJdGVtTmFtZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8Y3VycmVudFByb2plY3QuZ2V0TGlzdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbEl0ZW1OYW1lcy5wdXNoKGN1cnJlbnRQcm9qZWN0LmdldExpc3QoKVtpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFsbEl0ZW1OYW1lcy5pbmNsdWRlcyhuZXdJdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlR3byB0YXNrcyBjYW4ndCBiZSB0aGUgc2FtZS4gUGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld0l0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRJdGVtKHRvZG9JdGVtKG5ld0l0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWUsICdub25lJywgZHVlRGF0ZSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vcmVwbGFjZSBpbnB1dCBib3ggd2l0aCBuYW1lXG4gICAgICAgICAgICAgICAgbmV3SXRlbS5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBuZXdJdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG9JdGVtcygpO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2UoKS5zZXRBbGxQcm9qZWN0cyhhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0xpc3REaXYuaW5zZXJ0QmVmb3JlKG5ld0l0ZW0sIG5ld1RvZG9CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlVG9kb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlVG9kb0l0ZW0nKTtcbiAgICAgICAgZGVsZXRlVG9kb0J1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKGUpO1xuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUb2RvSXRlbSA9IChlKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gY3VycmVudFByb2plY3ROYW1lKTtcblxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmlubmVySFRNTC5zbGljZSgwLDYpICE9PSAnPGlucHV0Jykge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QuZGVsZXRlSXRlbSh0b2RvSXRlbShlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpKTtcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvSXRlbXMoKTtcbiAgICAgICAgICAgIHN0b3JhZ2UoKS5zZXRBbGxQcm9qZWN0cyhhbGxQcm9qZWN0cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmlubmVySFRNTC5zbGljZSgwLDYpID09PSAnPGlucHV0Jykge1xuICAgICAgICAgICAgZGlzcGxheVRvZG9JdGVtcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlSXRlbVN0YXR1cyA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICd0ZXh0SW5wdXRJdGVtJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1OYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IGN1cnJlbnRQcm9qZWN0LmdldExpc3QoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBjdXJyZW50SXRlbU5hbWUpO1xuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5nZXRTdGF0dXMoKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2ggM3B4JztcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNiYmMwYzQnO1xuICAgICAgICAgICAgY3VycmVudEl0ZW0udG9nZ2xlU3RhdHVzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEl0ZW0uZ2V0U3RhdHVzKCkgPT09ICdkb25lJykge1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNERkU3RUMnO1xuICAgICAgICAgICAgY3VycmVudEl0ZW0udG9nZ2xlU3RhdHVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yYWdlKCkuc2V0QWxsUHJvamVjdHMoYWxsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZURhdGUgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgbmV3RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgY3VycmVudFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJykudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbU5hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gY3VycmVudFByb2plY3QuZ2V0TGlzdCgpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGN1cnJlbnRJdGVtTmFtZSk7XG5cbiAgICAgICAgY3VycmVudEl0ZW0uc2V0RGF0ZShuZXdEYXRlKTtcbiAgICAgICAgc3RvcmFnZSgpLnNldEFsbFByb2plY3RzKGFsbFByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25FdmVudExpc3RlbmVycyA9ICgpID0+IHtcblxuICAgICAgICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Jyk7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7YWRkTmV3UHJvamVjdCgpfSk7XG5cbiAgICAgICAgbGV0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9kbycpO1xuICAgICAgICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2FkZE5ld1RvZG8oKX0pO1xuXG4gICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2J1dHRvbkV2ZW50TGlzdGVuZXJzfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnRlcmZhY2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHVzZXJJbnRlcmZhY2UgZnJvbSAnLi91c2VySW50ZXJmYWNlJztcblxubGV0IFVJID0gdXNlckludGVyZmFjZSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkuYnV0dG9uRXZlbnRMaXN0ZW5lcnMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
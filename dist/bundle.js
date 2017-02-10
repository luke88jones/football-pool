/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DrawnEntry = (function () {
    function DrawnEntry(team, person) {
        this.team = team;
        this.person = person;
    }
    return DrawnEntry;
}());
exports.DrawnEntry = DrawnEntry;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(16));
__export(__webpack_require__(19));
__export(__webpack_require__(22));
__export(__webpack_require__(25));
__export(__webpack_require__(27));
__export(__webpack_require__(11));
__export(__webpack_require__(12));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "app-main nav {\n  -webkit-app-region: drag; }\n  app-main nav button, app-main nav li {\n    -webkit-app-region: no-drag; }\n  app-main nav.navbar {\n    border-radius: 0; }\n\napp-main hr {\n  margin-top: 0; }\n\napp-main .header-btn {\n  margin-top: 20px; }\n\nitem-list .glyphicon {\n  cursor: pointer; }\n\nitem-list .add-item-input input, item-list .add-item-input .btn {\n  border-radius: 0; }\n\nitem-list .item-table-container {\n  margin-top: -1px;\n  max-height: 500px;\n  overflow: auto; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n      <a class=\"navbar-brand\" href=\"#\">Brand</a>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n            <a ui-sref=\"people\" >People</a>\r\n        </li>\r\n        <li>\r\n            <a ui-sref=\"teams\">Teams</a>\r\n        </li>\r\n        <li>\r\n            <a ui-sref=\"draw\">Draw</a>\r\n        </li>\r\n      </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <ui-view></ui-view>\r\n</div>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <button class=\"btn btn-primary pull-right header-btn\" data-ng-click=\"$ctrl.drawTeams()\">Draw Teams</button>\r\n        <h1>Draw</h1>\r\n        <hr>\r\n    </div>    \r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h3>Previous Draws</h3>\r\n        <hr>\r\n        <p data-ng-if=\"$ctrl.previousDraws.length === 0\">No previous draws available</p>\r\n    </div>\r\n</div>\r\n<div class=\"row\" data-ng-if=\"$ctrl.drawResult.length > 0\">\r\n    <div class=\"col-sm-6\">\r\n        <h3>New Draw</h3>\r\n        <hr>\r\n        <table class=\"table table-condensed tabel-bordered\">\r\n            <tr data-ng-repeat=\"result in $ctrl.drawResult track by $index\">\r\n                <td>{{result.person}}</td>\r\n                <td>{{result.team}}</td>\r\n            </tr>\r\n        </table>\r\n        <button class=\"btn btn-small btn-default pull-right\">Save Draw</button>\r\n    </div>\r\n</div>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<form name=\"$ctrl.newItemForm\">\r\n    <div class=\"input-group add-item-input\">\r\n        <input type=\"text\" class=\"form-control\" name=\"newItem\" placeholder=\"Add item...\" data-ng-model=\"$ctrl.newItem\" required />\r\n        <span class=\"input-group-btn\">\r\n            <input class=\"btn btn-default\" type=\"submit\" data-ng-click=\"$ctrl.addItem()\" value=\"Add\" />\r\n        </span>\r\n    </div>\r\n</form>\r\n<div class=\"item-table-container\">\r\n    <table class=\"table table-condensed table-bordered\">\r\n        <tbody>\r\n            <tr data-ng-repeat=\"item in $ctrl.items track by $index\">\r\n                <td>\r\n                    <span>{{item}}</span>\r\n                    <span class=\"glyphicon glyphicon-remove pull-right\" aria-hidden=\"true\" data-ng-click=\"$ctrl.removeItem($index)\"></span>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h1>People</h1>\r\n        <hr>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <item-list items=\"$ctrl.people\" on-update=\"$ctrl.updatePeople(items)\"></item-list>\r\n    </div>\r\n</div>"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <button class=\"btn btn-primary pull-right header-btn\" data-ng-click=\"$ctrl.importTeams()\">Import Teams</button>\r\n        <h1>Teams</h1>\r\n        <hr>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <div data-ng-if=\"$ctrl.teams.length === 0\">\r\n            <p>0 Teams currently stored</p>\r\n        </div>\r\n        <item-list items=\"$ctrl.teams\" on-update=\"$ctrl.updateTeams(items)\"></item-list>\r\n    </div>\r\n</div>"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var app_ctrl_1 = __webpack_require__(13);
var AppCmp = (function () {
    function AppCmp() {
        this.controller = app_ctrl_1.AppCtrl;
        this.template = __webpack_require__(5);
    }
    return AppCmp;
}());
exports.AppCmp = AppCmp;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AppConfig = (function () {
    function AppConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("draw", {
            url: "/draw",
            template: "<draw></draw>"
        })
            .state("people", {
            url: "/people",
            template: "<people></people>"
        })
            .state("teams", {
            url: "/teams",
            template: "<teams></teams>"
        });
        $urlRouterProvider.otherwise("/draw");
    }
    return AppConfig;
}());
AppConfig.$inject = [
    "$stateProvider",
    "$urlRouterProvider"
];
exports.AppConfig = AppConfig;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AppCtrl = (function () {
    function AppCtrl() {
    }
    AppCtrl.prototype.$onInit = function () {
        this.message = "Hello World!";
    };
    return AppCtrl;
}());
exports.AppCtrl = AppCtrl;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var draw_ctrl_1 = __webpack_require__(15);
var DrawCmp = (function () {
    function DrawCmp() {
        this.controller = draw_ctrl_1.DrawCtrl;
        this.template = __webpack_require__(6);
    }
    return DrawCmp;
}());
exports.DrawCmp = DrawCmp;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DrawCtrl = (function () {
    function DrawCtrl(drawService) {
        this.drawService = drawService;
    }
    DrawCtrl.prototype.$onInit = function () {
        this.drawResult = [];
        this.previousDraws = [];
    };
    DrawCtrl.prototype.drawTeams = function () {
        this.drawResult = this.drawService.draw();
    };
    return DrawCtrl;
}());
DrawCtrl.$inject = [
    "drawService"
];
exports.DrawCtrl = DrawCtrl;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(14));
__export(__webpack_require__(18));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var drawnEntry_model_1 = __webpack_require__(0);
var DrawService = (function () {
    function DrawService(storageService) {
        this.storageService = storageService;
    }
    DrawService.prototype.draw = function () {
        var teams = this.storageService.get("teams");
        var people = this.storageService.get("people");
        var drawnEntries = [];
        for (var i = people.length - 1; i >= 0; i--) {
            var randIndex = Math.floor(Math.random() * teams.length);
            var selectedTeam = teams[randIndex];
            drawnEntries.push(new drawnEntry_model_1.DrawnEntry(selectedTeam, people[i]));
            people.splice(i, 1);
            teams.splice(randIndex, 1);
        }
        return drawnEntries;
    };
    return DrawService;
}());
DrawService.$inject = [
    "storageService"
];
exports.DrawService = DrawService;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(17));
__export(__webpack_require__(0));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(20));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var item_list_ctrl_1 = __webpack_require__(21);
var ItemListCmp = (function () {
    function ItemListCmp() {
        this.controller = item_list_ctrl_1.ItemListCtrl;
        this.template = __webpack_require__(7);
        this.bindings = {
            items: "<",
            onUpdate: "&"
        };
    }
    return ItemListCmp;
}());
exports.ItemListCmp = ItemListCmp;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ItemListCtrl = (function () {
    function ItemListCtrl() {
    }
    ItemListCtrl.prototype.$onInit = function () {
        this.newItem = "";
    };
    ItemListCtrl.prototype.addItem = function () {
        if (this.newItemForm.$valid) {
            this.items.push(this.newItem);
            this.onUpdate({ items: this.items });
            this.newItem = "";
        }
    };
    ItemListCtrl.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
        this.onUpdate({ items: this.items });
    };
    return ItemListCtrl;
}());
exports.ItemListCtrl = ItemListCtrl;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(23));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var people_ctrl_1 = __webpack_require__(24);
var PeopleCmp = (function () {
    function PeopleCmp() {
        this.controller = people_ctrl_1.PeopleCtrl;
        this.template = __webpack_require__(8);
    }
    return PeopleCmp;
}());
exports.PeopleCmp = PeopleCmp;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PeopleCtrl = (function () {
    function PeopleCtrl(storageService) {
        this.storageService = storageService;
    }
    PeopleCtrl.prototype.$onInit = function () {
        this.people = this.storageService.get("people") || [];
    };
    PeopleCtrl.prototype.updatePeople = function (people) {
        this.people = people;
        this.storageService.set("people", this.people);
        console.log("People updated!");
    };
    return PeopleCtrl;
}());
PeopleCtrl.$inject = [
    "storageService"
];
exports.PeopleCtrl = PeopleCtrl;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(26));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var StorageService = (function () {
    function StorageService($window) {
        this.$window = $window;
    }
    StorageService.prototype.get = function (key) {
        return JSON.parse(this.$window.localStorage.getItem(key));
    };
    StorageService.prototype.set = function (key, data) {
        this.$window.localStorage.setItem(key, JSON.stringify(data));
    };
    StorageService.prototype.delete = function (key) {
        this.$window.localStorage.removeItem(key);
    };
    return StorageService;
}());
StorageService.$inject = [
    "$window"
];
exports.StorageService = StorageService;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(29));
__export(__webpack_require__(28));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TeamsService = (function () {
    function TeamsService($http) {
        this.$http = $http;
        this.apiKey = "4XbCMOTQ9Tmsh8kS89UmoDhBGaDVp1RJt8QjsnKZroywZnw3pt";
        this.baseUrl = "https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1";
        this.headers = {
            "Accept": "application/json",
            "X-Mashape-Authorization": this.apiKey
        };
    }
    TeamsService.prototype.getTeams = function () {
        return this.$http.get(this.baseUrl + "/leagues/premier-league/seasons/16-17/teams", {
            headers: this.headers
        })
            .then(function (res) { return res.data.data.teams.map(function (t) { return t.name; }); });
    };
    return TeamsService;
}());
TeamsService.$inject = [
    "$http"
];
exports.TeamsService = TeamsService;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var teams_ctrl_1 = __webpack_require__(30);
var TeamsCmp = (function () {
    function TeamsCmp() {
        this.controller = teams_ctrl_1.TeamsCtrl;
        this.template = __webpack_require__(9);
    }
    return TeamsCmp;
}());
exports.TeamsCmp = TeamsCmp;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TeamsCtrl = (function () {
    function TeamsCtrl(storageService, teamsService) {
        this.storageService = storageService;
        this.teamsService = teamsService;
    }
    TeamsCtrl.prototype.$onInit = function () {
        this.teams = this.storageService.get("teams") || [];
    };
    TeamsCtrl.prototype.updateTeams = function (teams) {
        this.teams = teams;
        this.storageService.set("teams", this.teams);
        console.log("Teams updated!");
    };
    TeamsCtrl.prototype.importTeams = function () {
        var _this = this;
        this.teamsService.getTeams()
            .then(function (teams) {
            _this.updateTeams(teams);
        });
    };
    return TeamsCtrl;
}());
TeamsCtrl.$inject = [
    "storageService",
    "teamsService"
];
exports.TeamsCtrl = TeamsCtrl;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var app = __webpack_require__(2);
angular
    .module("electronTest", [
    "ui.router"
])
    .run(function ($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
})
    .config(app.AppConfig)
    .component("appMain", new app.AppCmp())
    .component("draw", new app.DrawCmp())
    .component("itemList", new app.ItemListCmp())
    .component("people", new app.PeopleCmp())
    .component("teams", new app.TeamsCmp())
    .service("drawService", app.DrawService)
    .service("storageService", app.StorageService)
    .service("teamsService", app.TeamsService);
// Include CSS with Bundle
__webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
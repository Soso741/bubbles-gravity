/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((module) => {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ }),

/***/ "./src/public/mouse.gif":
/*!******************************!*\
  !*** ./src/public/mouse.gif ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/images/mouse.gif");

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_mouse_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/mouse.gif */ "./src/public/mouse.gif");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
var gravity = 1;
var friction = 0.99;
var objects = [];
var initiateTutorial = false;
var tutorialDiv = null;

// Event Listeners
addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  if (objects.length < 600) {
    init();
  }
});
addEventListener("click", function () {
  objects = [];
  init();
});
addEventListener("click", function () {
  if (tutorialDiv) {
    tutorialDiv.classList.remove("tutorialActive");
    setTimeout(function () {
      tutorialDiv.style.visibility = "hidden"; // Ensures it's unclickable
    }, 400);
  }
});
function showTutorial() {
  // Ensure we create it only once ,Prevents duplicate tutorial creation
  var tutorialText = "<h1 class=\"titleText\">Click on screen to reset</h1>";
  tutorialDiv = document.createElement("div");
  var animationCont = document.createElement("div");
  var mouseGIF = document.createElement("img");
  tutorialDiv.classList.add("tutorialBg");
  animationCont.classList.add("animationCont");
  tutorialDiv.innerHTML = tutorialText;
  mouseGIF.src = _public_mouse_gif__WEBPACK_IMPORTED_MODULE_1__["default"];
  mouseGIF.alt = "Mouse clicking tutorial";
  mouseGIF.classList.add("mouseGIF");
  document.body.appendChild(tutorialDiv);
  tutorialDiv.appendChild(animationCont);
  animationCont.appendChild(mouseGIF);
  setTimeout(function () {
    tutorialDiv.classList.add("tutorialActive");
  }, 500);
}

// Objects
var Circle = /*#__PURE__*/function () {
  function Circle(x, y, dx, dy, r, color) {
    _classCallCheck(this, Circle);
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.color = color;
  }
  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      //this.y + this.r >= screenHeight
      if (this.y + this.r + this.dy >= innerHeight || this.y - this.r <= 0) {
        this.dy = -this.dy * friction;
        this.dx *= friction;
        if (Math.abs(this.dy) < 0.5) this.dy = 0;
        if (Math.abs(this.dx) < 0.5) this.dx = 0;
      } else {
        this.dy += gravity;
      }
      if (this.x + this.r + this.dx >= innerWidth || this.x - this.r < 0) {
        this.dx = -this.dx;
        this.dy = this.dy * friction;
      }
      this.x += this.dx;
      this.y += this.dy;
    }
  }]);
  return Circle;
}(); // Implementation
function init() {
  for (var i = 0; i < 500; i++) {
    var randRadius = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(8, 40);
    objects.push(new Circle((0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(randRadius, innerWidth - randRadius), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(randRadius * 2, innerHeight - randRadius), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(-5, 5), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(-5, 5), randRadius, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomColor)(colors)));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  objects.forEach(function (elm) {
    elm.draw();
    elm.update();
    if (!objects.some(function (circle) {
      return circle.dy;
    }) > 0 && !initiateTutorial) {
      initiateTutorial = true;
      showTutorial();
    }
  });
}
init();
animate();
})();

/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map
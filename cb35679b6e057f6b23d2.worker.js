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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	if (typeof window === 'undefined') {
	  console.log('yay! inside the worker scope 😎');
	  console.log('current context is -- ', self);
	
	  onmessage = function onmessage(_ref) {
	    var data = _ref.data;
	    var type = data.type,
	        count = data.count;
	
	
	    switch (type) {
	      case 'Inc':
	        console.log('inc message, new count is ' + (count + 1));
	        postMessage({ count: count + 1 });
	        return;
	      case 'Dec':
	        console.log('dec message, new count is ' + (count - 1));
	
	        if (count > 0) {
	          postMessage({ count: count - 1 });
	        }
	
	        return;
	      default:
	        console.log('unknown message of type "' + type + '"');
	        return;
	    }
	  };
	}

/***/ })
/******/ ]);
//# sourceMappingURL=cb35679b6e057f6b23d2.worker.js.map
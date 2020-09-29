(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stackedit_js_1 = __importDefault(require("stackedit-js"));
function main() {
    const ta = document.querySelector("textarea");
    const stackedit = new stackedit_js_1.default();
    stackedit.openFile({
        name: "TestFileName",
        content: {
            text: ta === null || ta === void 0 ? void 0 : ta.value,
        },
    });
    // Listen to StackEdit events and apply the changes to the textarea.
    stackedit.on("fileChange", (file) => {
        if (ta) {
            ta.value = file.content.text;
        }
    });
}
main();

},{"stackedit-js":2}],2:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Stackedit", [], factory);
	else if(typeof exports === 'object')
		exports["Stackedit"] = factory();
	else
		root["Stackedit"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var styleContent = '\n.stackedit-no-overflow {\n  overflow: hidden;\n}\n\n.stackedit-container {\n  background-color: rgba(160, 160, 160, 0.5);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n}\n\n.stackedit-hidden-container {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  left: -99px;\n}\n\n.stackedit-iframe-container {\n  background-color: #fff;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 98%;\n  width: 98%;\n  max-width: 1280px;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.stackedit-iframe {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border: 0;\n  border-radius: 2px;\n}\n\n@media (max-width: 740px) {\n  .stackedit-iframe-container {\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n  }\n\n  .stackedit-iframe {\n    border-radius: 0;\n  }\n}\n\n.stackedit-close-button {\n  position: absolute !important;\n  box-sizing: border-box !important;\n  width: 38px !important;\n  height: 36px !important;\n  margin: 4px !important;\n  padding: 0 4px !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  text-decoration: none !important;\n}\n';

var _createStyle = function createStyle() {
  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.innerHTML = styleContent;
  document.head.appendChild(styleEl);
  _createStyle = function createStyle() {}; // Create style only once
};

var containerHtml = '\n<div class="stackedit-iframe-container">\n  <iframe class="stackedit-iframe"></iframe>\n  <a href="javascript:void(0)" class="stackedit-close-button" title="Close">\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">\n      <path fill="#777" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />\n    </svg>\n  </a>\n</div>\n';

var origin = window.location.protocol + '//' + window.location.host;
var urlParser = document.createElement('a');

var Stackedit = function () {
  function Stackedit() {
    var _this = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Stackedit);

    this.$options = {
      url: 'https://stackedit.io/app'
    };
    this.$listeners = {};

    // Override options
    Object.keys(opts).forEach(function (key) {
      _this.$options[key] = opts[key];
    });
  }

  // For emitting events


  _createClass(Stackedit, [{
    key: '$trigger',
    value: function $trigger(type, payload) {
      var listeners = this.$listeners[type] || [];
      // Use setTimeout as a way to ignore errors
      listeners.forEach(function (listener) {
        return setTimeout(function () {
          return listener(payload);
        }, 1);
      });
    }
  }, {
    key: 'on',
    value: function on(type, listener) {
      var listeners = this.$listeners[type] || [];
      listeners.push(listener);
      this.$listeners[type] = listeners;
    }
  }, {
    key: 'off',
    value: function off(type, listener) {
      var listeners = this.$listeners[type] || [];
      var idx = listeners.indexOf(listener);
      if (idx >= 0) {
        listeners.splice(idx, 1);
        if (listeners.length) {
          this.$listeners[type] = listeners;
        } else {
          delete this.$listeners[type];
        }
      }
    }
  }, {
    key: 'openFile',
    value: function openFile() {
      var _this2 = this;

      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Close before opening a new iframe
      this.close();

      // Make StackEdit URL
      urlParser.href = this.$options.url;
      this.$origin = urlParser.protocol + '//' + urlParser.host; // Save StackEdit origin
      var content = file.content || {};
      var params = {
        origin: origin,
        fileName: file.name,
        contentText: content.text,
        contentProperties: !content.yamlProperties && content.properties ? JSON.stringify(content.properties) // Use JSON serialized properties as YAML properties
        : content.yamlProperties,
        silent: silent
      };
      var serializedParams = Object.keys(params).map(function (key) {
        return key + '=' + encodeURIComponent(params[key] || '');
      }).join('&');
      urlParser.hash = '#' + serializedParams;

      // Make the iframe
      _createStyle();
      this.$containerEl = document.createElement('div');
      this.$containerEl.className = silent ? 'stackedit-hidden-container' : 'stackedit-container';
      this.$containerEl.innerHTML = containerHtml;
      document.body.appendChild(this.$containerEl);

      // Load StackEdit in the iframe
      var iframeEl = this.$containerEl.querySelector('iframe');
      iframeEl.src = urlParser.href;

      // Add close button handler
      var closeButton = this.$containerEl.querySelector('a');
      closeButton.addEventListener('click', function () {
        return _this2.close();
      });

      // Add message handler
      this.$messageHandler = function (event) {
        if (event.origin === _this2.$origin && event.source === iframeEl.contentWindow) {
          switch (event.data.type) {
            case 'ready':
              // StackEdit has its own one close button
              closeButton.parentNode.removeChild(closeButton);
              break;
            case 'fileChange':
              // Trigger fileChange event
              _this2.$trigger('fileChange', event.data.payload);
              if (silent) {
                _this2.close();
              }
              break;
            case 'close':
            default:
              _this2.close();
          }
        }
      };
      window.addEventListener('message', this.$messageHandler);

      if (!silent) {
        // Remove body scrollbars
        document.body.className += ' stackedit-no-overflow';
      }
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.$messageHandler) {
        // Clean everything
        window.removeEventListener('message', this.$messageHandler);
        document.body.removeChild(this.$containerEl);

        // Release memory
        this.$messageHandler = null;
        this.$containerEl = null;

        // Restore body scrollbars
        document.body.className = document.body.className.replace(/\sstackedit-no-overflow\b/, '');

        // Trigger close event
        this.$trigger('close');
      }
    }
  }]);

  return Stackedit;
}();

exports.default = Stackedit;
module.exports = exports['default'];

/***/ })
/******/ ]);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhZG1pbi9zcmMvbWFpbi50cyIsIm5vZGVfbW9kdWxlcy9zdGFja2VkaXQtanMvZG9jcy9saWIvc3RhY2tlZGl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQSxnRUFBcUM7QUFFckMsU0FBUyxJQUFJO0lBQ1gsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxNQUFNLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztJQUVsQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pCLElBQUksRUFBRSxjQUFjO1FBQ3BCLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsS0FBSztTQUNoQjtLQUNGLENBQUMsQ0FBQztJQUVILG9FQUFvRTtJQUNwRSxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO1FBQ3ZDLElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUM5QjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDOzs7QUNyQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBTdGFja2VkaXQgZnJvbSBcInN0YWNrZWRpdC1qc1wiO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCB0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3Qgc3RhY2tlZGl0ID0gbmV3IFN0YWNrZWRpdCgpO1xuXG4gIHN0YWNrZWRpdC5vcGVuRmlsZSh7XG4gICAgbmFtZTogXCJUZXN0RmlsZU5hbWVcIiwgLy8gd2l0aCBhbiBvcHRpb25hbCBmaWxlbmFtZVxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHRleHQ6IHRhPy52YWx1ZSwgLy8gYW5kIHRoZSBNYXJrZG93biBjb250ZW50LlxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIExpc3RlbiB0byBTdGFja0VkaXQgZXZlbnRzIGFuZCBhcHBseSB0aGUgY2hhbmdlcyB0byB0aGUgdGV4dGFyZWEuXG4gIHN0YWNrZWRpdC5vbihcImZpbGVDaGFuZ2VcIiwgKGZpbGU6IGFueSkgPT4ge1xuICAgIGlmICh0YSkge1xuICAgICAgdGEudmFsdWUgPSBmaWxlLmNvbnRlbnQudGV4dDtcbiAgICB9XG4gIH0pO1xufVxuXG5tYWluKCk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN0YWNrZWRpdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdGFja2VkaXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3RhY2tlZGl0XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHN0eWxlQ29udGVudCA9ICdcXG4uc3RhY2tlZGl0LW5vLW92ZXJmbG93IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zdGFja2VkaXQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC41KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbi5zdGFja2VkaXQtaGlkZGVuLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGxlZnQ6IC05OXB4O1xcbn1cXG5cXG4uc3RhY2tlZGl0LWlmcmFtZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogOTglO1xcbiAgd2lkdGg6IDk4JTtcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnN0YWNrZWRpdC1pZnJhbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xcbiAgLnN0YWNrZWRpdC1pZnJhbWUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gIH1cXG5cXG4gIC5zdGFja2VkaXQtaWZyYW1lIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gIH1cXG59XFxuXFxuLnN0YWNrZWRpdC1jbG9zZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMzhweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDRweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCA0cHggIWltcG9ydGFudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbic7XG5cbnZhciBfY3JlYXRlU3R5bGUgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZSgpIHtcbiAgdmFyIHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZUVsLnR5cGUgPSAndGV4dC9jc3MnO1xuICBzdHlsZUVsLmlubmVySFRNTCA9IHN0eWxlQ29udGVudDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgX2NyZWF0ZVN0eWxlID0gZnVuY3Rpb24gY3JlYXRlU3R5bGUoKSB7fTsgLy8gQ3JlYXRlIHN0eWxlIG9ubHkgb25jZVxufTtcblxudmFyIGNvbnRhaW5lckh0bWwgPSAnXFxuPGRpdiBjbGFzcz1cInN0YWNrZWRpdC1pZnJhbWUtY29udGFpbmVyXCI+XFxuICA8aWZyYW1lIGNsYXNzPVwic3RhY2tlZGl0LWlmcmFtZVwiPjwvaWZyYW1lPlxcbiAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwic3RhY2tlZGl0LWNsb3NlLWJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIj5cXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cXG4gICAgICA8cGF0aCBmaWxsPVwiIzc3N1wiIGQ9XCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXCIgLz5cXG4gICAgPC9zdmc+XFxuICA8L2E+XFxuPC9kaXY+XFxuJztcblxudmFyIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcbnZhciB1cmxQYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbnZhciBTdGFja2VkaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YWNrZWRpdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YWNrZWRpdCk7XG5cbiAgICB0aGlzLiRvcHRpb25zID0ge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9zdGFja2VkaXQuaW8vYXBwJ1xuICAgIH07XG4gICAgdGhpcy4kbGlzdGVuZXJzID0ge307XG5cbiAgICAvLyBPdmVycmlkZSBvcHRpb25zXG4gICAgT2JqZWN0LmtleXMob3B0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfdGhpcy4kb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRm9yIGVtaXR0aW5nIGV2ZW50c1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFN0YWNrZWRpdCwgW3tcbiAgICBrZXk6ICckdHJpZ2dlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICR0cmlnZ2VyKHR5cGUsIHBheWxvYWQpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLiRsaXN0ZW5lcnNbdHlwZV0gfHwgW107XG4gICAgICAvLyBVc2Ugc2V0VGltZW91dCBhcyBhIHdheSB0byBpZ25vcmUgZXJyb3JzXG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcihwYXlsb2FkKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy4kbGlzdGVuZXJzW3R5cGVdIHx8IFtdO1xuICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgdGhpcy4kbGlzdGVuZXJzW3R5cGVdID0gbGlzdGVuZXJzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29mZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuJGxpc3RlbmVyc1t0eXBlXSB8fCBbXTtcbiAgICAgIHZhciBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuJGxpc3RlbmVyc1t0eXBlXSA9IGxpc3RlbmVycztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy4kbGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3BlbkZpbGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuRmlsZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZmlsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICB2YXIgc2lsZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgLy8gQ2xvc2UgYmVmb3JlIG9wZW5pbmcgYSBuZXcgaWZyYW1lXG4gICAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICAgIC8vIE1ha2UgU3RhY2tFZGl0IFVSTFxuICAgICAgdXJsUGFyc2VyLmhyZWYgPSB0aGlzLiRvcHRpb25zLnVybDtcbiAgICAgIHRoaXMuJG9yaWdpbiA9IHVybFBhcnNlci5wcm90b2NvbCArICcvLycgKyB1cmxQYXJzZXIuaG9zdDsgLy8gU2F2ZSBTdGFja0VkaXQgb3JpZ2luXG4gICAgICB2YXIgY29udGVudCA9IGZpbGUuY29udGVudCB8fCB7fTtcbiAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgIG9yaWdpbjogb3JpZ2luLFxuICAgICAgICBmaWxlTmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBjb250ZW50VGV4dDogY29udGVudC50ZXh0LFxuICAgICAgICBjb250ZW50UHJvcGVydGllczogIWNvbnRlbnQueWFtbFByb3BlcnRpZXMgJiYgY29udGVudC5wcm9wZXJ0aWVzID8gSlNPTi5zdHJpbmdpZnkoY29udGVudC5wcm9wZXJ0aWVzKSAvLyBVc2UgSlNPTiBzZXJpYWxpemVkIHByb3BlcnRpZXMgYXMgWUFNTCBwcm9wZXJ0aWVzXG4gICAgICAgIDogY29udGVudC55YW1sUHJvcGVydGllcyxcbiAgICAgICAgc2lsZW50OiBzaWxlbnRcbiAgICAgIH07XG4gICAgICB2YXIgc2VyaWFsaXplZFBhcmFtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSB8fCAnJyk7XG4gICAgICB9KS5qb2luKCcmJyk7XG4gICAgICB1cmxQYXJzZXIuaGFzaCA9ICcjJyArIHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgICAgIC8vIE1ha2UgdGhlIGlmcmFtZVxuICAgICAgX2NyZWF0ZVN0eWxlKCk7XG4gICAgICB0aGlzLiRjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy4kY29udGFpbmVyRWwuY2xhc3NOYW1lID0gc2lsZW50ID8gJ3N0YWNrZWRpdC1oaWRkZW4tY29udGFpbmVyJyA6ICdzdGFja2VkaXQtY29udGFpbmVyJztcbiAgICAgIHRoaXMuJGNvbnRhaW5lckVsLmlubmVySFRNTCA9IGNvbnRhaW5lckh0bWw7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuJGNvbnRhaW5lckVsKTtcblxuICAgICAgLy8gTG9hZCBTdGFja0VkaXQgaW4gdGhlIGlmcmFtZVxuICAgICAgdmFyIGlmcmFtZUVsID0gdGhpcy4kY29udGFpbmVyRWwucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgICBpZnJhbWVFbC5zcmMgPSB1cmxQYXJzZXIuaHJlZjtcblxuICAgICAgLy8gQWRkIGNsb3NlIGJ1dHRvbiBoYW5kbGVyXG4gICAgICB2YXIgY2xvc2VCdXR0b24gPSB0aGlzLiRjb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jbG9zZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBtZXNzYWdlIGhhbmRsZXJcbiAgICAgIHRoaXMuJG1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5vcmlnaW4gPT09IF90aGlzMi4kb3JpZ2luICYmIGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lRWwuY29udGVudFdpbmRvdykge1xuICAgICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWFkeSc6XG4gICAgICAgICAgICAgIC8vIFN0YWNrRWRpdCBoYXMgaXRzIG93biBvbmUgY2xvc2UgYnV0dG9uXG4gICAgICAgICAgICAgIGNsb3NlQnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZpbGVDaGFuZ2UnOlxuICAgICAgICAgICAgICAvLyBUcmlnZ2VyIGZpbGVDaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgX3RoaXMyLiR0cmlnZ2VyKCdmaWxlQ2hhbmdlJywgZXZlbnQuZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5jbG9zZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgX3RoaXMyLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLiRtZXNzYWdlSGFuZGxlcik7XG5cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIC8vIFJlbW92ZSBib2R5IHNjcm9sbGJhcnNcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBzdGFja2VkaXQtbm8tb3ZlcmZsb3cnO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICBpZiAodGhpcy4kbWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgLy8gQ2xlYW4gZXZlcnl0aGluZ1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuJG1lc3NhZ2VIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLiRjb250YWluZXJFbCk7XG5cbiAgICAgICAgLy8gUmVsZWFzZSBtZW1vcnlcbiAgICAgICAgdGhpcy4kbWVzc2FnZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLiRjb250YWluZXJFbCA9IG51bGw7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBib2R5IHNjcm9sbGJhcnNcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC9cXHNzdGFja2VkaXQtbm8tb3ZlcmZsb3dcXGIvLCAnJyk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBjbG9zZSBldmVudFxuICAgICAgICB0aGlzLiR0cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFja2VkaXQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0YWNrZWRpdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YWNrZWRpdC5qcy5tYXAiXX0=

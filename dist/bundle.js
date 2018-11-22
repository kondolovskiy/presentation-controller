/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nosleep.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/nosleep.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mediaFile = __webpack_require__(/*! ./media.js */ \"./node_modules/nosleep.js/src/media.js\")\n\n// Detect iOS browsers < version 10\nconst oldIOS = typeof navigator !== 'undefined' && parseFloat(\n  ('' + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])\n    .replace('undefined', '3_2').replace('_', '.').replace('_', '')\n) < 10 && !window.MSStream\n\nclass NoSleep {\n  constructor () {\n    if (oldIOS) {\n      this.noSleepTimer = null\n    } else {\n      // Set up no sleep video element\n      this.noSleepVideo = document.createElement('video')\n\n      this.noSleepVideo.setAttribute('playsinline', '')\n      this.noSleepVideo.setAttribute('src', mediaFile)\n\n      this.noSleepVideo.addEventListener('timeupdate', function (e) {\n        if (this.noSleepVideo.currentTime > 0.5) {\n          this.noSleepVideo.currentTime = Math.random()\n        }\n      }.bind(this))\n    }\n  }\n\n  enable () {\n    if (oldIOS) {\n      this.disable()\n      this.noSleepTimer = window.setInterval(function () {\n        window.location.href = '/'\n        window.setTimeout(window.stop, 0)\n      }, 15000)\n    } else {\n      this.noSleepVideo.play()\n    }\n  }\n\n  disable () {\n    if (oldIOS) {\n      if (this.noSleepTimer) {\n        window.clearInterval(this.noSleepTimer)\n        this.noSleepTimer = null\n      }\n    } else {\n      this.noSleepVideo.pause()\n    }\n  }\n};\n\nmodule.exports = NoSleep\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbm9zbGVlcC5qcy9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9zbGVlcC5qcy9zcmMvaW5kZXguanM/NjdiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZWRpYUZpbGUgPSByZXF1aXJlKCcuL21lZGlhLmpzJylcblxuLy8gRGV0ZWN0IGlPUyBicm93c2VycyA8IHZlcnNpb24gMTBcbmNvbnN0IG9sZElPUyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHBhcnNlRmxvYXQoXG4gICgnJyArICgvQ1BVLipPUyAoWzAtOV9dezMsNH0pWzAtOV9dezAsMX18KENQVSBsaWtlKS4qQXBwbGVXZWJLaXQuKk1vYmlsZS9pLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWzAsICcnXSlbMV0pXG4gICAgLnJlcGxhY2UoJ3VuZGVmaW5lZCcsICczXzInKS5yZXBsYWNlKCdfJywgJy4nKS5yZXBsYWNlKCdfJywgJycpXG4pIDwgMTAgJiYgIXdpbmRvdy5NU1N0cmVhbVxuXG5jbGFzcyBOb1NsZWVwIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmIChvbGRJT1MpIHtcbiAgICAgIHRoaXMubm9TbGVlcFRpbWVyID0gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgdXAgbm8gc2xlZXAgdmlkZW8gZWxlbWVudFxuICAgICAgdGhpcy5ub1NsZWVwVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpXG5cbiAgICAgIHRoaXMubm9TbGVlcFZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAnJylcbiAgICAgIHRoaXMubm9TbGVlcFZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgbWVkaWFGaWxlKVxuXG4gICAgICB0aGlzLm5vU2xlZXBWaWRlby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMubm9TbGVlcFZpZGVvLmN1cnJlbnRUaW1lID4gMC41KSB7XG4gICAgICAgICAgdGhpcy5ub1NsZWVwVmlkZW8uY3VycmVudFRpbWUgPSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSlcbiAgICB9XG4gIH1cblxuICBlbmFibGUgKCkge1xuICAgIGlmIChvbGRJT1MpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpXG4gICAgICB0aGlzLm5vU2xlZXBUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5zdG9wLCAwKVxuICAgICAgfSwgMTUwMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9TbGVlcFZpZGVvLnBsYXkoKVxuICAgIH1cbiAgfVxuXG4gIGRpc2FibGUgKCkge1xuICAgIGlmIChvbGRJT1MpIHtcbiAgICAgIGlmICh0aGlzLm5vU2xlZXBUaW1lcikge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm5vU2xlZXBUaW1lcilcbiAgICAgICAgdGhpcy5ub1NsZWVwVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9TbGVlcFZpZGVvLnBhdXNlKClcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTm9TbGVlcFxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/nosleep.js/src/index.js\n");

/***/ }),

/***/ "./node_modules/nosleep.js/src/media.js":
/*!**********************************************!*\
  !*** ./node_modules/nosleep.js/src/media.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = 'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQAD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'\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbm9zbGVlcC5qcy9zcmMvbWVkaWEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9zbGVlcC5qcy9zcmMvbWVkaWEuanM/MTk5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9ICdkYXRhOnZpZGVvL21wNDtiYXNlNjQsQUFBQUlHWjBlWEJ0Y0RReUFBQUNBR2x6YjIxcGMyOHlZWFpqTVcxd05ERUFBQUFJWm5KbFpRQUFDS0J0WkdGMEFBQUM4d1lGLy8vdjNFWHB2ZWJaU0xlV0xOZ2cyU1B1NzNneU5qUWdMU0JqYjNKbElERTBNaUJ5TWpRM09TQmtaRGM1WVRZeElDMGdTQzR5TmpRdlRWQkZSeTAwSUVGV1F5QmpiMlJsWXlBdElFTnZjSGxzWldaMElESXdNRE10TWpBeE5DQXRJR2gwZEhBNkx5OTNkM2N1ZG1sa1pXOXNZVzR1YjNKbkwzZ3lOalF1YUhSdGJDQXRJRzl3ZEdsdmJuTTZJR05oWW1GalBURWdjbVZtUFRFZ1pHVmliRzlqYXoweE9qQTZNQ0JoYm1Gc2VYTmxQVEI0TVRvd2VERXhNU0J0WlQxb1pYZ2djM1ZpYldVOU1pQndjM2s5TVNCd2MzbGZjbVE5TVM0d01Eb3dMakF3SUcxcGVHVmtYM0psWmowd0lHMWxYM0poYm1kbFBURTJJR05vY205dFlWOXRaVDB4SUhSeVpXeHNhWE05TUNBNGVEaGtZM1E5TUNCamNXMDlNQ0JrWldGa2VtOXVaVDB5TVN3eE1TQm1ZWE4wWDNCemEybHdQVEVnWTJoeWIyMWhYM0Z3WDI5bVpuTmxkRDB3SUhSb2NtVmhaSE05TmlCc2IyOXJZV2hsWVdSZmRHaHlaV0ZrY3oweElITnNhV05sWkY5MGFISmxZV1J6UFRBZ2JuSTlNQ0JrWldOcGJXRjBaVDB4SUdsdWRHVnliR0ZqWldROU1DQmliSFZ5WVhsZlkyOXRjR0YwUFRBZ1kyOXVjM1J5WVdsdVpXUmZhVzUwY21FOU1DQmlabkpoYldWelBUTWdZbDl3ZVhKaGJXbGtQVElnWWw5aFpHRndkRDB4SUdKZlltbGhjejB3SUdScGNtVmpkRDB4SUhkbGFXZG9kR0k5TVNCdmNHVnVYMmR2Y0Qwd0lIZGxhV2RvZEhBOU1TQnJaWGxwYm5ROU16QXdJR3RsZVdsdWRGOXRhVzQ5TXpBZ2MyTmxibVZqZFhROU5EQWdhVzUwY21GZmNtVm1jbVZ6YUQwd0lISmpYMnh2YjJ0aGFHVmhaRDB4TUNCeVl6MWpjbVlnYldKMGNtVmxQVEVnWTNKbVBUSXdMakFnY1dOdmJYQTlNQzQyTUNCeGNHMXBiajB3SUhGd2JXRjRQVFk1SUhGd2MzUmxjRDAwSUhaaWRsOXRZWGh5WVhSbFBUSXdNREF3SUhaaWRsOWlkV1p6YVhwbFBUSTFNREF3SUdOeVpsOXRZWGc5TUM0d0lHNWhiRjlvY21ROWJtOXVaU0JtYVd4c1pYSTlNQ0JwY0Y5eVlYUnBiejB4TGpRd0lHRnhQVEU2TVM0d01BQ0FBQUFBT1dXSWhBQTMvL3ArQzd2OHRERFNUamY5N3c1NWkzU2JSUE80WlkraGtqRDVoYmtBa0wzenBKNmgvTFIxQ0FBQnpnQjFrcXF6VW9ybGhRQUFBQXhCbWlRWWhuLytxWllBRExnQUFBQUpRWjVDUWhYL0FBajVJUUFEUUdnY0lRQURRR2djQUFBQUNRR2VZVVFuL3dBTEtDRUFBMEJvSEFBQUFBa0JubU5FSi84QUN5a2hBQU5BYUJ3aEFBTkFhQndBQUFBTlFacG9ORXhEUC82cGxnQU11U0VBQTBCb0hBQUFBQXRCbm9aRkVTd3Ivd0FJK1NFQUEwQm9IQ0VBQTBCb0hBQUFBQWtCbnFWRUovOEFDeWtoQUFOQWFCd0FBQUFKQVo2blJDZi9BQXNvSVFBRFFHZ2NJUUFEUUdnY0FBQUFEVUdhckRSTVF6LytxWllBRExnaEFBTkFhQndBQUFBTFFaN0tSUlVzSy84QUNQa2hBQU5BYUJ3QUFBQUpBWjdwUkNmL0FBc29JUUFEUUdnY0lRQURRR2djQUFBQUNRR2U2MFFuL3dBTEtDRUFBMEJvSEFBQUFBMUJtdkEwVEVNLy9xbVdBQXk1SVFBRFFHZ2NJUUFEUUdnY0FBQUFDMEdmRGtVVkxDdi9BQWo1SVFBRFFHZ2NBQUFBQ1FHZkxVUW4vd0FMS1NFQUEwQm9IQ0VBQTBCb0hBQUFBQWtCbnk5RUovOEFDeWdoQUFOQWFCd0FBQUFOUVpzME5FeERQLzZwbGdBTXVDRUFBMEJvSEFBQUFBdEJuMUpGRlN3ci93QUkrU0VBQTBCb0hDRUFBMEJvSEFBQUFBa0JuM0ZFSi84QUN5Z2hBQU5BYUJ3QUFBQUpBWjl6UkNmL0FBc29JUUFEUUdnY0lRQURRR2djQUFBQURVR2JlRFJNUXovK3FaWUFETGtoQUFOQWFCd0FBQUFMUVorV1JSVXNLLzhBQ1BnaEFBTkFhQndoQUFOQWFCd0FBQUFKQVorMVJDZi9BQXNwSVFBRFFHZ2NBQUFBQ1FHZnQwUW4vd0FMS1NFQUEwQm9IQ0VBQTBCb0hBQUFBQTFCbTd3MFRFTS8vcW1XQUF5NElRQURRR2djQUFBQUMwR2Yya1VWTEN2L0FBajVJUUFEUUdnY0FBQUFDUUdmK1VRbi93QUxLQ0VBQTBCb0hDRUFBMEJvSEFBQUFBa0JuL3RFSi84QUN5a2hBQU5BYUJ3QUFBQU5RWnZnTkV4RFAvNnBsZ0FNdVNFQUEwQm9IQ0VBQTBCb0hBQUFBQXRCbmg1RkZTd3Ivd0FJK0NFQUEwQm9IQUFBQUFrQm5qMUVKLzhBQ3lnaEFBTkFhQndoQUFOQWFCd0FBQUFKQVo0L1JDZi9BQXNwSVFBRFFHZ2NBQUFBRFVHYUpEUk1Rei8rcVpZQURMZ2hBQU5BYUJ3QUFBQUxRWjVDUlJVc0svOEFDUGtoQUFOQWFCd2hBQU5BYUJ3QUFBQUpBWjVoUkNmL0FBc29JUUFEUUdnY0FBQUFDUUdlWTBRbi93QUxLU0VBQTBCb0hDRUFBMEJvSEFBQUFBMUJtbWcwVEVNLy9xbVdBQXk1SVFBRFFHZ2NBQUFBQzBHZWhrVVZMQ3YvQUFqNUlRQURRR2djSVFBRFFHZ2NBQUFBQ1FHZXBVUW4vd0FMS1NFQUEwQm9IQUFBQUFrQm5xZEVKLzhBQ3lnaEFBTkFhQndBQUFBTlFacXNORXhEUC82cGxnQU11Q0VBQTBCb0hDRUFBMEJvSEFBQUFBdEJuc3BGRlN3ci93QUkrU0VBQTBCb0hBQUFBQWtCbnVsRUovOEFDeWdoQUFOQWFCd2hBQU5BYUJ3QUFBQUpBWjdyUkNmL0FBc29JUUFEUUdnY0FBQUFEVUdhOERSTVF6LytxWllBRExraEFBTkFhQndoQUFOQWFCd0FBQUFMUVo4T1JSVXNLLzhBQ1BraEFBTkFhQndBQUFBSkFaOHRSQ2YvQUFzcElRQURRR2djSVFBRFFHZ2NBQUFBQ1FHZkwwUW4vd0FMS0NFQUEwQm9IQUFBQUExQm16UTBURU0vL3FtV0FBeTRJUUFEUUdnY0FBQUFDMEdmVWtVVkxDdi9BQWo1SVFBRFFHZ2NJUUFEUUdnY0FBQUFDUUdmY1VRbi93QUxLQ0VBQTBCb0hBQUFBQWtCbjNORUovOEFDeWdoQUFOQWFCd2hBQU5BYUJ3QUFBQU5RWnQ0TkV4Qy8vNnBsZ0FNdVNFQUEwQm9IQUFBQUF0Qm41WkZGU3dyL3dBSStDRUFBMEJvSENFQUEwQm9IQUFBQUFrQm43VkVKLzhBQ3lraEFBTkFhQndBQUFBSkFaKzNSQ2YvQUFzcElRQURRR2djQUFBQURVR2J1elJNUW4vK25oQUFZc0FoQUFOQWFCd2hBQU5BYUJ3QUFBQUpRWi9hUWhQL0FBc3BJUUFEUUdnY0FBQUFDUUdmK1VRbi93QUxLQ0VBQTBCb0hDRUFBMEJvSENFQUEwQm9IQ0VBQTBCb0hDRUFBMEJvSENFQUEwQm9IQUFBQ2lGdGIyOTJBQUFBYkcxMmFHUUFBQUFBMVlDQ1g5V0FnbDhBQUFQb0FBQUgvQUFCQUFBQkFBQUFBQUFBQUFBQUFBQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRUFBQUFBQUFBQUFBQUFBQUFBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURBQUFBR0dsdlpITUFBQUFBRUlDQWdBY0FULy8vL3Y3L0FBQUYrWFJ5WVdzQUFBQmNkR3RvWkFBQUFBUFZnSUpmMVlDQ1h3QUFBQUVBQUFBQUFBQUgwQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRUFBQUFBQUFBQUFBQUFBQUFBQUVBQUFBQUF5Z0FBQU1vQUFBQUFBQ1JsWkhSekFBQUFIR1ZzYzNRQUFBQUFBQUFBQVFBQUI5QUFBQmR3QUFFQUFBQUFCWEZ0WkdsaEFBQUFJRzFrYUdRQUFBQUExWUNDWDlXQWdsOEFBVitRQUFLL0lGWEVBQUFBQUFBdGFHUnNjZ0FBQUFBQUFBQUFkbWxrWlFBQUFBQUFBQUFBQUFBQUFGWnBaR1Z2U0dGdVpHeGxjZ0FBQUFVY2JXbHVaZ0FBQUJSMmJXaGtBQUFBQVFBQUFBQUFBQUFBQUFBQUpHUnBibVlBQUFBY1pISmxaZ0FBQUFBQUFBQUJBQUFBREhWeWJDQUFBQUFCQUFBRTNITjBZbXdBQUFDWWMzUnpaQUFBQUFBQUFBQUJBQUFBaUdGMll6RUFBQUFBQUFBQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXlnREtBRWdBQUFCSUFBQUFBQUFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFZLy84QUFBQXlZWFpqUXdGTlFDai80UUFiWjAxQUtPeWhvM3lTVFVCQVFGQUFBQU1BRUFBcjhnRHhneGxnQVFBRWFPK0c4Z0FBQUJoemRIUnpBQUFBQUFBQUFBRUFBQUE4QUFBTHVBQUFBQlJ6ZEhOekFBQUFBQUFBQUFFQUFBQUJBQUFCOEdOMGRITUFBQUFBQUFBQVBBQUFBQUVBQUJkd0FBQUFBUUFBT3BnQUFBQUJBQUFYY0FBQUFBRUFBQUFBQUFBQUFRQUFDN2dBQUFBQkFBQTZtQUFBQUFFQUFCZHdBQUFBQVFBQUFBQUFBQUFCQUFBTHVBQUFBQUVBQURxWUFBQUFBUUFBRjNBQUFBQUJBQUFBQUFBQUFBRUFBQXU0QUFBQUFRQUFPcGdBQUFBQkFBQVhjQUFBQUFFQUFBQUFBQUFBQVFBQUM3Z0FBQUFCQUFBNm1BQUFBQUVBQUJkd0FBQUFBUUFBQUFBQUFBQUJBQUFMdUFBQUFBRUFBRHFZQUFBQUFRQUFGM0FBQUFBQkFBQUFBQUFBQUFFQUFBdTRBQUFBQVFBQU9wZ0FBQUFCQUFBWGNBQUFBQUVBQUFBQUFBQUFBUUFBQzdnQUFBQUJBQUE2bUFBQUFBRUFBQmR3QUFBQUFRQUFBQUFBQUFBQkFBQUx1QUFBQUFFQUFEcVlBQUFBQVFBQUYzQUFBQUFCQUFBQUFBQUFBQUVBQUF1NEFBQUFBUUFBT3BnQUFBQUJBQUFYY0FBQUFBRUFBQUFBQUFBQUFRQUFDN2dBQUFBQkFBQTZtQUFBQUFFQUFCZHdBQUFBQVFBQUFBQUFBQUFCQUFBTHVBQUFBQUVBQURxWUFBQUFBUUFBRjNBQUFBQUJBQUFBQUFBQUFBRUFBQXU0QUFBQUFRQUFPcGdBQUFBQkFBQVhjQUFBQUFFQUFBQUFBQUFBQVFBQUM3Z0FBQUFCQUFBNm1BQUFBQUVBQUJkd0FBQUFBUUFBQUFBQUFBQUJBQUFMdUFBQUFBRUFBQzdnQUFBQUFRQUFGM0FBQUFBQkFBQUFBQUFBQUJ4emRITmpBQUFBQUFBQUFBRUFBQUFCQUFBQUFRQUFBQUVBQUFFRWMzUnplZ0FBQUFBQUFBQUFBQUFBUEFBQUF6UUFBQUFRQUFBQURRQUFBQTBBQUFBTkFBQUFFUUFBQUE4QUFBQU5BQUFBRFFBQUFCRUFBQUFQQUFBQURRQUFBQTBBQUFBUkFBQUFEd0FBQUEwQUFBQU5BQUFBRVFBQUFBOEFBQUFOQUFBQURRQUFBQkVBQUFBUEFBQUFEUUFBQUEwQUFBQVJBQUFBRHdBQUFBMEFBQUFOQUFBQUVRQUFBQThBQUFBTkFBQUFEUUFBQUJFQUFBQVBBQUFBRFFBQUFBMEFBQUFSQUFBQUR3QUFBQTBBQUFBTkFBQUFFUUFBQUE4QUFBQU5BQUFBRFFBQUFCRUFBQUFQQUFBQURRQUFBQTBBQUFBUkFBQUFEd0FBQUEwQUFBQU5BQUFBRVFBQUFBOEFBQUFOQUFBQURRQUFBQkVBQUFBTkFBQUFEUUFBQVFCemRHTnZBQUFBQUFBQUFEd0FBQUF3QUFBRFpBQUFBM1FBQUFPTkFBQURvQUFBQTdrQUFBUFFBQUFENndBQUEvNEFBQVFYQUFBRUxnQUFCRU1BQUFSY0FBQUVid0FBQkl3QUFBU2hBQUFFdWdBQUJNMEFBQVRrQUFBRS93QUFCUklBQUFVckFBQUZRZ0FBQlYwQUFBVndBQUFGaVFBQUJhQUFBQVcxQUFBRnpnQUFCZUVBQUFYK0FBQUdFd0FBQml3QUFBWS9BQUFHVmdBQUJuRUFBQWFFQUFBR25RQUFCclFBQUFiUEFBQUc0Z0FBQnZVQUFBY1NBQUFISndBQUIwQUFBQWRUQUFBSGNBQUFCNFVBQUFlZUFBQUhzUUFBQjhnQUFBZmpBQUFIOWdBQUNBOEFBQWdtQUFBSVFRQUFDRlFBQUFobkFBQUloQUFBQ0pjQUFBTXNkSEpoYXdBQUFGeDBhMmhrQUFBQUE5V0FnbC9WZ0lKZkFBQUFBZ0FBQUFBQUFBZjhBQUFBQUFBQUFBQUFBQUFCQVFBQUFBQUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFRQUFBQUFBQUFBQUFBQUFBQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUNzbTFrYVdFQUFBQWdiV1JvWkFBQUFBRFZnSUpmMVlDQ1h3QUFyRVFBQVdBQVZjUUFBQUFBQUNkb1pHeHlBQUFBQUFBQUFBQnpiM1Z1QUFBQUFBQUFBQUFBQUFBQVUzUmxjbVZ2QUFBQUFtTnRhVzVtQUFBQUVITnRhR1FBQUFBQUFBQUFBQUFBQUNSa2FXNW1BQUFBSEdSeVpXWUFBQUFBQUFBQUFRQUFBQXgxY213Z0FBQUFBUUFBQWlkemRHSnNBQUFBWjNOMGMyUUFBQUFBQUFBQUFRQUFBRmR0Y0RSaEFBQUFBQUFBQUFFQUFBQUFBQUFBQUFBQ0FCQUFBQUFBckVRQUFBQUFBRE5sYzJSekFBQUFBQU9BZ0lBaUFBSUFCSUNBZ0JSQUZRQUFBQUFERFVBQUFBQUFCWUNBZ0FJU0VBYUFnSUFCQWdBQUFCaHpkSFJ6QUFBQUFBQUFBQUVBQUFCWUFBQUVBQUFBQUJ4emRITmpBQUFBQUFBQUFBRUFBQUFCQUFBQUFRQUFBQUVBQUFBVWMzUnplZ0FBQUFBQUFBQUdBQUFBV0FBQUFYQnpkR052QUFBQUFBQUFBRmdBQUFPQkFBQURod0FBQTVvQUFBT3RBQUFEc3dBQUE4b0FBQVBmQUFBRDVRQUFBL2dBQUFRTEFBQUVFUUFBQkNnQUFBUTlBQUFFVUFBQUJGWUFBQVJwQUFBRWdBQUFCSVlBQUFTYkFBQUVyZ0FBQkxRQUFBVEhBQUFFM2dBQUJQTUFBQVQ1QUFBRkRBQUFCUjhBQUFVbEFBQUZQQUFBQlZFQUFBVlhBQUFGYWdBQUJYMEFBQVdEQUFBRm1nQUFCYThBQUFYQ0FBQUZ5QUFBQmRzQUFBWHlBQUFGK0FBQUJnMEFBQVlnQUFBR0pnQUFCamtBQUFaUUFBQUdaUUFBQm1zQUFBWitBQUFHa1FBQUJwY0FBQWF1QUFBR3d3QUFCc2tBQUFiY0FBQUc3d0FBQndZQUFBY01BQUFISVFBQUJ6UUFBQWM2QUFBSFRRQUFCMlFBQUFkcUFBQUhmd0FBQjVJQUFBZVlBQUFIcXdBQUI4SUFBQWZYQUFBSDNRQUFCL0FBQUFnREFBQUlDUUFBQ0NBQUFBZzFBQUFJT3dBQUNFNEFBQWhoQUFBSWVBQUFDSDRBQUFpUkFBQUlwQUFBQ0tvQUFBaXdBQUFJdGdBQUNMd0FBQWpDQUFBQUZuVmtkR0VBQUFBT2JtRnRaVk4wWlhKbGJ3QUFBSEIxWkhSaEFBQUFhRzFsZEdFQUFBQUFBQUFBSVdoa2JISUFBQUFBQUFBQUFHMWthWEpoY0hCc0FBQUFBQUFBQUFBQUFBQUFPMmxzYzNRQUFBQXpxWFJ2YndBQUFDdGtZWFJoQUFBQUFRQUFBQUJJWVc1a1FuSmhhMlVnTUM0eE1DNHlJREl3TVRVd05qRXhNREE9J1xuIl0sIm1hcHBpbmdzIjoiQUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/nosleep.js/src/media.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ \"./src/socket.js\");\n/* harmony import */ var nosleep_js_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nosleep.js/src */ \"./node_modules/nosleep.js/src/index.js\");\n/* harmony import */ var nosleep_js_src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nosleep_js_src__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst socket = new _socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const next = document.querySelector('.next');\n    const prev = document.querySelector('.prev');\n\n    prev.addEventListener('click', e => {\n        socket.send('prev');\n    });\n\n    next.addEventListener('click', e => {\n        socket.send('next');\n    });\n\n    const noSleepBtn = document.getElementById('noSleep');\n    const noSleep = new nosleep_js_src__WEBPACK_IMPORTED_MODULE_1__();\n\n    function enableNoSleep() {\n        noSleep.enable();\n        noSleepBtn.removeEventListener('click', enableNoSleep, false);\n    }\n\n    noSleepBtn.addEventListener('click', enableNoSleep, false);\n\n    noSleep.disable();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvY2tldCBmcm9tICcuL3NvY2tldCc7XG5pbXBvcnQgKiBhcyBOb1NsZWVwIGZyb20gJ25vc2xlZXAuanMvc3JjJztcblxuY29uc3Qgc29ja2V0ID0gbmV3IFNvY2tldCgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xuICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldicpO1xuXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBzb2NrZXQuc2VuZCgncHJldicpO1xuICAgIH0pO1xuXG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBzb2NrZXQuc2VuZCgnbmV4dCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9TbGVlcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub1NsZWVwJyk7XG4gICAgY29uc3Qgbm9TbGVlcCA9IG5ldyBOb1NsZWVwKCk7XG5cbiAgICBmdW5jdGlvbiBlbmFibGVOb1NsZWVwKCkge1xuICAgICAgICBub1NsZWVwLmVuYWJsZSgpO1xuICAgICAgICBub1NsZWVwQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5hYmxlTm9TbGVlcCwgZmFsc2UpO1xuICAgIH1cblxuICAgIG5vU2xlZXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmFibGVOb1NsZWVwLCBmYWxzZSk7XG5cbiAgICBub1NsZWVwLmRpc2FibGUoKTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/socket.js":
/*!***********************!*\
  !*** ./src/socket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst host = 'wss://kondolovskiy.herokuapp.com';\n\n/**\n * Socket wrapper\n */\nclass Socket {\n\n    constructor() {\n        this._connect();\n    }\n\n    /**\n     * Socket connector. Create socket instance and bind events to it\n     * @private\n     */\n    _connect() {\n        this.socket = new WebSocket(host);\n\n        this._bindEvents();\n    }\n\n    /**\n     * Bind socket events to socket instance\n     * @private\n     */\n    _bindEvents() {\n        this.socket.onopen = this._onOpen;\n        this.socket.onclose = this._onClose.bind(this);\n        this.socket.onmessage = this._onMessage.bind(this);\n        this.socket.onerror = this._onError;\n    }\n\n    /**\n     * Socket open handler\n     * @private\n     */\n    _onOpen() {\n        console.log(\"Connected\");\n    }\n\n    /**\n     * Socket close handler\n     * @param event\n     * @private\n     */\n    _onClose(event) {\n        if (event.wasClean) {\n            console.log('Connection are closed');\n        } else {\n            console.log('Bad connection');\n        }\n        console.log('Code: ' + event.code + ' reason: ' + event.reason);\n\n        setTimeout(() => {\n            this._connect()\n        }, 1000); // try to reconnect when connection was closed\n    }\n\n    /**\n     * Socket message receive handler\n     * @param event\n     * @private\n     */\n    _onMessage(event) {\n        console.log(\"received data \" + event.data);\n    }\n\n    /**\n     * Socket error handler\n     * @param error\n     * @private\n     */\n    _onError(error) {\n        console.log(\"Error \" + error.message);\n    }\n\n    /**\n     * Send socket message\n     * @param message\n     */\n    send(message) {\n        this.socket.send(message);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Socket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc29ja2V0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC5qcz82YzIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhvc3QgPSAnd3NzOi8va29uZG9sb3Zza2l5Lmhlcm9rdWFwcC5jb20nO1xuXG4vKipcbiAqIFNvY2tldCB3cmFwcGVyXG4gKi9cbmNsYXNzIFNvY2tldCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvY2tldCBjb25uZWN0b3IuIENyZWF0ZSBzb2NrZXQgaW5zdGFuY2UgYW5kIGJpbmQgZXZlbnRzIHRvIGl0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KGhvc3QpO1xuXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHNvY2tldCBldmVudHMgdG8gc29ja2V0IGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gdGhpcy5fb25PcGVuO1xuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gdGhpcy5fb25DbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLl9vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IHRoaXMuX29uRXJyb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ja2V0IG9wZW4gaGFuZGxlclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX29uT3BlbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ja2V0IGNsb3NlIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkNsb3NlKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53YXNDbGVhbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gYXJlIGNsb3NlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0JhZCBjb25uZWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0NvZGU6ICcgKyBldmVudC5jb2RlICsgJyByZWFzb246ICcgKyBldmVudC5yZWFzb24pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdCgpXG4gICAgICAgIH0sIDEwMDApOyAvLyB0cnkgdG8gcmVjb25uZWN0IHdoZW4gY29ubmVjdGlvbiB3YXMgY2xvc2VkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ja2V0IG1lc3NhZ2UgcmVjZWl2ZSBoYW5kbGVyXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfb25NZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgZGF0YSBcIiArIGV2ZW50LmRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvY2tldCBlcnJvciBoYW5kbGVyXG4gICAgICogQHBhcmFtIGVycm9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfb25FcnJvcihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZCBzb2NrZXQgbWVzc2FnZVxuICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICovXG4gICAgc2VuZChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQobWVzc2FnZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2tldDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/socket.js\n");

/***/ })

/******/ });
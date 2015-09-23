/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// Normalize the various vendor prefixed versions of getUserMedia.
	'use strict';

	var v = document.querySelector('video');
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');
	var MediaStream = null;
	var cw = Math.floor(canvas.clientWidth);
	var ch = Math.floor(canvas.clientHeight * 2);
	canvas.width = cw;
	canvas.height = ch;
	var button = document.getElementById('img-download');
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

	if (navigator.getUserMedia) {
	  // Request the camera.
	  navigator.getUserMedia(
	  // Constraints
	  {
	    video: true
	  },

	  // Success Callback
	  function (localMediaStream) {
	    var vid = document.getElementById('camera-stream');
	    // Create an object URL for the video stream and use this
	    // to set the video source.
	    vid.src = window.URL.createObjectURL(localMediaStream);
	    MediaStream = localMediaStream;
	  },

	  // Error Callback
	  function (err) {
	    // Log the error to the console.
	    console.log('The following error occurred when trying to use getUserMedia: ' + err);
	  });
	  document.getElementById('click').addEventListener('click', function () {
	    if (MediaStream) {
	      ctx.drawImage(v, 0, 0);
	      document.querySelector('img').src = canvas.toDataURL('image/webp');
	    }
	  });
	  button.addEventListener('click', function (e) {
	    var dataURL = canvas.toDataURL('image/png');
	    button.href = dataURL;
	  });
	} else {
	  alert('Sorry, your browser does not support getUserMedia');
	}

/***/ }
/******/ ]);
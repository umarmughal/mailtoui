(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function setDarkTheme(){window.document.getElementById("mailtoui-modal-email-dark").classList.add("dark-theme")}var version=require("../../../version.js");window.document.getElementById("version").innerHTML=version;
},{"../../../version.js":2}],2:[function(require,module,exports){
// generated by genversion
module.exports = '0.1.3'

},{}]},{},[1])
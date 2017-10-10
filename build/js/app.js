(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sudoku = exports.Sudoku = function () {
  function Sudoku() {
    _classCallCheck(this, Sudoku);
  }

  _createClass(Sudoku, [{
    key: "verifyArray",
    value: function verifyArray(array) {
      var arr = [];
      var returnData = "Valid";
      array.forEach(function (innerArray) {
        arr = [];
        innerArray.forEach(function (innerArrayValue) {
          if (innerArrayValue != 0) {
            if (arr.indexOf(innerArrayValue) > -1) {
              returnData = "Unvalid";
            } else {
              arr.push(innerArrayValue);
            }
          }
        });
      });
      return returnData;
    }
  }]);

  return Sudoku;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _suduko = require('./../js/suduko.js');

$(document).ready(function () {
  gridMaker();
  function gridMaker() {
    for (var i = 1; i < 10; i++) {
      $('.sudokuGrid').append('<div class="col-sm-12 col' + i + '"></div>');
      for (var j = 1; j < 10; j++) {
        $('#gridSelector').append('<option value="grid' + i + '-' + j + '">Row ' + i + ' col ' + j + ' </option>');
        $('.col' + i).append('<li class="grid' + i + '-' + j + '"></li>');
      }
    }
  };

  function getColumnGridArray() {
    var outerArray = [];
    var innerArray = [];
    var value;
    for (var j = 1; j < 10; j++) {
      innerArray = [];
      for (var i = 1; i < 10; i++) {
        if ($('.grid' + i + '-' + j).text() == "") {
          value = 0;
        } else {
          value = $('.grid' + i + '-' + j).text();
        }
        innerArray.push(value);
      }
      outerArray.push(innerArray);
    }
    return outerArray;
  };

  function getRowGridArray() {
    var outerArray = [];
    var innerArray = [];
    var value;
    for (var j = 1; j < 10; j++) {
      innerArray = [];
      for (var i = 1; i < 10; i++) {
        if ($('.grid' + j + '-' + i).text() == "") {
          value = 0;
        } else {
          value = $('.grid' + j + '-' + i).text();
        }
        innerArray.push(value);
      }
      outerArray.push(innerArray);
    }
    return outerArray;
  };

  $('#display').click(function (event) {
    event.preventDefault();
    var gridSelector = $('#gridSelector').val();
    var gridDigit = $('#gridDigit').val();
    $("." + gridSelector).text(gridDigit);
  });

  $('#verify').click(function (event) {
    event.preventDefault();
    var sudoku = new _suduko.Sudoku();
    var result;
    var columnGridArray = getColumnGridArray();
    var rowGridArray = getRowGridArray();
    var resultForRow = sudoku.verifyArray(rowGridArray);
    var resultForColumn = sudoku.verifyArray(columnGridArray);
    if (resultForRow == "Unvalid" || resultForColumn == "Unvalid") {
      $('#result').append("Its an Unvalid Sudoku");
    } else {
      $('#result').append("Its a Valid Sudoku");
    }
  });
});

},{"./../js/suduko.js":1}]},{},[2]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){
  gridMaker();
  function gridMaker(){
    for(var i = 1; i < 10; i++){
      $('.sudukoGrid').append('<div class="col-sm-12 col'+i+'"></div>');
      for(var j = 1; j < 10; j++){
        $('#gridSelector').append('<option value="grid'+i+'-'+j+'">Row '+i+' col '+j+' </option>')
        $('.col'+i).append('<li class="grid'+i+'-'+j+'"></li>');
      }
    }
  };
  $('#display').click(function(event){
    event.preventDefault();
     var gridSelector = $('#gridSelector').val();
     var gridDigit = $('#gridDigit').val();
     $("."+gridSelector).text(gridDigit);
  });
});

},{}]},{},[1]);

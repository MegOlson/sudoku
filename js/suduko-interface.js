var Sudoku = require('./../js/suduko.js').sudokuModule;

$(document).ready(function(){
  gridMaker();
  function gridMaker(){
    for(var i = 1; i < 10; i++){
      $('.sudokuGrid').append('<div class="col-sm-12 col'+i+'"></div>');
      for(var j = 1; j < 10; j++){
        $('#gridSelector').append('<option value="grid'+i+'-'+j+'">Row '+i+' col '+j+' </option>');
        $('.col'+i).append('<li class="grid'+i+'-'+j+'"></li>');
      }
    }
  };

  function getColumnGridArray(){
    var outerArray = [];
    var innerArray = [];
    var value;
    for(var j = 1; j < 10; j++){
      innerArray =[];
      for(var i = 1; i < 10; i++){
        if($('.grid'+i+'-'+j).text() == ""){
          value = 0;
        }else{
          value = $('.grid'+i+'-'+j).text();
        }
        innerArray.push(value);
      }
      outerArray.push(innerArray);
    }
    return outerArray;
  };

  function getRowGridArray(){
    var outerArray = [];
    var innerArray = [];
    var value;
    for(var j = 1; j < 10; j++){
      innerArray =[];
      for(var i = 1; i < 10; i++){
        if($('.grid'+j+'-'+i).text() == ""){
          value = 0;
        }else{
          value = $('.grid'+j+'-'+i).text();
        }
        innerArray.push(value);
      }
      outerArray.push(innerArray);
    }
    return outerArray;
  };


  $('#display').click(function(event){
    event.preventDefault();
     var gridSelector = $('#gridSelector').val();
     var gridDigit = $('#gridDigit').val();
     $("."+gridSelector).text(gridDigit);
  });

  $('#verify').click(function(event){
    event.preventDefault();
    var sudoku = new Sudoku();
    var result;
    var columnGridArray = getColumnGridArray();
    var rowGridArray = getRowGridArray();
    resultForRow = sudoku.verifyArray(rowGridArray);
    resultForColumn = sudoku.verifyArray(columnGridArray);
    if (resultForRow == "Unvalid" || resultForColumn =="Unvalid"){
      $('#result').append("Its an Unvalid Sudoku");
    }else{
      $('#result').append("Its a Valid Sudoku");
    }
  });
});

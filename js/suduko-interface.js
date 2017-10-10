import { Sudoku } from './../js/suduko.js';


$(document).ready(function(){
  gridMaker();
  function gridMaker(){
    for(let i = 1; i < 10; i++){
      $('.sudokuGrid').append('<div class="col-sm-12 col'+i+'"></div>');
      for(let j = 1; j < 10; j++){
        $('#gridSelector').append('<option value="grid'+i+'-'+j+'">Row '+i+' col '+j+' </option>');
        $('.col'+i).append('<li class="grid'+i+'-'+j+'"></li>');
      }
    }
  };

  function getColumnGridArray(){
    let outerArray = [];
    let innerArray = [];
    let value;
    for(let j = 1; j < 10; j++){
      innerArray =[];
      for(let i = 1; i < 10; i++){
        if($(`.grid${i}-${j}`).text() == ""){
          value = 0;
        }else{
          value = $(`.grid${i}-${j}`).text();
        }
        innerArray.push(value);
      }
      outerArray.push(innerArray);
    }
    return outerArray;
  };

  function getRowGridArray(){
    let outerArray = [];
    let innerArray = [];
    let value;
    for(let j = 1; j < 10; j++){
      innerArray =[];
      for(let i = 1; i < 10; i++){
        if($(`.grid${j}-${i}`).text() == ""){
          value = 0;
        }else{
          value = $(`.grid${j}-${i}`).text();
        }
        innerArray.push(value);
      }
      outerArray.push(innerArray);
    }
    return outerArray;
  };

  function getBlockArray(){
    let arr1=[];
    let arr=[];
    let value;
    let innerLoopStart =1;
    let outerLoopStart =1;
    let end = 4;
    let initialValue =1;
    for(outerLoopStart; outerLoopStart < 10; outerLoopStart++){
      if( outerLoopStart == 4 || outerLoopStart == 7){
        arr1.push(arr);
        arr =[];
      }
      for(innerLoopStart; innerLoopStart < end; innerLoopStart++){
        if($(`.grid${outerLoopStart}-${innerLoopStart}`).text() == ""){
          value = 0;
        }else{
          value = $(`.grid${outerLoopStart}-${innerLoopStart}`).text();
        }
        arr.push(value);
      }

      if(outerLoopStart == 9 && innerLoopStart > 9){
        arr1.push(arr);
        break;
      }
      innerLoopStart = initialValue;
      if(outerLoopStart == 9 && end !=9 ){
        arr1.push(arr);
        arr =[];
        initialValue = innerLoopStart+ 3;
        innerLoopStart =initialValue;
        end = end + 3;
        outerLoopStart = 0;
      }
    }
    return arr1;
  }


  $('#display').click(function(event){
    event.preventDefault();
     let gridSelector = $('#gridSelector').val();
     let gridDigit = $('#gridDigit').val();
     $(`.${gridSelector}`).text(gridDigit);
  });

  $('#verify').click(function(event){
    event.preventDefault();
    let sudoku = new Sudoku();
    let result;
    let columnGridArray = getColumnGridArray();
    let rowGridArray = getRowGridArray();
    let blockGridArray = getBlockArray();
    let resultForRow = sudoku.verifyArray(rowGridArray);
    let resultForColumn = sudoku.verifyArray(columnGridArray);
    let resultForBlock = sudoku.verifyArray(blockGridArray);
    if (resultForRow == "Unvalid" || resultForColumn =="Unvalid" || resultForBlock== "Unvalid"){
      $('#result').append("Its an Unvalid Sudoku");
    }else{
      $('#result').append("Its a Valid Sudoku");
    }
  });
});

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

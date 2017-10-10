export class Sudoku {
  constructor(){}

  verifyArray(array) {
    let arr =[]
    let returnData = "Valid"
    array.forEach(function(innerArray) {
    arr = [];
      innerArray.forEach(function(innerArrayValue) {
        if(innerArrayValue != 0){
          if(arr.indexOf(innerArrayValue) > -1){
            returnData = "Unvalid";
          }else{
            arr.push(innerArrayValue);
          }
        }
      });
    });
    return returnData;
  }
}

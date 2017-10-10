var Sudoku = require('./../js/suduko.js').sudokuModule;

describe('Sudoku', function() {
  var sudoku;

  beforeEach(function() {
    sudoku = new Sudoku();
  });

  it("should verify if a sudoku grid submission is valid.", function(){
    var array = [[2, 5, 3]];
    expect(sudoku.verifyArray(array)).toEqual("Valid")
  });
});

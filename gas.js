const p = console.log;
const id = '1eLkDb-uN9N9ZZao_2maXx-jWpQz4gvho46fp9ZzdtCY';
const sheetName = 'シート1';
const sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);

const myFunction = () => {
  var myRange = sheet.getDataRange().getValues();
  p(myRange.length);

  // getRange(row, column, numRows, numColumns)
  var range = sheet.getRange(3, 1, 1, 9); // 3行目を左から9セル分
  range.setBackground('pink'); // 背景色をピンクに
};

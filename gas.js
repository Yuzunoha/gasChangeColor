const p = console.log;
const id = '1eLkDb-uN9N9ZZao_2maXx-jWpQz4gvho46fp9ZzdtCY';
const sheetName = 'シート1';

const 指定した行のカラム数を返す関数 = (sheet, row) => {
  const arr = sheet.getDataRange().getValues();
  const rowLength = arr[row - 1].length;
  return rowLength;
};

const changeColorForRow = (sheet, row, rowLength, color = '#C0C0C0') => {
  /* getRange(row, column, numRows, numColumns) */
  const range = sheet.getRange(row, 1, 1, rowLength); // 3行目を左から9セル分
  range.setBackground(color); // 背景色をピンクに
};

const test = (sheet) => {
  p(指定した行のカラム数を返す関数(sheet, 73));
};

const myFunction = () => {
  const sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  test(sheet);
  return;

  const myRange = sheet.getDataRange().getValues();
  p(myRange[3]);
  changeColorForRow(sheet, 7, 9);
};

// 参考
// https://qiita.com/cazimayaa/items/224daebe536799e5a8a2

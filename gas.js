const p = console.log;
const id = '1eLkDb-uN9N9ZZao_2maXx-jWpQz4gvho46fp9ZzdtCY';
const sheetName = 'シート1';

const 指定した行のカラム数を返す関数 = ({ sheet, row }) => {
  const arr = sheet.getDataRange().getValues();
  const rowLength = arr[row - 1].length;
  return rowLength;
};

const 指定した行を色付けする関数 = ({ sheet, row, color = '#C0C0C0' }) => {
  const rowLength = 指定した行のカラム数を返す関数({ sheet, row });
  const range = sheet.getRange(row, 1, 1, rowLength); // row, column, numRows, numColumns
  range.setBackground(color);
};

const myFunction = () => {
  const sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  指定した行を色付けする関数({ sheet, row: 3 });
};

// 参考
// https://qiita.com/cazimayaa/items/224daebe536799e5a8a2

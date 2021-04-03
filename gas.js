const p = console.log;
const id = '1eLkDb-uN9N9ZZao_2maXx-jWpQz4gvho46fp9ZzdtCY';
const sheetName = 'シート1';

const 指定した行のカラム数を返す関数 = ({ sheet, row }) => {
  const arr = sheet.getDataRange().getValues();
  const rowLength = arr[row - 1].length;
  return rowLength;
};

const 指定した行を色付けする関数 = ({ sheet, row, color = '#C0C0C0' }) => {
  const カラム数 = 指定した行のカラム数を返す関数({ sheet, row });
  /* getRange(row, column, numRows, numColumns) */
  sheet.getRange(row, 1, 1, カラム数).setBackground(color);
};

const 文字列1が文字列2を含んでいたら真となる関数 = (文字列1, 文字列2) => 文字列1.indexOf(文字列2) !== -1;

const 行がキーワードを含んでいたら真となる関数 = ({ sheet, row, keywords }) => {
  const arr = sheet.getDataRange().getValues();
  const columns = arr[row - 1];
  for (const column of columns) {
    for (const keyword of keywords) {
      if (文字列1が文字列2を含んでいたら真となる関数(column, keyword)) {
        return true;
      }
    }
  }
  return false;
};

const キーワードをカラムに持つ行に色を塗る関数 = ({ sheet, keywords }) => {};

const test = (sheet) => {
  p(行がキーワードを含んでいたら真となる関数({ sheet, row: 1, keywords: ['a', '払いいいいいい'] }));
};

const myFunction = () => {
  const sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  test(sheet);
  return;
  指定した行を色付けする関数({ sheet, row: 12 });
};

// 参考
// https://qiita.com/cazimayaa/items/224daebe536799e5a8a2

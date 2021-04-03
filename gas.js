/**
 * myFunction を実行すると sheetName 内の keywords を含む行をグレーに塗る
 */
const id = 'xxxxxx-xxxxxxxxx_11111-XXXXXXXXXXXXXXXXXXXXX';
const sheetName = 'シート1';
const keywords = ['ホゲギンコウ', 'フガカンパニー'];

const 指定した行を返す関数 = ({ dataRangeValues, row }) => dataRangeValues[row - 1];

const 指定した行のカラム数を返す関数 = ({ dataRangeValues, row }) => 指定した行を返す関数({ dataRangeValues, row }).length;

const 指定した行を色付けする関数 = ({ sheet, dataRangeValues, row, color = '#C0C0C0' }) => {
  const カラム数 = 指定した行のカラム数を返す関数({ dataRangeValues, row });
  /* getRange(row, column, numRows, numColumns) */
  sheet.getRange(row, 1, 1, カラム数).setBackground(color);
};

const 文字列1が文字列2を含んでいたら真となる関数 = (文字列1, 文字列2) => 文字列1.indexOf(文字列2) !== -1;

const 行がキーワードを含んでいたら真となる関数 = ({ dataRangeValues, row, keywords }) => {
  const columns = 指定した行を返す関数({ dataRangeValues, row });
  for (const column of columns) {
    for (const keyword of keywords) {
      if (文字列1が文字列2を含んでいたら真となる関数(String(column), keyword)) {
        return true;
      }
    }
  }
  return false;
};

const キーワードをカラムに持つ行に色を塗る関数 = ({ sheet, keywords }) => {
  const dataRangeValues = sheet.getDataRange().getValues();
  for (let i = 0; i < dataRangeValues.length; i++) {
    const row = i + 1;
    if (行がキーワードを含んでいたら真となる関数({ dataRangeValues, row, keywords })) {
      指定した行を色付けする関数({ sheet, dataRangeValues, row });
    }
  }
};

const myFunction = () => {
  const sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  キーワードをカラムに持つ行に色を塗る関数({ sheet, keywords });
};

// 参考
// https://qiita.com/cazimayaa/items/224daebe536799e5a8a2

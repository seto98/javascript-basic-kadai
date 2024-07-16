// Dateオブジェクトの生成
let today = new Date();

// 年、月、日情報を取得し変数に代入
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

// コンソールに出力
console.log(year + '年' + month + '月' + date + '日');

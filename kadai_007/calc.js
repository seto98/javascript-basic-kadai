// 変数numに1以上の正数を代入
let num = Math.floor(Math.random() * 10000) + 1;

// 変数numの値を判定
if (num % 3 === 0 && num % 5 === 0) {
  // numが3と5の倍数の場合
  console.log('3と5の倍数です');
} else if (num % 3 === 0) {
  // numが3の倍数の場合
  console.log('3の倍数です');  
} else if (num % 5 === 0) {
  // numが5の倍数の場合
  console.log('5の倍数です');
} else {
  // 上記以外の場合
  console.log(num);
}
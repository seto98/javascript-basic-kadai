// idがbtnの要素を取得
const clickBtn = document.getElementById('btn');

// idがtextの要素を取得
const message = document.getElementById('text');

// ボタンがクリックされたときにテキストの表示内容を変更
clickBtn.addEventListener('click', () => {
  message.textContent = 'ボタンをクリックしました';
})
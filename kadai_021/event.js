// idがbtnの要素を取得
const clickBtn = document.getElementById('btn');

// idがtextの要素を取得
const message = document.getElementById('text');

// ボタンがクリックされたとき、2秒後にテキストの表示内容を変更
clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    message.textContent = 'ボタンをクリックしました';
  }, 2000);
});


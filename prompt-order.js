/* 表示順：8 → 1 → 2 → 3 → 5 → 6 → 4 → 9 → 7 */
(function () {
  var orderedTitles = [
    'あなたのキャラに一番似合うアイスは？',
    'ねんどろいど化計画',
    '切り絵露光',
    'ガラスアート×露光',
    'オリジナルネームロゴ',
    'バーテンダー＋オリジナルカクテル',
    'アイドル衣装：ソーダスプラッシュ',
    'Vtuber風サムネ制作',
    'ポップアップ絵本ステージ'
  ];
  var savedTitles = saved.map(function (index) { return data[index] && data[index].title; }).filter(Boolean);
  data.sort(function (a, b) { return orderedTitles.indexOf(a.title) - orderedTitles.indexOf(b.title); });
  saved = savedTitles.map(function (title) { return data.findIndex(function (item) { return item.title === title; }); }).filter(function (index) { return index >= 0; });
  localStorage.setItem('tsukimiyaSaved', JSON.stringify(saved));
  render();
})();

/* 公開側: コピー数は公開せず、人気順位だけを表示する */
(function () {
  var apiUrl = location.protocol === 'file:'
    ? 'https://tsukimiya-prompt.shizuku-tsukimiya.workers.dev/api/copies'
    : '/api/copies';
  var rankByTitle = new Map();

  function showRanks() {
    document.querySelectorAll('.card h3').forEach(function (heading) {
      var rank = rankByTitle.get(heading.textContent.trim());
      var card = heading.closest('.card');
      if (!card || !rank || card.querySelector('.copy-rank')) return;
      var badge = document.createElement('span');
      badge.className = 'copy-rank';
      badge.textContent = '人気 #' + rank;
      heading.insertAdjacentElement('afterend', badge);
    });
  }

  function recordCopy(title) {
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title }),
      keepalive: true
    }).catch(function () {});
  }

  var originalCopy = window.copy;
  window.copy = async function (index, button) {
    try {
      await navigator.clipboard.writeText(data[index].prompt);
      button.textContent = 'コピーしました';
      toast('プロンプトをコピーしました');
      recordCopy(data[index].title);
      setTimeout(function () { button.textContent = 'コピー'; }, 1500);
    } catch (error) {
      toast('コピーできませんでした。詳細画面からお試しください。');
    }
  };

  fetch(apiUrl).then(function (response) {
    return response.ok ? response.json() : { rankings: [] };
  }).then(function (payload) {
    (payload.rankings || []).forEach(function (item) { rankByTitle.set(item.title, item.rank); });
    showRanks();
    new MutationObserver(showRanks).observe(document.body, { childList: true, subtree: true });
  }).catch(function () {});
}());

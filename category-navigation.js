/* トップページのカテゴリ案内と、カテゴリ内のプロンプト一覧を管理します。 */
(function () {
  var groups = [
    { id: 'new', label: 'NEW', en: 'NEW PROMPTS', description: '新しく追加されたプロンプト', titles: ['Vtuber風サムネ制作', 'あなたのキャラに一番似合うアイスは？', 'ポップアップ絵本ステージ'] },
    { id: 'diagnosis', label: '診断系プロンプト', en: 'DIAGNOSIS', description: 'キャラクターからぴったりの一杯・一品を導く', titles: ['あなたのキャラに一番似合うアイスは？', 'バーテンダー＋オリジナルカクテル'] },
    { id: 'game', label: 'ゲーム系プロンプト', en: 'GAME', description: 'ゲームにまつわるプロンプト', titles: [] },
    { id: 'art', label: 'アート系プロンプト', en: 'ART', description: '素材・表現を楽しむアート作品', titles: ['切り絵露光', 'ガラスアート×露光'] },
    { id: 'costume', label: '衣装系プロンプト', en: 'COSTUME', description: 'キャラクターの魅力を引き出す衣装デザイン', titles: ['アイドル衣装：ソーダスプラッシュ'] },
    { id: 'character', label: 'キャラクター系プロンプト', en: 'CHARACTER', description: 'キャラクターの新しい魅力をひらく', titles: ['ねんどろいど化計画', 'Vtuber風サムネ制作', 'ポップアップ絵本ステージ', 'オリジナルネームロゴ'] }
  ];

  var currentGroup = null;
  var promptSection = document.getElementById('prompts');
  if (!promptSection) return;

  var style = document.createElement('style');
  style.textContent = '\
    .category-intro{max-width:720px;margin:0 auto 28px;text-align:center}.category-intro .eyebrow{color:#bd8c34}.category-intro h2{font-family:Georgia,serif;font-size:clamp(1.65rem,4vw,2.15rem);letter-spacing:.07em;margin:8px 0}.category-intro p{margin:0;color:var(--muted);font-size:.88rem;line-height:1.75}.new-prompts{margin:0 0 46px}.new-prompts-head{display:flex;align-items:end;justify-content:space-between;gap:16px;margin:0 2px 15px}.new-prompts-head h2{margin:5px 0 0;font:700 1.55rem/1.25 Georgia,serif;letter-spacing:.06em}.new-prompts-head p{margin:0;color:var(--muted);font-size:.78rem}.category-menu{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.category-tile{min-height:170px;padding:21px;position:relative;isolation:isolate;overflow:hidden;text-align:left;border:1px solid #d6e0f3;border-radius:18px;background:#10295e;color:#fff;box-shadow:0 8px 22px rgba(20,56,124,.08);transition:.2s}.category-tile:before,.category-tile:after{content:"";position:absolute;inset:0;z-index:0}.category-tile:before{background:var(--category-image) center/cover no-repeat;opacity:.68;transition:.2s}.category-tile:after{background:linear-gradient(112deg,rgba(4,16,54,.92) 0%,rgba(7,27,75,.72) 52%,rgba(7,27,75,.28) 100%)}.category-tile>*{position:relative;z-index:1}.category-tile:hover{transform:translateY(-4px);border-color:#9cb8e7;box-shadow:0 17px 32px rgba(20,56,124,.2)}.category-tile:hover:before{transform:scale(1.05)}.category-tile.game{opacity:.84}.category-tile .category-en{display:block;font:700 .68rem/1 Georgia,serif;letter-spacing:.16em;color:#f7d895}.category-tile h3{margin:10px 0 7px;font-size:1.05rem;text-shadow:0 1px 4px rgba(0,0,0,.4)}.category-tile p{margin:0;max-width:15em;font-size:.76rem;line-height:1.55;color:#e8f0ff;text-shadow:0 1px 3px rgba(0,0,0,.38)}.category-count{display:inline-block;margin-top:15px;padding:4px 8px;border-radius:99px;background:rgba(255,255,255,.17);color:#fff;font-size:.68rem}.category-detail{margin-top:33px}.category-detail[hidden]{display:none}.category-detail-head{display:flex;align-items:end;justify-content:space-between;gap:16px;margin-bottom:16px}.category-detail-head h2{margin:4px 0 0;font:700 1.6rem/1.25 Georgia,serif;letter-spacing:.06em}.category-back{border:1px solid var(--line);border-radius:99px;background:#fff;color:var(--night);padding:9px 13px;font-size:.76rem;font-weight:bold}.category-tools{background:var(--glass);border:1px solid #fff;border-radius:16px;padding:14px;margin-bottom:20px}.category-tools .search-row{display:grid;grid-template-columns:1fr 190px;gap:10px}.category-result-line{display:flex;justify-content:space-between;align-items:center;color:var(--muted);font-size:.82rem;margin:17px 2px 12px}.category-empty{padding:60px 20px;text-align:center;background:#fff;border:1px solid #d6e0f3;border-radius:16px;color:var(--muted);line-height:1.8}.category-empty b{color:var(--text);font-size:1.05rem}@media(max-width:760px){.new-prompts-head{align-items:start;flex-direction:column}.category-menu{grid-template-columns:1fr 1fr;gap:10px}.category-tile{min-height:150px;padding:16px}.category-tile h3{font-size:.92rem}.category-tile p{font-size:.7rem}.category-detail-head{align-items:start;flex-direction:column}.category-tools .search-row{grid-template-columns:1fr}}';
  document.head.appendChild(style);

  promptSection.innerHTML = '\
    <div class="category-intro">\
      <div class="eyebrow">PROMPT CATEGORIES</div>\
      <h2>どんな一枚を描いてみる？</h2>\
      <p>気になるカテゴリを選ぶと、その中のプロンプトを見られます。</p>\
    </div>\
    <section class="new-prompts"><div class="new-prompts-head"><div><div class="eyebrow" style="color:#bd8c34">NEW PROMPTS</div><h2>新着プロンプト</h2></div><p>最新の3件をピックアップ</p></div><div class="grid" id="newGrid"></div></section>\
    <div class="category-menu" id="categoryMenu"></div>\
    <div class="category-detail" id="categoryDetail" hidden>\
      <div class="category-detail-head"><div><div class="eyebrow" style="color:#bd8c34" id="categoryEnglish"></div><h2 id="categoryTitle"></h2></div><button class="category-back" id="categoryBack">← カテゴリ一覧へ戻る</button></div>\
      <div class="category-tools"><div class="search-row"><input class="input" id="query" type="search" placeholder="このカテゴリ内をキーワードで探す" aria-label="プロンプトを検索"><select class="select" id="model" aria-label="AIモデルで絞り込む"><option value="">すべてのAIモデル</option><option>ChatGPT</option><option>Midjourney</option><option>Stable Diffusion</option><option>Niji・journey</option></select></div></div>\
      <div class="category-result-line"><span id="resultCount"></span><button class="filter" id="clear">検索をリセット</button></div>\
      <div class="grid" id="grid"></div>\
    </div>';

  function groupById(id) { return groups.find(function (group) { return group.id === id; }); }
  function promptsFor(group) { return data.filter(function (item) { return group.titles.indexOf(item.title) >= 0; }); }
  function renderMenu() {
    document.getElementById('categoryMenu').innerHTML = groups.filter(function (group) { return group.id !== 'new'; }).map(function (group) {
      var count = promptsFor(group).length;
      var status = group.id === 'game' ? '準備中' : count + ' PROMPTS';
      return '<button class="category-tile ' + group.id + '" data-group="' + group.id + '" style="--category-image:url(assets/category-' + group.id + '.webp)"><span class="category-en">' + group.en + '</span><h3>' + group.label + '</h3><p>' + group.description + '</p><span class="category-count">' + status + '</span></button>';
    }).join('');
    document.querySelectorAll('[data-group]').forEach(function (button) { button.onclick = function () { selectGroup(button.dataset.group); }; });
  }
  function updateSaved() {
    var savedGrid = document.getElementById('savedGrid');
    var savedCount = document.getElementById('savedCount');
    var savedItems = saved.map(function (index) { return data[index]; }).filter(Boolean);
    savedGrid.innerHTML = savedItems.map(function (item) { return card(item, data.indexOf(item)); }).join('') || '<div class="empty">まだ保存したプロンプトはありません。<br>気になるカードの ♡ を押して、ここに集めましょう。</div>';
    savedCount.textContent = saved.length;
  }
  function renderCategory() {
    updateSaved();
    var newGroup = groupById('new');
    document.getElementById('newGrid').innerHTML = promptsFor(newGroup).map(function (item) { return card(item, data.indexOf(item)); }).join('');
    if (!currentGroup) return;
    var group = groupById(currentGroup);
    var query = document.getElementById('query').value.toLowerCase();
    var model = document.getElementById('model').value;
    var items = promptsFor(group).filter(function (item) {
      return (!model || item.model === model) && (item.title + ' ' + item.tags.join(' ') + ' ' + item.desc).toLowerCase().includes(query);
    });
    document.getElementById('resultCount').textContent = items.length + ' 件のプロンプト';
    document.getElementById('grid').innerHTML = group.id === 'game'
      ? '<div class="category-empty"><b>ゲーム系プロンプトは準備中です</b><br>新しいプロンプトを追加すると、ここに表示されます。</div>'
      : (items.map(function (item) { return card(item, data.indexOf(item)); }).join('') || '<div class="category-empty">プロンプトが見つかりませんでした。<br>別のキーワードでお試しください。</div>');
  }
  function selectGroup(id) {
    currentGroup = id;
    var group = groupById(id);
    document.getElementById('categoryMenu').style.display = 'none';
    document.getElementById('categoryDetail').hidden = false;
    document.getElementById('categoryEnglish').textContent = group.en;
    document.getElementById('categoryTitle').textContent = group.label;
    document.getElementById('query').value = '';
    document.getElementById('model').value = '';
    renderCategory();
    document.getElementById('categoryDetail').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function showMenu() {
    currentGroup = null;
    document.getElementById('categoryDetail').hidden = true;
    document.getElementById('categoryMenu').style.display = '';
    renderCategory();
  }

  window.render = renderCategory;
  window.renderFilters = function () {};
  document.getElementById('query').oninput = renderCategory;
  document.getElementById('model').onchange = renderCategory;
  document.getElementById('clear').onclick = function () { document.getElementById('query').value = ''; document.getElementById('model').value = ''; renderCategory(); };
  document.getElementById('categoryBack').onclick = showMenu;
  renderMenu();
  renderCategory();
})();

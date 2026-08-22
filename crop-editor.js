/* カード画像の表示位置を、このブラウザ内で調整・保存する簡易エディター */
(function () {
  var cropStorageKey = 'tsukimiyaCropPositions';
  var cropPositions = JSON.parse(localStorage.getItem(cropStorageKey) || '{}');

  var cropStyle = document.createElement('style');
  cropStyle.textContent = `
    .crop-open{color:#174385;background:#f7faff;border-color:#bed2f5}
    .crop-editor{max-width:620px}.crop-editor h2{font-family:serif;margin:0 0 6px}
    .crop-editor .crop-help{margin:0 0 18px;color:#5d6d91;font-size:.82rem;line-height:1.65}
    .crop-preview{height:230px;position:relative;overflow:hidden;border-radius:12px;background:#11275a;border:1px solid #cbd9f1}
    .crop-preview:after{content:'';position:absolute;inset:12px;border:1px solid rgba(255,255,255,.65);border-radius:7px;pointer-events:none}
    .crop-preview img{display:block;width:100%;height:100%;object-fit:cover}
    .crop-control{display:grid;grid-template-columns:76px 1fr 42px;align-items:center;gap:10px;margin-top:14px;font-size:.8rem;color:#304e86}
    .crop-control input{accent-color:#214c9a}.crop-control output{text-align:right;color:#5d6d91;font-variant-numeric:tabular-nums}
    .crop-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:20px}.crop-actions button{border:1px solid #cbd9f1;border-radius:8px;padding:9px 13px;font-weight:bold;font-size:.78rem}.crop-actions .crop-save{background:#0c2460;color:#fff;border-color:#0c2460}.crop-actions .crop-reset{background:#fff;color:#304e86}
  `;
  document.head.appendChild(cropStyle);

  var editor = document.createElement('dialog');
  editor.id = 'cropDialog';
  editor.innerHTML = `<div class="modal crop-editor">
    <button class="close" type="button" aria-label="閉じる">×</button>
    <h2 id="cropTitle">イラスト位置を調整</h2>
    <p class="crop-help">プレビュー内で見せたい位置に、横・縦のスライダーを動かしてください。保存すると、このブラウザでは次回以降も同じ位置で表示されます。</p>
    <div class="crop-preview"><img id="cropPreviewImage" alt="トリミングのプレビュー"></div>
    <label class="crop-control"><span>左右</span><input id="cropX" type="range" min="0" max="100" value="50"><output id="cropXValue">50%</output></label>
    <label class="crop-control"><span>上下</span><input id="cropY" type="range" min="0" max="100" value="50"><output id="cropYValue">50%</output></label>
    <div class="crop-actions"><button class="crop-reset" type="button">初期位置に戻す</button><button class="crop-save" type="button">この位置で保存</button></div>
  </div>`;
  document.body.appendChild(editor);

  var activeIndex = null;
  var previewImage = document.getElementById('cropPreviewImage');
  var xSlider = document.getElementById('cropX');
  var ySlider = document.getElementById('cropY');
  var xValue = document.getElementById('cropXValue');
  var yValue = document.getElementById('cropYValue');

  function getPosition(item) {
    return cropPositions[item.title] || { x: 50, y: 50 };
  }
  function updatePreview() {
    previewImage.style.objectPosition = xSlider.value + '% ' + ySlider.value + '%';
    xValue.textContent = xSlider.value + '%';
    yValue.textContent = ySlider.value + '%';
  }

  window.openCropEditor = function (index) {
    var item = data[index];
    if (!item || !item.image) {
      toast('このカードには調整できる画像がありません。');
      return;
    }
    activeIndex = index;
    var position = getPosition(item);
    document.getElementById('cropTitle').textContent = item.title + '：イラスト位置を調整';
    previewImage.src = item.image;
    previewImage.alt = item.title + 'のトリミングプレビュー';
    xSlider.value = position.x;
    ySlider.value = position.y;
    updatePreview();
    editor.showModal();
  };

  xSlider.addEventListener('input', updatePreview);
  ySlider.addEventListener('input', updatePreview);
  editor.querySelector('.close').addEventListener('click', function () { editor.close(); });
  editor.querySelector('.crop-reset').addEventListener('click', function () {
    xSlider.value = 50;
    ySlider.value = 50;
    updatePreview();
  });
  editor.querySelector('.crop-save').addEventListener('click', function () {
    var item = data[activeIndex];
    cropPositions[item.title] = { x: Number(xSlider.value), y: Number(ySlider.value) };
    localStorage.setItem(cropStorageKey, JSON.stringify(cropPositions));
    editor.close();
    render();
    toast('イラスト位置を保存しました');
  });

  card = function (item, index) {
    var isSaved = saved.includes(index);
    var position = getPosition(item);
    var imageHtml = item.image ? '<img src="' + item.image + '" alt="' + item.title + 'の作例" style="object-position:' + position.x + '% ' + position.y + '%">' : '';
    return `<article class="card"><div class="thumb ${item.klass}${item.image ? ' with-image' : ''}">${imageHtml}</div><div class="card-body"><div class="meta"><span>${item.model}</span><span>PROMPT ${String(index + 1).padStart(2, '0')}</span></div><h3>${item.title}</h3><p>${item.desc}</p><div class="chips">${item.tags.map(tag => `<span class="chip">#${tag}</span>`).join('')}</div><div class="buttons"><button class="copy" onclick="copy(${index},this)">コピー</button><button class="details" onclick="detail(${index})">詳細を見る</button><button class="crop-open" onclick="openCropEditor(${index})">画像位置</button><button class="save ${isSaved ? 'is-saved' : ''}" onclick="toggle(${index})" aria-label="${item.title}を保存">${isSaved ? '♥' : '♡'}</button></div></div></article>`;
  };
  render();
})();

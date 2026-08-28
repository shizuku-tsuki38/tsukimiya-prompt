/* うちの子ドーナツ診断 */
(function () {
  var data = window.TSUKIMIYA_PROMPTS;
  if (!Array.isArray(data)) return;

  var item = {
    title: 'うちの子ドーナツ診断',
    model: 'ChatGPT',
    cat: '診断',
    tags: ['ドーナツ', 'ミスタードーナツ', 'キャラクター診断', 'スイーツファッション'],
    klass: 'cafe',
    image: 'assets/uchinoko-donut-diagnosis.jpe',
    desc: 'キャラクターに最も似合うドーナツをAIが選び、商品モチーフ衣装と雑誌特集風ビジュアルに仕上げる診断プロンプト。',
    prompt: 'プロンプトを読み込み中です。少し待ってからコピーしてください。'
  };

  data.push(item);

  fetch('assets/uchinoko-donut-diagnosis.txt')
    .then(function (response) {
      if (!response.ok) throw new Error('Prompt file could not be loaded.');
      return response.text();
    })
    .then(function (prompt) { item.prompt = prompt; })
    .catch(function () {
      item.prompt = '【うちの子ドーナツ診断】\n\n添付キャラクターを最優先で参照し、その子に最も似合うドーナツをAIが診断。選ばれたドーナツをモチーフにした衣装と、雑誌特集風のビジュアルを制作してください。';
    });
}());

data.push({
  title:'てるてるレインコート', model:'ChatGPT', cat:'衣装', klass:'sky', image:'assets/teruteru-raincoat.png',
  tags:['レインコート','てるてる坊主','雨','2.5D'],
  desc:'てるてる坊主風の白いレインポンチョを主役に、雨の日の可愛い衣装を描くプロンプト。',
  prompt:String.raw`添付されたキャラクターを最優先の参照として使用し、顔立ち、髪型、髪色、瞳、体型、身体バランス、髪飾り、アクセサリー、キャラクターらしさを維持してください。添付イラストの衣装は使わず、以下の完全新規衣装へ変更してください。

白を基調とした、てるてる坊主風のオーバーサイズフード付きレインポンチョ。大きく広がる白いフード、フード上部の小さく可愛い顔の装飾（黒い丸目、小さなピンクの頬、控えめな口）、ゆったりしたAライン、大きめサイズ、幅広の袖、前面の白いスナップボタン、自然に広がる裾。余計な装飾は増やさないでください。

薄く柔らかな白い防水素材で、透けない不透明な質感。わずかな光沢、柔らかな反射、細かな水滴、自然なしわ、湿度を感じる質感を描き、硬いプラスチックではなく柔らかなビニールと布の中間にしてください。

真正面の静止立ちではなく、可愛い動きのある瞬間。強めのダッチアングル、カメラに近い手や腕をやや大きくする自然な遠近感を使い、顔や身体は歪めないでください。背景は明るい純白〜オフホワイトのミニマルなスタジオで、足元と背後に柔らかな落ち影を入れて接地感を出してください。

柔らかなハイキー照明で、白飛びさせずポンチョの立体感を残してください。顔には補助光、髪にはリムライト。高品質な2.5Dアニメイラスト、繊細な線画、滑らかな立体感、polished cel-shading、smooth gradients、cinematic depth、dynamic perspective、precise anatomy、crystal-clear high-resolution rendering。過度な3DCG感、フォトリアル表現、文字、ロゴ、透かしは避けてください。3:4 vertical composition。`
});
if (typeof window.render === 'function') window.render();
var costumeBadge = document.querySelector('[data-group="costume"] .category-count');
if (costumeBadge) costumeBadge.textContent = '2 PROMPTS';

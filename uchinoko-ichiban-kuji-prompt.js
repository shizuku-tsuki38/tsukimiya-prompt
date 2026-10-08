data.push({
  title:'うちのこ一番くじ', model:'ChatGPT', cat:'診断', klass:'moon', image:'assets/uchinoko-ichiban-kuji.png',
  tags:['一番くじ','グッズ診断','商品企画','販促ポスター'],
  desc:'キャラクター専用の一番くじ商品ラインナップを診断・企画し、豪華な店頭販促ポスターにするプロンプト。',
  prompt:String.raw`添付されたキャラクターイラストを唯一かつ最優先のキャラクター参照として使用してください。顔立ち、髪型、髪色、瞳、表情の雰囲気、アクセサリー、体型、キャラクター性、世界観を忠実に維持してください。

「もしこのキャラクターをテーマにした一番くじが発売されたら？」というテーマで豪華な店頭販促ポスターを制作してください。主役はキャラクターの一枚絵ではなく実際の商品ラインナップです。A賞を最大の目玉商品として最も大きく目立たせ、豪華感、存在感、高級感、欲しくなる魅力が伝わる大型展示品として描写してください。

【PRIZE LINEUP】
A賞・B賞・C賞・D賞・E賞・F賞・ラストワン賞の7種類を企画してください。フィギュア、ぬいぐるみ、アクリルスタンド、タペストリー、グッズセット、アクセサリー、雑貨、コレクションアイテムなどからキャラクターに最適な商品を考案してください。B〜F賞は種類や用途が異なる集めたくなる商品、ラストワン賞はA賞とは違う特別な限定仕様にしてください。

【PRODUCT DISPLAY】
各賞の商品を実際の商品見本として大きく描写し、形状、素材感、サイズ感、パッケージ、デザイン、キャラクター絵柄が分かるようにしてください。A賞は中央の最大エリア、B〜F賞も商品が見えるサイズで配置してください。

【POSTER LAYOUT】
上部にくじタイトル、サブタイトル、キャッチコピー。中央にA賞。周囲にB〜F賞。下部または端にラストワン賞、価格表記、短いキャンペーンコピーを配置してください。各賞は「賞名」「商品名」が一目で分かる整理されたデザインにしてください。

【TEXT RULE】
くじタイトル、サブタイトル、A賞〜F賞、ラストワン賞、各商品名、価格表記、短いキャッチコピーを、読みやすい日本語で表示してください。文字化け、ロゴ、透かしは禁止です。

premium high quality anime illustration、luxury character lottery poster design、official merchandise showcase style、detailed product display、clean typography、cinematic lighting、high quality packaging design、colorful but organized layout。実際に販売されているような豪華で保存したくなる架空の一番くじ販促ポスターにしてください。`
});
if (typeof window.render === 'function') window.render();
var diagnosisBadge = document.querySelector('[data-group="diagnosis"] .category-count');
if (diagnosisBadge) diagnosisBadge.textContent = '5 PROMPTS';

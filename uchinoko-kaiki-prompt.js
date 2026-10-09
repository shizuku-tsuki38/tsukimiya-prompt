data.push({
  title:'うちの子怪異化', model:'ChatGPT', cat:'アニメ・ゲーム', klass:'city', image:'assets/uchinoko-kaiki.png',
  tags:['怪異化','動物モチーフ','章扉風','幻想'],
  desc:'キャラクター専用の動物怪異と、前衛的な章扉風ポスターをデザインするプロンプト。',
  prompt:String.raw`【キャラ名】
【名前を入力してください】
【怪異指定 任意】
【怪異を入力してください】

添付キャラクターを最優先の参照として使用し、そのキャラクター専用の動物怪異化ビジュアルを作成してください。3:4縦構図、オリジナルの前衛的なアニメ作品の章扉風ポスターとして制作してください。怪異指定があれば優先し、未入力なら外見や雰囲気から動物モチーフのオリジナル怪異を考案してください。

顔立ち、髪型、髪色、瞳、体型、装飾品、キャラクター性を維持し、元衣装は怪異の性質に合わせた専用デザインへ変更してください。怪異によって存在そのものが変質した姿にし、比較用キャラクターや追加人物は描かないでください。動物の特徴は怪異衣装、身体変化、影、色彩、周囲の演出へ反映し、着ぐるみにはしないでください。

大胆な余白、非対称構図、斜めの画面設計、限定色、強い色面、図形的な影、象徴的な配置を用いたオリジナルの前衛グラフィックにしてください。背景は現実の場所ではなく、不思議で知的な記号的空間とし、元になった動物を影または抽象的なシルエットで描いてください。特定作品の固有ロゴ、公式フォント、既存章扉デザインは複製しないでください。

首を大きく傾け、身体はやや後ろ向き、顔をカメラ側へ振り向け、瞳だけこちらを見る構図。強いダッチアングル、カメラ目線、大胆な遠近感を使用し、人体は自然に保ってください。顔と瞳を最優先した映画的な主光、繊細なリムライト、深い影、2.5Dアニメの奥行き、神秘的で不穏な空気を表現してください。

画像内の文字はタイトル（入力名＋怪異名以外を付けない）と、短い文学的な紹介文のみ。文字、ロゴ、透かしの過剰な追加は避けてください。premium high quality anime illustration, sharp stylish anime design, cinematic lighting, dynamic perspective, deep shadows, clean line art, detailed eyes, polished cel shading, high resolution, graphic poster design。`
});
if (typeof window.render === 'function') window.render();
var gameBadge = document.querySelector('[data-group="game"] .category-count');
if (gameBadge) gameBadge.textContent = '6 PROMPTS';

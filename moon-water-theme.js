/* 月明かりと水面をほのかに感じる、主張しない背景テーマ */
(function () {
  var style = document.createElement('style');
  style.textContent = `
    :root{--navy:#263b52;--night:#263b52;--blue:#6c96b6;--ice:#eef6f8;--gold:#c6ab77;--paper:#f7faf9;--text:#2c3c4a;--muted:#71818d;--line:#d7e3e5;--glass:rgba(255,255,255,.76)}
    body{background-color:#f1f7f7;background-image:radial-gradient(circle at 82% 8%,rgba(255,255,252,.94) 0 4.8rem,rgba(225,237,237,.72) 4.9rem 5.1rem,transparent 5.2rem),radial-gradient(ellipse at 80% 10%,rgba(202,220,224,.45) 0 10rem,transparent 18rem),repeating-radial-gradient(ellipse at 49% 116%,transparent 0 17px,rgba(132,177,190,.1) 18px 19px,transparent 20px 36px),linear-gradient(180deg,#f9fbfa 0%,#eef5f5 48%,#e1eeee 100%);background-attachment:fixed}
    .header{background:rgba(249,252,251,.86);border-bottom-color:rgba(170,195,198,.58);box-shadow:0 2px 14px rgba(48,78,87,.045)}
    .nav{color:#2c3c4a}.logo small{color:#7b8d96}.links a:hover{color:#608ca7}.saved-link{border-color:#c8d9dc;background:rgba(255,255,255,.56)}.saved-link b{background:#789cb2;color:#fff}
    .hero{color:#2c3c4a}.hero .eyebrow{color:#668ba4}.hero h1{color:#2c3c4a}.hero p{color:#6d7e89}.hero-copy:before,.hero-copy:after{border-color:#cadbdd}.primary{background:#466b84;border-color:#466b84}.secondary{border-color:#c5d8db;color:#3d6077;background:rgba(255,255,255,.54)}.hero img{border-color:#d1e0e1;box-shadow:9px 12px 0 rgba(167,202,208,.2),0 15px 35px rgba(48,80,88,.1)}
    .finder{border-color:#dce8e9;box-shadow:0 10px 28px rgba(64,101,109,.055)}.filter.active,.copy{background:#466b84;border-color:#466b84}.card{border-color:#dce8e9;box-shadow:0 8px 20px rgba(57,93,101,.06)}.card:hover{box-shadow:0 17px 30px rgba(57,93,101,.12)}.about{background:linear-gradient(135deg,#526d7e,#7698a3);border-color:#9db7bc}.about .eyebrow{color:#f2dca5}footer{background:#3c5565}
    @media(max-width:760px){body{background-color:#f1f7f7;background-image:radial-gradient(circle at 88% 6%,rgba(255,255,252,.9) 0 3.3rem,rgba(225,237,237,.64) 3.4rem 3.55rem,transparent 3.6rem),repeating-radial-gradient(ellipse at 50% 118%,transparent 0 16px,rgba(132,177,190,.09) 17px 18px,transparent 19px 34px),linear-gradient(#f9fbfa,#e8f2f2)}}
  `;
  document.head.appendChild(style);
})();

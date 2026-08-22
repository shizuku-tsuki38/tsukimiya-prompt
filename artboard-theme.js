/* 無機質なイラスト制作アートボード風の背景テーマ */
(function () {
  var style = document.createElement('style');
  style.textContent = `
    :root{--navy:#252a32;--night:#252a32;--blue:#df6f52;--ice:#f6f4ed;--gold:#d8a95d;--paper:#f5f4f0;--text:#292d33;--muted:#74777b;--line:#d8d9d5;--glass:rgba(255,255,255,.77)}
    body{background-color:#f5f4f0;background-image:linear-gradient(rgba(117,122,124,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(117,122,124,.12) 1px,transparent 1px),linear-gradient(135deg,transparent 0 49.8%,rgba(223,111,82,.14) 49.9% 50.1%,transparent 50.2%),radial-gradient(circle at 84% 16%,rgba(223,111,82,.15) 0 7.5rem,transparent 7.6rem),radial-gradient(circle at 10% 68%,rgba(100,163,151,.15) 0 10rem,transparent 10.1rem);background-size:28px 28px,28px 28px,430px 430px,auto,auto}
    .header{background:rgba(246,245,240,.9);border-bottom:1px solid #caccC8;box-shadow:0 3px 15px rgba(20,25,29,.05)}
    .nav{color:#292d33}.logo small{color:#74777b}.links a{opacity:1}.links a:hover{color:#df6f52}.saved-link{border-color:#bfc2bf;background:rgba(255,255,255,.5)}.saved-link b{background:#df6f52;color:#fff}
    .hero{color:#292d33;padding-top:46px}.hero-copy{position:relative;padding:15px 22px 7px}.hero-copy:before,.hero-copy:after{content:'';position:absolute;z-index:-1;border:1px solid #c7c8c4}.hero-copy:before{width:82px;height:82px;left:6%;top:-9px;border-right:0;border-bottom:0}.hero-copy:after{width:48px;height:48px;right:9%;bottom:-2px;border-left:0;border-top:0}.hero .eyebrow{color:#c35d44}.hero h1{color:#292d33}.hero p{color:#676b71}.primary{background:#292d33;border-color:#292d33;color:#fff}.secondary{color:#292d33;background:rgba(255,255,255,.56);border-color:#bfc2bf}.hero img{border-color:#c4c6c4;box-shadow:12px 12px 0 rgba(223,111,82,.18),0 15px 35px rgba(35,40,43,.13)}
    main{position:relative}.finder{border-color:#d9d9d4;box-shadow:0 10px 30px rgba(30,35,38,.06)}.about{background:linear-gradient(125deg,#2b3033,#454a4b);border:1px solid #697072}.about .eyebrow{color:#f0bd72}footer{background:#252a2d;color:#d8dcda}.footer-logo{color:#fff}
    .filter.active{background:#292d33;border-color:#292d33}.copy{background:#292d33;border-color:#292d33}.card{border-color:#d6d7d4;box-shadow:0 8px 20px rgba(35,40,43,.07)}.card:hover{box-shadow:0 17px 30px rgba(35,40,43,.13)}
    @media(max-width:760px){body{background-color:#f5f4f0;background-image:linear-gradient(rgba(117,122,124,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(117,122,124,.1) 1px,transparent 1px),radial-gradient(circle at 100% 12%,rgba(223,111,82,.13) 0 6rem,transparent 6.1rem);background-size:25px 25px,25px 25px,auto}.hero{padding-top:28px}}
  `;
  document.head.appendChild(style);
})();

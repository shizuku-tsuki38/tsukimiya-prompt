(function () {
  var categoryMenu = document.getElementById('categoryMenu');
  if (!categoryMenu) return;

  var style = document.createElement('style');
  style.textContent = '.affiliate-banner{max-width:720px;margin:34px auto 6px;padding:18px 16px 20px;text-align:center;border:1px solid #d6e0f3;border-radius:18px;background:linear-gradient(135deg,#f8fbff,#edf4ff);box-shadow:0 8px 22px rgba(20,56,124,.07)}.affiliate-banner__label{margin:0 0 11px;color:#697a9c;font-size:.68rem;font-weight:bold;letter-spacing:.08em}.affiliate-banner__creative{line-height:0}.affiliate-banner__creative>a{display:inline-block;max-width:100%}.affiliate-banner__creative>a img{display:block;max-width:100%;height:auto;margin:0 auto;border-radius:6px}.affiliate-banner__creative>img{position:absolute;width:1px;height:1px;overflow:hidden}@media(max-width:760px){.affiliate-banner{margin-top:25px;padding:15px 10px 17px}}';
  document.head.appendChild(style);

  var section = document.createElement('aside');
  section.className = 'affiliate-banner';
  section.setAttribute('aria-label', '広告');
  section.innerHTML = '<p class="affiliate-banner__label">PR｜アフィリエイト広告を利用しています</p><div class="affiliate-banner__creative"><a href="https://px.a8.net/svt/ejp?a8mat=4BACLA+3SXPWY+5VEK+5YZ75" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260823358230&wid=001&eno=01&mid=s00000027398001003000&mc=1"></a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4BACLA+3SXPWY+5VEK+5YZ75" alt=""></div>';
  categoryMenu.insertAdjacentElement('afterend', section);
})();

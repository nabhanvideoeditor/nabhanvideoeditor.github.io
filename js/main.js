/* =====================================================================
   موقع نبهان — المنطق والتفاعل والمؤثرات
   كل المحتوى بييجي من js/content.js
   ===================================================================== */
(function () {
  'use strict';

  var S = SITE;

  /* ------------------------- أدوات مساعدة ------------------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // نص ثنائي اللغة
  function L(obj) {
    if (obj == null) return '';
    if (typeof obj === 'object') return obj[currentLang] != null ? obj[currentLang] : (obj.en != null ? obj.en : '');
    return obj;
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtTime(sec) {
    sec = Math.max(0, sec || 0);
    var f = Math.floor((sec % 1) * 24);
    var s = Math.floor(sec) % 60;
    var m = Math.floor(sec / 60) % 60;
    var h = Math.floor(sec / 3600);
    return pad(h) + ':' + pad(m) + ':' + pad(s) + ':' + pad(f);
  }

  /* ------------------------- الأيقونات ------------------------- */
  var ICONS = {
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4.5v15l13-7.5z"/></svg>',
    arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>',
    arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>',
    film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 3v18M17 3v18M2 8h5M2 16h5M17 8h5M17 16h5"/></svg>',
    bezier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20C4 8 20 16 20 4"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="4" r="2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>',
    volume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    volumeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.35 2.4 1.85 4.15 4.25 4.45V10.1c-1.6 0-3.05-.5-4.25-1.35v6.15A5.9 5.9 0 1 1 10.6 9c.35 0 .7.02 1.05.08v2.9a2.95 2.95 0 1 0 2.1 2.82V3z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.3v5.4l4.6-2.7z" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 8.2h2.4V4.7h-2.4c-2.3 0-4.1 1.8-4.1 4.1v2.1H8v3.4h2.4v7h3.5v-7h2.6l.5-3.4h-3.1V9c0-.5.4-.8.6-.8z"/></svg>',
    vimeo: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7.4c-.1 2-1.5 4.7-4.2 8.1-2.8 3.6-5.2 5.4-7.2 5.4-1.2 0-2.2-1.1-3.1-3.4L5.9 12c-.6-2.3-1.3-3.4-2-3.4-.2 0-.7.3-1.6.9L1.3 8.2c1-.9 2-1.8 3-2.7 1.4-1.2 2.4-1.8 3.1-1.9 1.6-.2 2.6.9 3 3.1.4 2.5.7 4 .9 4.6.5 2.3 1 3.4 1.7 3.4.5 0 1.2-.7 2.1-2.2.9-1.5 1.4-2.6 1.5-3.4.1-1.3-.4-1.9-1.5-1.9-.5 0-1 .1-1.6.4 1.1-3.4 3.1-5.1 6.1-5 2.2.1 3.2 1.5 3.1 4.1z"/></svg>',
    behance: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 11.1c.8-.4 1.3-1.1 1.3-2.1 0-2-1.5-2.9-3.6-2.9H2v11.6h5.1c2.2 0 4-1 4-3.2 0-1.3-.6-2.3-1.9-2.4zM4.6 8.2h1.9c.9 0 1.6.3 1.6 1.3 0 .9-.6 1.3-1.5 1.3H4.6V8.2zm2.1 7.4H4.6v-3h2.2c1.1 0 1.8.5 1.8 1.6 0 1.1-.8 1.4-1.9 1.4zM21.5 8h-5v.9h5V8zM18.9 10.3c-2.5 0-4.1 1.8-4.1 4.2 0 2.5 1.6 4.2 4.2 4.2 1.9 0 3.1-.9 3.7-2.5h-2c-.2.6-.8 1-1.6 1-1 0-1.6-.6-1.7-1.7h5.4v-.6c0-2.5-1.4-4.6-3.9-4.6zm-1.6 3.4c.1-.9.7-1.5 1.6-1.5s1.5.6 1.6 1.5h-3.2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.6H3.6V21h3.3V8.6zM5.2 3.5a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9zM21 13.4c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.8 1-3.3 1.8V8.6H10.2V21h3.3v-6.5c0-1.5.6-2.4 1.9-2.4 1.2 0 1.9.8 1.9 2.4V21H21v-7.6z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-5.9-5.8 5.9H1.5l7.5-8.6L1 3h6.6l4.6 5.4L17.5 3zm-1.1 16.1h1.8L7.7 4.8H5.8l10.6 14.3z"/></svg>'
  };
  function icon(name) { return ICONS[name] || ICONS.video; }

  /* ------------------------- الحالة ------------------------- */
  var currentLang = S.meta.defaultLang || 'ar';
  var currentFilter = 'all';
  var soundOn = S.meta.sound !== false;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  try {
    var savedLang = localStorage.getItem('nabhan-lang');
    if (savedLang === 'ar' || savedLang === 'en') currentLang = savedLang;
    var savedSound = localStorage.getItem('nabhan-sound');
    if (savedSound === '0' || savedSound === '1') soundOn = savedSound === '1';
  } catch (e) {}

  /* ------------------------- المؤثرات الصوتية ------------------------- */
  var audioCtx = null;
  function ac() {
    if (!audioCtx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) { try { audioCtx = new AC(); } catch (e) { audioCtx = null; } }
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }
  function tone(freq, dur, type, gain, delay) {
    if (!soundOn) return;
    var ctx = ac(); if (!ctx) return;
    var t = ctx.currentTime + (delay || 0);
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain || 0.05, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(t); o.stop(t + dur + 0.03);
  }
  function noiseBurst(dur, gain, freq) {
    if (!soundOn) return;
    var ctx = ac(); if (!ctx) return;
    var len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    var src = ctx.createBufferSource(); src.buffer = buf;
    var f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq || 1200; f.Q.value = 0.9;
    var g = ctx.createGain(); g.gain.value = gain || 0.06;
    src.connect(f); f.connect(g); g.connect(ctx.destination);
    src.start();
  }
  // ضوضاء بمرشح متدرج التردد (Whoosh / Cut)
  function sweep(dur, f0, f1, gain, type) {
    if (!soundOn) return;
    var ctx = ac(); if (!ctx) return;
    var t = ctx.currentTime;
    var len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    var src = ctx.createBufferSource(); src.buffer = buf;
    var flt = ctx.createBiquadFilter(); flt.type = type || 'bandpass'; flt.Q.value = 1.1;
    flt.frequency.setValueAtTime(Math.max(40, f0), t);
    flt.frequency.exponentialRampToValueAtTime(Math.max(60, f1), t + dur);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + dur * 0.22);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(flt); flt.connect(g); g.connect(ctx.destination);
    src.start(t); src.stop(t + dur + 0.02);
  }

  var sfx = {
    hover:   function () { tone(2500, .025, 'sine', .012); },
    click:   function () { tone(1250, .05, 'sine', .045); tone(2500, .03, 'sine', .02); },
    toggle:  function () { tone(740, .06, 'triangle', .045); tone(1180, .08, 'triangle', .04, .055); tone(1560, .09, 'triangle', .03, .11); },
    whoosh:  function () { sweep(.3, 260, 2800, .08); tone(180, .12, 'sine', .03, .02); },
    clack:   function () { noiseBurst(.045, .14, 3200); noiseBurst(.035, .1, 1900); tone(150, .09, 'square', .05, .01); tone(95, .12, 'sine', .05, .02); },
    cut:     function () { sweep(.14, 2400, 420, .1, 'highpass'); noiseBurst(.035, .09, 3800); },
    shutter: function () { noiseBurst(.028, .13, 4400); noiseBurst(.028, .11, 2700); tone(85, .1, 'sine', .06, .01); },
    send:    function () { tone(660, .09, 'sine', .05); tone(990, .1, 'sine', .045, .08); tone(1320, .13, 'sine', .04, .16); sweep(.2, 900, 2400, .03, 'highpass'); }
  };

  /* ------------------------- الهيدر ------------------------- */
  function renderHeader() {
    var brand = L(S.meta.brand) || S.meta.brand;
    var owner = L({ ar: S.meta.owner_ar, en: S.meta.owner_en });
    var navLinks = [
      { href: '#work', label: L(S.nav.work) },
      { href: '#services', label: L(S.nav.services) },
      { href: '#arsenal', label: L(S.nav.arsenal) },
      { href: '#contact', label: L(S.nav.contact) }
    ];

    var html = ''
      + '<div class="header-inner">'
      +   '<a class="brand" href="#top" aria-label="' + esc(brand) + '">'
      +     '<img class="brand-logo" src="assets/img/logo.svg" alt="' + esc(brand) + ' logo" width="42" height="42">'
      +     '<span class="brand-text">'
      +       '<span class="brand-name">' + esc(brand) + '</span>'
      +       '<span class="brand-sub">' + esc(owner) + '</span>'
      +     '</span>'
      +   '</a>'
      +   '<nav class="main-nav" aria-label="Main">'
      +     navLinks.map(function (l) { return '<a href="' + l.href + '">' + esc(l.label) + '</a>'; }).join('')
      +   '</nav>'
      +   '<div class="header-actions">'
      +     '<span class="timecode" id="hdrTimecode"><span class="rec"></span><span class="tc-val" id="tcVal">00:00:00:00</span></span>'
      +     '<button class="lang-toggle" id="langToggle" type="button" aria-label="Switch language">'
      +       icon('globe') + '<span id="langLabel">' + (currentLang === 'ar' ? 'EN' : 'عربي') + '</span>'
      +     '</button>'
      +     '<button class="sound-toggle" id="soundToggle" type="button" aria-label="Sound effects" aria-pressed="' + (soundOn ? 'true' : 'false') + '">'
      +       icon(soundOn ? 'volume' : 'volumeOff') + '</button>'
      +     '<button class="palette-btn" id="paletteBtn" type="button" aria-label="Change colour">' + icon('palette') + '</button>'
      +     '<div class="palette-pop" id="palettePop"></div>'
      +     '<a href="#contact" class="btn btn-primary btn-sm header-cta">' + esc(L(S.nav.cta)) + '</a>'
      +     '<button class="menu-btn" id="menuBtn" type="button" aria-label="Menu">' + icon('menu') + '</button>'
      +   '</div>'
      + '</div>'
      + '<div class="mobile-menu" id="mobileMenu">'
      +   navLinks.map(function (l) { return '<a href="' + l.href + '">' + esc(l.label) + '</a>'; }).join('')
      +   '<a href="#contact" class="btn btn-primary">' + esc(L(S.nav.cta)) + '</a>'
      + '</div>';

    $('#siteHeader').innerHTML = html;
    $('#langToggle').addEventListener('click', toggleLang);
    $('#soundToggle').addEventListener('click', toggleSound);
    $('#menuBtn').addEventListener('click', function () { $('#mobileMenu').classList.toggle('is-open'); sfx.click(); });
    $$('#mobileMenu a').forEach(function (a) {
      a.addEventListener('click', function () { $('#mobileMenu').classList.remove('is-open'); });
    });
  }

  function toggleSound() {
    soundOn = !soundOn;
    try { localStorage.setItem('nabhan-sound', soundOn ? '1' : '0'); } catch (e) {}
    var btn = $('#soundToggle');
    if (btn) {
      btn.innerHTML = icon(soundOn ? 'volume' : 'volumeOff');
      btn.setAttribute('aria-pressed', soundOn ? 'true' : 'false');
    }
    if (soundOn) sfx.toggle();
  }

  /* ساعة الوقت الكودي */
  var clockStart = Date.now();
  function startClock() {
    if (reduceMotion) {
      var n = $('#tcVal'); if (n) n.textContent = '00:00:00:00';
      return;
    }
    (function tick() {
      var node = $('#tcVal');
      if (node) node.textContent = fmtTime((Date.now() - clockStart) / 1000);
      requestAnimationFrame(tick);
    })();
  }

  /* ------------------------- الهيرو ------------------------- */
  function words(text, cls) {
    return String(text).split(/\s+/).filter(Boolean).map(function (w, i) {
      return '<span class="w ' + (cls || '') + '" style="animation-delay:' + (i * 55) + 'ms">' + esc(w) + '</span>';
    }).join(' ');
  }

  function renderHero() {
    var stats = S.hero.stats.map(function (st, i) {
      return ''
        + '<div class="stat reveal" style="transition-delay:' + (i * 90) + 'ms">'
        +   '<div class="stat-value" data-value="' + esc(st.value) + '">' + esc(st.value) + '<span class="sfx">' + esc(st.suffix) + '</span></div>'
        +   '<div class="stat-label">' + esc(L({ ar: st.ar, en: st.en })) + '</div>'
        + '</div>';
    }).join('');

    var title = words(L(S.hero.title1)) + ' ' + words(L(S.hero.highlight), 'hl-w');

    return ''
      + '<section class="hero bg-grid" id="top">'
      +   '<div class="hero-frame" aria-hidden="true"><i class="f-tl"></i><i class="f-tr"></i><i class="f-bl"></i><i class="f-br"></i></div>'
      +   '<div class="container">'
      +     '<div class="hero-top">'
      +       '<div class="pill reveal is-active"><span class="pill-dot"></span>' + esc(L(S.hero.badge)) + '</div>'
      +       '<div class="slate reveal is-active"><span class="dot"></span>' + esc(L(S.montage.scene)) + ' <b>01</b> &middot; ' + esc(L(S.montage.take)) + ' <b>01</b> &middot; ' + esc(L(S.montage.roll)) + ' <b>A</b></div>'
      +     '</div>'
      +     '<h1 class="hero-title">' + title + '</h1>'
      +     '<p class="hero-sub reveal is-active">' + esc(L(S.hero.subtitle)) + '</p>'
      +     '<div class="hero-cta reveal is-active">'
      +       '<button class="btn btn-primary" id="showreelBtn" type="button">'
      +         '<span class="play-badge">' + icon('play') + '</span>' + esc(L(S.hero.btn_reel))
      +       '</button>'
      +       '<a class="btn btn-ghost" href="#work">' + esc(L(S.hero.btn_work)) + ' ' + icon('arrowDown') + '</a>'
      +     '</div>'
      +     '<div class="hero-audio reveal is-active">'
      +       '<div class="waveform">' + waveformBars(26) + '</div>'
      +       '<span class="wave-label">' + (currentLang === 'ar' ? 'هندسة صوتية · SFX' : 'SOUND DESIGN · SFX') + '</span>'
      +     '</div>'
      +     '<div class="stats">' + stats + '</div>'
      +     '<div class="timeline-ruler" aria-hidden="true"><span class="track"><span class="playhead"></span></span></div>'
      +   '</div>'
      + '</section>';
  }

  /* ------------------------- الشريط المتحرك ------------------------- */
  function renderMarquee() {
    var half = S.montage.marquee.map(function (it) {
      return '<span class="marquee-item">' + esc(L(it)) + '</span>';
    }).join('');
    return '<div class="marquee" aria-hidden="true"><div class="marquee-track">' + half + half + '</div></div>';
  }

  /* ------------------------- تايم لاين المونتاج (خلفية) ------------------------- */
  function renderEditTimeline() {
    var tracks = [
      { label: 'V1', type: 'v', clips: [ { n: 'CAM A', s: 0, w: 22 }, { n: 'B-ROLL', s: 25, w: 16 }, { n: 'CAM B', s: 44, w: 22 }, { n: 'STILLS', s: 69, w: 16 } ] },
      { label: 'V2', type: 'g', clips: [ { n: 'LOWER 3RD', s: 6, w: 16 }, { n: 'HUD', s: 30, w: 20 }, { n: 'LOGO', s: 70, w: 14 } ] },
      { label: 'A1', type: 'a', clips: [ { n: 'DIALOGUE', s: 0, w: 32 }, { n: 'MUSIC', s: 32, w: 44 }, { n: 'SFX', s: 58, w: 32 } ] },
      { label: 'A2', type: 'a', clips: [ { n: 'AMB', s: 10, w: 80 } ] }
    ];
    var tickAt = [0, 5, 10, 15, 20, 25, 30];
    var ticks = tickAt.map(function (t) {
      var cls = t === 0 ? 'first' : (t === 30 ? 'last' : '');
      return '<span class="tl-tick ' + cls + '" style="left:' + (t / 30 * 100) + '%">' + (t < 10 ? '0' : '') + t + ':00</span>';
    }).join('');
    var rows = tracks.map(function (tr) {
      var clips = tr.clips.map(function (c) {
        return '<span class="tl-clip tl-clip--' + tr.type + '" style="left:' + c.s + '%;width:' + c.w + '%">' + c.n + '</span>';
      }).join('');
      return '<div class="tl-track"><span class="tl-label">' + tr.label + '</span><div class="tl-lane">' + clips + '</div></div>';
    }).join('');
    return ''
      + '<div class="edit-timeline" aria-hidden="true">'
      +   '<div class="tl-ruler">' + ticks + '</div>'
      +   '<div class="tl-tracks">' + rows + '</div>'
      +   '<div class="tl-playhead"></div>'
      + '</div>';
  }

  /* ------------------------- الأعمال ------------------------- */
  function renderWork() {
    var filters = [
      { key: 'all', label: L(S.work.filters.all) },
      { key: 'reels', label: L(S.work.filters.reels) },
      { key: 'documentary', label: L(S.work.filters.documentary) },
      { key: 'motion', label: L(S.work.filters.motion) }
    ];

    var head = ''
      + '<div class="section-head section-head--split">'
      +   '<div>'
      +     '<p class="eyebrow"><span class="scene-tag"><i></i>SCENE 01</span>' + esc(L(S.work.eyebrow)) + '</p>'
      +     '<h2 class="section-title">' + esc(L(S.work.title)) + '</h2>'
      +   '</div>'
      +   '<div class="filter-tabs" id="filterTabs" role="tablist">'
      +     filters.map(function (f) {
              return '<button class="filter-btn' + (f.key === currentFilter ? ' is-active' : '') + '" data-filter="' + f.key + '" type="button">' + esc(f.label) + '</button>';
            }).join('')
      +   '</div>'
      + '</div>';

    var grid = '<div class="work-grid" id="portfolioGrid"></div>';

    var note = S.work.showNote
      ? '<div class="work-note">' + icon('info') + '<span>' + esc(L(S.work.note)) + '</span></div>'
      : '';

    return ''
      + '<section class="section" id="work">'
      +   '<div class="container">'
      +     head + grid + note
      +   '</div>'
      + '</section>';
  }

  function renderPortfolio() {
    var grid = $('#portfolioGrid');
    if (!grid) return;
    var list = currentFilter === 'all' ? S.work.projects : S.work.projects.filter(function (p) { return p.category === currentFilter; });

    if (!list.length) {
      grid.innerHTML = '<div class="work-note">' + icon('info') + '<span>' + esc(L(S.work.note)) + '</span></div>';
      observeReveals();
      return;
    }

    grid.innerHTML = list.map(function (p, i) {
      var tools = (p.tools || []).map(function (t) { return '<span class="tool-chip">' + esc(t) + '</span>'; }).join('');
      var camLabel = currentLang === 'ar' ? 'كاميرا ' : 'CAM ';
      var cam = '<span class="tool-chip cam">' + camLabel + String.fromCharCode(65 + (i % 4)) + '</span>';
      return ''
        + '<article class="work-card reveal-zoom" data-id="' + esc(p.id) + '" role="button" tabindex="0" aria-label="' + esc(L(p.title)) + '">'
        +   '<div class="work-thumb">'
        +     '<img src="' + esc(p.thumb) + '" alt="' + esc(L(p.title)) + '" loading="lazy">'
        +     '<div class="thumb-badges">'
        +       '<span class="badge">' + esc(p.aspectRatio) + '</span>'
        +       '<span class="badge badge--accent">' + esc(p.views) + '</span>'
        +     '</div>'
        +     '<div class="thumb-play"><span>' + icon('play') + '</span></div>'
        +   '</div>'
        +   '<div class="work-body">'
        +     '<div class="work-tag">' + esc(L(p.tag)) + '</div>'
        +     '<h3 class="work-title">' + esc(L(p.title)) + '</h3>'
        +     '<p class="work-desc">' + esc(L(p.challenge)) + '</p>'
        +   '</div>'
        +   '<div class="work-foot">'
        +     '<div class="work-tools">' + tools + cam + '</div>'
        +     '<span class="work-watch">' + esc(L(S.work.card_watch)) + ' ' + icon('arrowUpRight') + '</span>'
        +   '</div>'
        + '</article>';
    }).join('');

    $$('.work-card', grid).forEach(function (card) {
      card.addEventListener('click', function () { openProjectModal(card.dataset.id); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(card.dataset.id); }
      });
    });
    observeReveals();
    initTilt();
  }

  /* ------------------------- الخدمات ------------------------- */
  function renderServices() {
    var items = S.services.items.map(function (it) {
      var feats = it.features.map(function (f) {
        return '<li>' + icon('check') + '<span>' + esc(L(f)) + '</span></li>';
      }).join('');
      return ''
        + '<div class="svc-card reveal' + (it.popular ? ' svc-card--featured' : '') + '">'
        +   (it.popular ? '<span class="svc-flag">' + esc(L(S.services.popular)) + '</span>' : '')
        +   '<div class="svc-icon">' + icon(it.icon) + '</div>'
        +   '<div class="svc-num">' + esc(it.num) + ' / ' + esc(it.ratio) + '</div>'
        +   '<h3 class="svc-title">' + esc(L(it.title)) + '</h3>'
        +   '<p class="svc-desc">' + esc(L(it.desc)) + '</p>'
        +   '<ul class="svc-feats">' + feats + '</ul>'
        +   '<a href="#contact" class="btn ' + (it.popular ? 'btn-primary' : 'btn-ghost') + '" data-type="' + esc(L(it.title)) + '">' + esc(L(S.services.cta)) + '</a>'
        + '</div>';
    }).join('');

    return ''
      + '<section class="section section--surface" id="services">'
      +   '<div class="container">'
      +     '<div class="section-head reveal">'
      +       '<p class="eyebrow"><span class="scene-tag"><i></i>SCENE 02</span>' + esc(L(S.services.eyebrow)) + '</p>'
      +       '<h2 class="section-title">' + esc(L(S.services.title)) + '</h2>'
      +       '<p class="section-sub">' + esc(L(S.services.subtitle)) + '</p>'
      +     '</div>'
      +     '<div class="svc-grid">' + items + '</div>'
      +   '</div>'
      + '</section>';
  }

  /* ------------------------- الأدوات وخطوات العمل ------------------------- */
  function renderArsenal() {
    var tools = S.tools.items.map(function (t) {
      return ''
        + '<div class="tool-card reveal-left">'
        +   '<div class="tool-top">'
        +     '<div class="tool-logo" style="color:' + esc(t.color) + '">' + esc(t.abbr) + '</div>'
        +     (t.badge ? '<span class="tool-badge">' + esc(t.badge) + '</span>' : '')
        +   '</div>'
        +   '<h3 class="tool-name">' + esc(t.name) + '</h3>'
        +   '<p class="tool-desc">' + esc(L(t.desc)) + '</p>'
        + '</div>';
    }).join('');

    var steps = S.workflow.steps.map(function (st) {
      return ''
        + '<div class="wf-step reveal">'
        +   '<span class="wf-num">' + esc(st.num) + '</span>'
        +   '<h3 class="wf-title">' + esc(L(st.title)) + '</h3>'
        +   '<p class="wf-desc">' + esc(L(st.desc)) + '</p>'
        + '</div>';
    }).join('');

    return ''
      + '<section class="section" id="arsenal">'
      +   '<div class="container">'
      +     '<div class="section-head section-head--split reveal">'
      +       '<div>'
      +         '<p class="eyebrow"><span class="scene-tag"><i></i>SCENE 03</span>' + esc(L(S.tools.eyebrow)) + '</p>'
      +         '<h2 class="section-title">' + esc(L(S.tools.title)) + '</h2>'
      +       '</div>'
      +       '<p class="section-sub">' + esc(L(S.tools.subtitle)) + '</p>'
      +     '</div>'
      +     '<div class="arsenal-tools">' + tools + '</div>'
      +     '<div class="section-head reveal">'
      +       '<p class="eyebrow"><span class="scene-tag"><i></i>SCENE 04</span>' + esc(L(S.workflow.eyebrow)) + '</p>'
      +       '<h2 class="section-title">' + esc(L(S.workflow.title)) + '</h2>'
      +     '</div>'
      +     '<div class="wf-grid">' + steps + '</div>'
      +   '</div>'
      + '</section>';
  }

  /* ------------------------- التواصل ------------------------- */
  function renderContact() {
    var f = S.contact.form;
    var types = f.types.map(function (t) {
      return '<option value="' + esc(L(t)) + '">' + esc(L(t)) + '</option>';
    }).join('');

    var socials = S.contact.socials.map(function (s) {
      return '<a class="social-link" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(s.label) + '" title="' + esc(s.label) + '">' + icon(s.icon) + '</a>';
    }).join('');

    return ''
      + '<section class="section section--surface" id="contact">'
      +   '<div class="contact-wave" aria-hidden="true">' + waveformBars(44) + '</div>'
      +   '<div class="container">'
      +     '<div class="section-head reveal">'
      +       '<p class="eyebrow"><span class="scene-tag"><i></i>SCENE 05</span>' + esc(L(S.contact.eyebrow)) + '</p>'
      +       '<h2 class="section-title">' + esc(L(S.contact.title)) + '</h2>'
      +       '<p class="section-sub">' + esc(L(S.contact.subtitle)) + '</p>'
      +     '</div>'
      +     '<div class="contact-grid">'
      +       '<div class="reveal">'
      +         '<div class="contact-channels">'
      +           '<a class="channel" href="https://wa.me/' + esc(S.contact.whatsapp_number) + '" target="_blank" rel="noopener noreferrer">'
      +             '<span class="channel-main">'
      +               '<span class="channel-icon">' + icon('whatsapp') + '</span>'
      +               '<span><span class="channel-label">' + esc(L(S.contact.whatsapp_label)) + '</span><br>'
      +               '<span class="channel-value">' + esc(S.contact.whatsapp_display) + '</span></span>'
      +             '</span>'
      +             ' ' + icon('arrowUpRight')
      +           '</a>'
      +           '<button class="channel" id="emailChannel" type="button" style="width:100%;text-align:start;font:inherit;color:inherit;background:var(--surface);cursor:pointer">'
      +             '<span class="channel-main">'
      +               '<span class="channel-icon channel-icon--mail">' + icon('mail') + '</span>'
      +               '<span><span class="channel-label">' + esc(L(S.contact.email_label)) + '</span><br>'
      +               '<span class="channel-value" id="emailText">' + esc(S.contact.email) + '</span></span>'
      +             '</span>'
      +             '<span class="copy-btn" id="copyBadge">' + (currentLang === 'ar' ? 'نسخ' : 'COPY') + '</span>'
      +           '</button>'
      +         '</div>'
      +         '<div class="socials">'
      +           '<div class="socials-label">' + esc(L(S.contact.socials_label)) + '</div>'
      +           '<div class="socials-row">' + socials + '</div>'
      +         '</div>'
      +       '</div>'
      +       '<div class="form-card reveal-zoom">'
      +         '<form id="inquiryForm" novalidate>'
      +           '<div class="form-grid">'
      +             '<div class="form-field"><label class="form-label" for="fName">' + esc(L(f.name_label)) + '</label>'
      +               '<input class="form-input" id="fName" type="text" required></div>'
      +             '<div class="form-field"><label class="form-label" for="fContact">' + esc(L(f.email_label)) + '</label>'
      +               '<input class="form-input" id="fContact" type="text" required></div>'
      +             '<div class="form-field"><label class="form-label" for="fType">' + esc(L(f.type_label)) + '</label>'
      +               '<select class="form-select" id="fType">' + types + '</select></div>'
      +             '<div class="form-field"><label class="form-label" for="fRef">' + esc(L(f.ref_label)) + '</label>'
      +               '<input class="form-input" id="fRef" type="url" placeholder="https://"></div>'
      +             '<div class="form-field form-field--full"><label class="form-label" for="fMsg">' + esc(L(f.msg_label)) + '</label>'
      +               '<textarea class="form-textarea" id="fMsg" required></textarea></div>'
      +           '</div>'
      +           '<div class="form-actions"><button class="btn btn-primary" type="submit">' + esc(L(f.submit)) + '</button></div>'
      +         '</form>'
      +         '<div class="form-success" id="formSuccess" hidden>'
      +           '<div class="form-success-icon">' + icon('checkCircle') + '</div>'
      +           '<h3>' + esc(L(f.ok_title)) + '</h3>'
      +           '<p>' + esc(L(f.ok_desc)) + '</p>'
      +           '<button class="btn btn-ghost btn-sm" id="formReset" type="button">' + esc(L(f.reset)) + '</button>'
      +         '</div>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</section>';
  }

  /* ------------------------- الفوتر ------------------------- */
  function renderFooter() {
    var brand = L(S.meta.brand) || S.meta.brand;
    $('#siteFooter').innerHTML = ''
      + '<div class="container footer-inner">'
      +   '<div class="footer-brand">' + esc(brand) + '<span style="color:rgba(255,255,255,.2)">|</span>'
      +     '<span class="footer-copy">' + esc(L(S.footer.copy)) + '</span></div>'
      +   '<div class="footer-tag">' + esc(L(S.footer.tag)) + '</div>'
      + '</div>';
  }

  /* ------------------------- المودال ------------------------- */
  function renderModal() {
    $('#modalRoot').innerHTML = ''
      + '<div class="modal" id="videoModal" role="dialog" aria-modal="true">'
      +   '<div class="modal-box">'
      +     '<div class="modal-head">'
      +       '<div class="modal-title-wrap">'
      +         '<span class="badge badge--accent" id="modalRatio">16:9</span>'
      +         '<h3 class="modal-title" id="modalTitle"></h3>'
      +       '</div>'
      +       '<span class="timecode" id="modalTimecode"><span class="rec"></span><span id="modalTcVal">00:00:00:00</span></span>'
      +       '<button class="modal-close" id="modalClose" type="button" aria-label="Close">' + icon('close') + '</button>'
      +     '</div>'
      +     '<div class="modal-stage" id="modalStage"></div>'
      +     '<div class="modal-breakdown" id="modalBreakdown">'
      +       '<div><h4 id="mbChallengeH"></h4><p id="mbChallenge"></p></div>'
      +       '<div><h4 id="mbH"></h4><p id="mbTech"></p></div>'
      +       '<div class="is-result"><h4 id="mbResultH"></h4><p id="mbResult"></p></div>'
      +     '</div>'
      +   '</div>'
      + '</div>';

    $('#modalClose').addEventListener('click', closeModal);
    $('#videoModal').addEventListener('click', function (e) { if (e.target === this) closeModal(); });

    $('#modalStage').addEventListener('timeupdate', function () {
      var v = $('#modalStage video');
      var tc = $('#modalTcVal');
      if (v && tc) tc.textContent = fmtTime(v.currentTime);
    });
  }

  function fillModalLabels() {
    $('#mbChallengeH').textContent = currentLang === 'ar' ? '01 / التحدي' : '01 / THE CHALLENGE';
    $('#mbH').textContent = currentLang === 'ar' ? '02 / أسلوب التنفيذ' : '02 / EDITING TECHNIQUE';
    $('#mbResultH').textContent = currentLang === 'ar' ? '03 / النتائج' : '03 / IMPACT & RESULTS';
  }

  function openProjectModal(id) {
    var p = S.work.projects.find(function (x) { return x.id === id; });
    if (!p) return;

    $('#modalTitle').textContent = L(p.title);
    $('#modalRatio').textContent = p.aspectRatio;
    $('#mbChallenge').textContent = L(p.challenge);
    $('#mbTech').textContent = L(p.technique);
    $('#mbResult').textContent = L(p.result);
    $('#modalBreakdown').style.display = '';
    $('#modalTcVal').textContent = '00:00:00:00';

    var stage = $('#modalStage');
    stage.classList.toggle('modal-stage--vertical', p.aspectRatio === '9:16');

    if (p.isEmbed) {
      stage.innerHTML = '<iframe src="' + esc(p.videoUrl) + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    } else if (p.videoUrl) {
      stage.innerHTML = '<video controls autoplay playsinline poster="' + esc(p.thumb || '') + '">'
        + '<source src="' + esc(p.videoUrl) + '" type="video/mp4"></video>';
    } else {
      stage.innerHTML = '<div class="modal-empty">' + icon('video') + '<span>' + (currentLang === 'ar' ? 'مفيش فيديو مرفوع لهذا المشروع بعد' : 'No video attached to this project yet') + '</span></div>';
    }
    sfx.shutter();
    openModal();
  }

  function openShowreel() {
    $('#modalTitle').textContent = currentLang === 'ar' ? S.showreel.title_ar : S.showreel.title_en;
    $('#modalRatio').textContent = '16:9 • 4K';
    $('#modalBreakdown').style.display = 'none';
    $('#modalTcVal').textContent = '00:00:00:00';

    var stage = $('#modalStage');
    stage.classList.remove('modal-stage--vertical');

    if (S.showreel.isEmbed && S.showreel.videoUrl) {
      stage.innerHTML = '<iframe src="' + esc(S.showreel.videoUrl) + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    } else if (S.showreel.videoUrl) {
      stage.innerHTML = '<video controls autoplay playsinline poster="' + esc(S.showreel.poster || '') + '">'
        + '<source src="' + esc(S.showreel.videoUrl) + '" type="video/mp4"></video>';
    } else {
      stage.innerHTML = '<div class="modal-empty">' + icon('video') + '<span>' + (currentLang === 'ar' ? 'حط رابط الشوريل في ملف content.js' : 'Set your showreel URL in content.js') + '</span></div>';
    }
    sfx.clack();
    openModal();
  }

  function openModal() {
    $('#videoModal').classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var stage = $('#modalStage');
    if (stage) stage.innerHTML = '';
    var modal = $('#videoModal');
    if (modal) modal.classList.remove('is-open');
    document.body.style.overflow = '';
    sfx.cut();
  }

  /* ------------------------- اللغة ------------------------- */
  function applyLang() {
    var html = document.documentElement;
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.title = L(S.meta.title);
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', L(S.meta.description));

    var label = $('#langLabel');
    if (label) label.textContent = currentLang === 'ar' ? 'EN' : 'عربي';

    var copy = $('#copyBadge');
    if (copy) copy.textContent = currentLang === 'ar' ? 'نسخ' : 'COPY';

    fillModalLabels();
  }

  function toggleLang() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem('nabhan-lang', currentLang); } catch (e) {}
    clockStart = Date.now();
    sfx.toggle();
    cutFlash();
    renderAll();
  }

  /* ------------------------- التواصل والفورم ------------------------- */
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  function bindContact() {
    var emailBtn = $('#emailChannel');
    if (emailBtn) {
      emailBtn.addEventListener('click', function () {
        var email = S.contact.email;
        var done = function () {
          var badge = $('#copyBadge');
          if (!badge) return;
          badge.textContent = currentLang === 'ar' ? 'تم النسخ' : 'COPIED';
          setTimeout(function () {
            badge.textContent = currentLang === 'ar' ? 'نسخ' : 'COPY';
          }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(done).catch(function () { fallbackCopy(email); done(); });
        } else { fallbackCopy(email); done(); }
      });
    }

    var form = $('#inquiryForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }

        var name = $('#fName').value.trim();
        var contact = $('#fContact').value.trim();
        var type = $('#fType').value;
        var ref = $('#fRef').value.trim();
        var msg = $('#fMsg').value.trim();

        var text = (currentLang === 'ar' ? 'مشروع جديد من الموقع\n' : 'New project from the website\n')
          + (currentLang === 'ar' ? 'الاسم: ' : 'Name: ') + name + '\n'
          + (currentLang === 'ar' ? 'التواصل: ' : 'Contact: ') + contact + '\n'
          + (currentLang === 'ar' ? 'النوع: ' : 'Type: ') + type + '\n'
          + (ref ? ((currentLang === 'ar' ? 'رابط: ' : 'Link: ') + ref + '\n') : '')
          + (currentLang === 'ar' ? 'التفاصيل: ' : 'Brief: ') + msg;

        window.open('https://wa.me/' + S.contact.whatsapp_number + '?text=' + encodeURIComponent(text), '_blank');

        form.hidden = true;
        $('#formSuccess').hidden = false;
        sfx.send();
      });
    }

    var reset = $('#formReset');
    if (reset) {
      reset.addEventListener('click', function () {
        $('#inquiryForm').reset();
        $('#formSuccess').hidden = true;
        $('#inquiryForm').hidden = false;
      });
    }

    $$('[data-type]').forEach(function (a) {
      a.addEventListener('click', function () {
        var sel = $('#fType');
        if (sel) {
          var want = a.getAttribute('data-type');
          Array.prototype.forEach.call(sel.options, function (o) {
            if (o.text === want) sel.value = o.value;
          });
        }
      });
    });
  }

  /* ------------------------- الفلاتر ------------------------- */
  function bindFilters() {
    $$('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentFilter = btn.dataset.filter;
        $$('.filter-btn').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        renderPortfolio();
        cutFlash();
      });
    });
  }

  /* ------------------------- أصوات عامة ------------------------- */
  function bindGlobalSounds() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('.filter-btn')) { sfx.whoosh(); return; }
      if (e.target.closest('.work-card')) return;
      if (e.target.closest('.modal-close')) return;
      if (e.target.closest('.btn, .lang-toggle, .sound-toggle, .social-link, .menu-btn, .channel')) sfx.click();
    });
  }

  /* ------------------------- الظهور عند التمرير ------------------------- */
  var revealIO = null;
  function observeReveals() {
    var els = $$('.reveal, .reveal-left, .reveal-zoom');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-active'); });
      return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
            revealIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }
    els.forEach(function (el) { revealIO.observe(el); });
  }

  /* ------------------------- التمرير والتقدم والبارالاكس ------------------------- */
  function bindScroll() {
    var header = $('#siteHeader');
    var bar = $('#scrollProgress');
    var hero = $('.hero');
    var heroContainer = hero ? hero.querySelector('.container') : null;
    var frame = hero ? hero.querySelector('.hero-frame') : null;

    var onScroll = function () {
      var y = window.scrollY;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      if (header) header.classList.toggle('is-scrolled', y > 10);

      if (!reduceMotion && hero && y < window.innerHeight * 1.2) {
        if (heroContainer) heroContainer.style.transform = 'translateY(' + (y * 0.16) + 'px)';
        if (frame) frame.style.transform = 'translateY(' + (y * 0.08) + 'px)';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------- عدّاد الأرقام ------------------------- */
  function animateStats() {
    if (reduceMotion) return;
    $$('.stat-value').forEach(function (valEl) {
      var target = parseFloat(valEl.getAttribute('data-value')) || 0;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / 1300, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        valEl.childNodes[0].nodeValue = String(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
        else valEl.childNodes[0].nodeValue = String(target);
      }
      requestAnimationFrame(step);
    });
  }

  /* ------------------------- العرض العام ------------------------- */
  function renderAll() {
    var app = $('#app');
    app.innerHTML = renderHero()
      + renderMarquee()
      + renderWork()
      + '<div class="film-strip" aria-hidden="true"></div>'
      + renderServices()
      + '<div class="film-strip" aria-hidden="true"></div>'
      + renderArsenal()
      + '<div class="edit-timeline-band">' + renderEditTimeline() + '</div>'
      + renderContact();

    renderHeader();
    renderFooter();
    renderModal();
    applyLang();
    renderPortfolio();
    bindFilters();
    bindContact();
    bindScroll();
    observeReveals();

    var reel = $('#showreelBtn');
    if (reel) reel.addEventListener('click', openShowreel);

    startClock();
    setTimeout(animateStats, 350);
    initCursor();
    initSpotlight();
    initHoverSounds();
    bindPalette();
  }

  /* ------------------------- مؤشر ماوس مخصص ------------------------- */
  function initCursor() {
    if (reduceMotion) return;
    if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;
    if ($('.cursor-ring')) return;

    var dot = document.createElement('div'); dot.className = 'cursor-dot';
    var ring = document.createElement('div'); ring.className = 'cursor-ring';
    ring.innerHTML = '<svg viewBox="0 0 40 40" aria-hidden="true">'
      + '<circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" stroke-width="1"/>'
      + '<path d="M20 1v7M20 32v7M1 20h7M32 20h7" stroke="currentColor" stroke-width="1"/>'
      + '</svg>';
    document.body.appendChild(dot); document.body.appendChild(ring);
    document.documentElement.classList.add('has-cursor');

    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
    }, { passive: true });

    (function loop() {
      rx += (mx - rx) * 0.3;
      ry += (my - ry) * 0.3;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(loop);
    })();

    document.addEventListener('mouseover', function (e) {
      var hit = e.target.closest('a, button, .work-card, .filter-btn, .social-link, .channel, input, select, textarea');
      ring.classList.toggle('is-active', !!hit);
    });
  }

  /* ------------------------- توهج الماوس في الهيرو ------------------------- */
  function initSpotlight() {
    if (reduceMotion) return;
    var hero = $('.hero');
    if (!hero || $('.hero-spot')) return;
    var spot = document.createElement('div');
    spot.className = 'hero-spot';
    hero.appendChild(spot);
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      spot.style.setProperty('--sx', ((e.clientX - r.left) / r.width * 100).toFixed(2) + '%');
      spot.style.setProperty('--sy', ((e.clientY - r.top) / r.height * 100).toFixed(2) + '%');
    }, { passive: true });
  }

  /* ------------------------- إمالة الكروت وتوهج الماوس ------------------------- */
  function initTilt() {
    if (reduceMotion) return;
    $$('.work-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(900px) rotateX(' + (-py * 6).toFixed(2) + 'deg) rotateY(' + (px * 8).toFixed(2) + 'deg) translateY(-5px)';
        card.style.setProperty('--mx', ((px + 0.5) * 100).toFixed(1) + '%');
        card.style.setProperty('--my', ((py + 0.5) * 100).toFixed(1) + '%');
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.setProperty('--mx', '50%');
        card.style.setProperty('--my', '50%');
      });
    });
  }

  /* ------------------------- ومضة القطع ------------------------- */
  function cutFlash() {
    if (reduceMotion) return;
    var f = document.createElement('div');
    f.className = 'cut-flash';
    document.body.appendChild(f);
    requestAnimationFrame(function () { f.classList.add('go'); });
    setTimeout(function () { if (f.parentNode) f.remove(); }, 320);
  }

  /* ------------------------- أصوات التحويم ------------------------- */
  var lastHoverSfx = 0;
  function initHoverSounds() {
    var sel = 'a, button, .work-card, .filter-btn, .social-link, .channel';
    document.addEventListener('mouseover', function (e) {
      if (!e.target.closest(sel)) return;
      var now = Date.now();
      if (now - lastHoverSfx < 70) return;
      lastHoverSfx = now;
      sfx.hover();
    });
  }

  /* ------------------------- موجة صوتية مزخرفة ------------------------- */
  function waveformBars(n) {
    var out = '';
    for (var i = 0; i < n; i++) out += '<span style="animation-delay:' + (i * 55) + 'ms"></span>';
    return out;
  }

  /* ------------------------- ألوان الموقع ------------------------- */
  var PALETTES = [
    { id: 'crimson', ar: 'قرمزي',  en: 'Crimson', accent: '#DC2626', dark: '#991B1B' },
    { id: 'rose',    ar: 'وردي',   en: 'Rose',    accent: '#F43F5E', dark: '#BE123C' },
    { id: 'amber',   ar: 'كهرماني', en: 'Amber',   accent: '#F59E0B', dark: '#B45309' },
    { id: 'emerald', ar: 'زمردي',  en: 'Emerald', accent: '#10B981', dark: '#047857' },
    { id: 'sky',     ar: 'سماوي',  en: 'Sky',     accent: '#0EA5E9', dark: '#0369A1' },
    { id: 'violet',  ar: 'بنفسجي', en: 'Violet',  accent: '#8B5CF6', dark: '#6D28D9' }
  ];

  function applyPalette(p) {
    if (!p) return;
    document.documentElement.style.setProperty('--accent', p.accent);
    document.documentElement.style.setProperty('--accent-dark', p.dark);
    try { localStorage.setItem('nabhan-accent', p.id); } catch (e) {}
    $$('.swatch').forEach(function (s) { s.classList.toggle('is-active', s.dataset.id === p.id); });
  }

  function savedPalette() {
    var id = null;
    try { id = localStorage.getItem('nabhan-accent'); } catch (e) {}
    return PALETTES.find(function (p) { return p.id === id; }) || PALETTES[0];
  }

  function bindPalette() {
    var btn = $('#paletteBtn'), pop = $('#palettePop');
    if (!btn || !pop) return;
    pop.innerHTML = PALETTES.map(function (p) {
      return '<button class="swatch" type="button" data-id="' + p.id + '" style="--sw:' + p.accent + '" title="' + esc(L(p)) + '" aria-label="' + esc(L(p)) + '"></button>';
    }).join('');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      pop.classList.toggle('is-open');
      sfx.click();
    });
    pop.addEventListener('click', function (e) {
      var s = e.target.closest('.swatch');
      if (!s) return;
      var p = PALETTES.find(function (x) { return x.id === s.dataset.id; });
      if (p) { applyPalette(p); sfx.toggle(); }
      pop.classList.remove('is-open');
    });
    applyPalette(savedPalette());
  }

  /* ------------------------- التشغيل ------------------------- */
  function hideLoader() {
    var l = $('#loader');
    if (l) l.classList.add('is-done');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.style.setProperty('--accent', S.meta.accent || '#DC2626');
    document.documentElement.style.setProperty('--accent-dark', S.meta.accentDark || '#991B1B');
    applyPalette(savedPalette());
    renderAll();
    bindGlobalSounds();

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

    // إغلاق قائمة الألوان عند الضغط بره
    document.addEventListener('click', function (e) {
      var pop = $('#palettePop');
      if (!pop || !pop.classList.contains('is-open')) return;
      if (!e.target.closest('#palettePop') && !e.target.closest('#paletteBtn')) pop.classList.remove('is-open');
    });

    if (document.readyState === 'complete') setTimeout(hideLoader, 450);
    else window.addEventListener('load', function () { setTimeout(hideLoader, 450); });
    setTimeout(hideLoader, 2600);
  });
})();

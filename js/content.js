/* =====================================================================
   ملف محتوى الموقع — SITE
   ---------------------------------------------------------------------
   ده الملف الوحيد اللي محتاج تعدله عشان تغيّر أي حاجة في الموقع:
   النصوص، الأرقام، روابط التواصل، المشاريع، الفيديوهات، الصور.

   طريقة التعديل:
   1) افتح الملف بأي محرر نصوص (Notepad مثلاً) وعدّل القيمة اللي بين
      علامات الاقتباس "..." — ماتغيرش الأقواس أو الفواصل.
   2) احفظ الملف، وافتح index.html في المتصفح.

   أو استخدم صفحة التحكم الجمالية: admin.html (تعدّل منها وتحفظ منها
   ملف content.js جديد بدون ما تلمس الكود بإيدك).

   ملاحظة: أي نص له نسختين ar و en — عدّل الاتنين.
   ===================================================================== */

const SITE = {

  /* ------------------------------------------------------------------
     بيانات أساسية
     ------------------------------------------------------------------ */
  meta: {
    brand: { ar: "نبهان", en: "NABHAN" },
    owner_ar: "محمد نبهان",
    owner_en: "Mohamed Nabhan",
    title: { ar: "نبهان | مونتير فيديو", en: "Nabhan | Video Editor" },
    description: {
      ar: "محمد نبهان — مونتير فيديو ومصمم موشن جرافيك: ريلز عالية الانتشار، أفلام وثائقية، جرافيك HUD، وهندسة صوتية احترافية.",
      en: "Mohamed Nabhan — Video Editor & Motion Designer crafting viral short-form reels, documentary storytelling, custom HUD overlays, and precision sound design."
    },
    defaultLang: "ar",                 // اللغة الافتراضية عند أول زيارة: "ar" أو "en"
    accent: "#DC2626",                 // لون التمييز الأساسي في الموقع
    accentDark: "#991B1B",
    sound: true                        // المؤثرات الصوتية: true تشتغل، false تتطفي
  },

  /* ------------------------------------------------------------------
     عناصر أجواء المونتاج (شريط متحرك + لافتات)
     ------------------------------------------------------------------ */
  montage: {
    marquee: [
      { ar: "قص",            en: "CUT" },
      { ar: "انتقال",        en: "TRANSITION" },
      { ar: "تلوين",         en: "COLOR GRADE" },
      { ar: "تصميم صوتي",   en: "SOUND DESIGN" },
      { ar: "موشن جرافيك",  en: "MOTION GRAPHICS" },
      { ar: "تسريع لقطات",  en: "SPEED RAMP" },
      { ar: "إطارات مفتاحية", en: "KEYFRAMES" },
      { ar: "لقطات إضافية", en: "B-ROLL" },
      { ar: "خط زمني",      en: "TIMELINE" },
      { ar: "تصدير نهائي",  en: "FINAL EXPORT" }
    ],
    rec: { ar: "REC", en: "REC" },
    scene: { ar: "مشهد", en: "SCENE" },
    take: { ar: "تك", en: "TAKE" },
    roll: { ar: "رول", en: "ROLL" }
  },

  /* ------------------------------------------------------------------
     روابط التنقل في الهيدر
     ------------------------------------------------------------------ */
  nav: {
    work:      { ar: "أعمالي",              en: "Work" },
    services:  { ar: "الخدمات",             en: "Services" },
    arsenal:   { ar: "الأدوات وآلية العمل", en: "Workflow & Gear" },
    contact:   { ar: "تواصل معي",           en: "Contact" },
    cta:       { ar: "احجز مشروعك",         en: "Book an Edit" }
  },

  /* ------------------------------------------------------------------
     قسم الهيرو (أول شاشة)
     ------------------------------------------------------------------ */
  hero: {
    badge: {
      ar: "متاح لاستقبال المشاريع • مونتاج وموشن جرافيك",
      en: "AVAILABLE FOR PROJECTS • VIDEO EDITING & MOTION"
    },
    title1: {
      ar: "نحوّل اللقطات الخام إلى ",
      en: "Turning Raw Footage Into "
    },
    highlight: {
      ar: "قصص بصرية تخطف الأنظار.",
      en: "High-Retention Visual Stories."
    },
    subtitle: {
      ar: "أنا محمد نبهان — مونتير ومصمم موشن جرافيك متخصص في صناعة فيديوهات الريلز عالية الانتشار، الأفلام الوثائقية، جرافيك HUD، والهندسة الصوتية الاحترافية عبر After Effects و Premiere Pro.",
      en: "I’m Mohamed Nabhan — a Video Editor & Motion Graphics Designer crafting viral short-form Reels, documentary storytelling, custom HUD/AR overlays, and precision sound design in After Effects & Premiere Pro."
    },
    btn_reel: { ar: "شاهد الشوريل", en: "Watch Showreel" },
    btn_work: { ar: "استكشف الأعمال المختارة", en: "Explore Selected Cuts" },

    // أرقام وإحصائيات — عدّلها بأرقامك الحقيقية
    stats: [
      { value: "5",  suffix: "M+", en: "Organic Views Generated",        ar: "مشاهدة عضوية محققة" },
      { value: "120", suffix: "+",  en: "High-Retention Edits Delivered", ar: "فيديو احترافي تم تسليمه" },
      { value: "99", suffix: "%",   en: "Client Retention Rate",          ar: "نسبة رضا واستمرار العملاء" },
      { value: "48", suffix: "h",   en: "Average First-Cut Turnaround",   ar: "متوسط تسليم النسخة الأولى" }
    ]
  },

  /* ------------------------------------------------------------------
     الشوريل (Showreel) — الفيديو اللي يشتغل لما حد يضغط "شاهد الشوريل"
     ------------------------------------------------------------------
     حط هنا رابط الفيديو بتاعك:
     - فيديو مرفوع عندك: "assets/videos/showreel.mp4"
     - أو رابط يوتيوب مباشر: "https://www.youtube.com/embed/xxxxx?autoplay=1"
       ولو رابط يوتيوب/فايمو: خلي isEmbed = true
     ------------------------------------------------------------------ */
  showreel: {
    videoUrl: "assets/videos/placeholder-showreel.mp4",
    poster: "assets/img/hero-poster.svg",
    isEmbed: false,
    title_ar: "نبهان — الشوريل الرسمي",
    title_en: "Nabhan — Official Showreel"
  },

  /* ------------------------------------------------------------------
     قسم الأعمال (المشاريع)
     ------------------------------------------------------------------ */
  work: {
    eyebrow: { ar: "// أرشيف الأعمال المختارة", en: "// SELECTED ARCHIVE" },
    title:   { ar: "أحدث أعمال المونتاج والموشن", en: "Featured Edits & Motion" },
    filters: {
      all:         { ar: "جميع الأعمال",            en: "All Projects" },
      reels:       { ar: "فيديوهات قصيرة / ريلز",   en: "Short-Form / Reels" },
      documentary: { ar: "وثائقي / يوتيوب",          en: "Documentary / YouTube" },
      motion:      { ar: "موشن جرافيك و HUD",       en: "Motion Graphics & HUD" }
    },
    card_watch: { ar: "معاينة المشروع", en: "Watch Breakdown" },
    note: {
      ar: "ده عرض تجريبي بمشاريع مؤقتة — عدّل المشاريع من صفحة التحكم admin.html أو من ملف content.js",
      en: "Demo showcase with placeholder projects — edit them from admin.html or content.js"
    },
    showNote: false,

    /* ----------------------------------------------------------------
       كل مشروع = عنصر في القايمة دي.
       لإضافة مشروع: انسخ أي عنصر { ... } والصقه وعدّل بياناته.

       الحقول:
       - id: أي اسم فريد (مهم بس للتمييز الداخلي)
       - category: "reels" أو "documentary" أو "motion"
       - aspectRatio: "9:16" للفيديو العمودي أو "16:9" للأفقي
       - thumb: رابط صورة الغلاف (حط الصورة في assets/img واكتب اسمها)
       - videoUrl: رابط الفيديو (assets/videos/....mp4) أو رابط يوتيوب embed
       - isEmbed: false للفيديو المباشر، true لرابط يوتيوب/فايمو
       - views: نص حر (مشاهدات / نوع المشروع)
       - tools: ليست برامج (النصوص بتظهر كما هي بأي لغة)
       - title/tag/challenge/technique/result: لكل واحد ar و en
       ---------------------------------------------------------------- */
    projects: [
      {
        id: "proj-1",
        category: "reels",
        aspectRatio: "9:16",
        views: "1.4M Views",
        tools: ["After Effects", "Premiere Pro"],
        thumb: "assets/img/thumb-reel-1.svg",
        videoUrl: "assets/videos/placeholder-vertical.mp4",
        isEmbed: false,
        title: { ar: "ريلز تقني عالي الاحتفاظ بالمشاهد", en: "High-Retention Tech & AI Reel" },
        tag: { ar: "فيديو قصير / ريلز", en: "Short-Form / Viral Reel" },
        challenge: {
          ar: "الحفاظ على انتباه المشاهد في أول ثانيتين ونصف أثناء شرح أداة ذكاء اصطناعي معقدة.",
          en: "Retain viewer attention on a dense AI software breakdown within the first 2.5 seconds on Instagram Reels."
        },
        technique: {
          ar: "تحريك واجهات ثلاثية الأبعاد في After Effects، وتسريع لقطات احترافي (Speed Ramping)، ومؤثرات صوتية دقيقة.",
          en: "Custom 3D UI pop-outs in After Effects, aggressive speed-ramps, kinetic captions, and tactile whoosh/riser SFX."
        },
        result: {
          ar: "أكثر من 1.4 مليون مشاهدة عضوية، ونسبة إكمال مشاهدة 74%.",
          en: "1.4M+ organic views, 74% average watch-through rate, and 18K+ saves."
        }
      },
      {
        id: "proj-2",
        category: "documentary",
        aspectRatio: "16:9",
        views: "890K Views",
        tools: ["Premiere Pro", "After Effects", "DaVinci"],
        thumb: "assets/img/thumb-doc-1.svg",
        videoUrl: "assets/videos/placeholder-showreel.mp4",
        isEmbed: false,
        title: { ar: "وثائقي يوتيوب: مستقبل الروبوتات الذكية", en: "The Rise of Autonomous Robotics — Mini-Doc" },
        tag: { ar: "وثائقي / يوتيوب", en: "Documentary / YouTube" },
        challenge: {
          ar: "تحويل سكريبت مدته 28 دقيقة إلى فيلم وثائقي مشوق بإيقاع سينمائي جذاب.",
          en: "Transform a 28-minute talking-head script into a gripping, cinema-paced YouTube documentary."
        },
        technique: {
          ar: "تحريك خرائط 3D، ومشاهد أرشيفية بتأثير Parallax، وتلوين سينمائي عبر DaVinci Resolve.",
          en: "3D map flythroughs, newspaper & archival parallax reveals, custom timeline graphics, and moody film color grading."
        },
        result: {
          ar: "890 ألف مشاهدة خلال أسبوعين بمتوسط احتفاظ بالمشاهدين بلغ 62%.",
          en: "890K views in 14 days with a 62% average percentage viewed across 24 minutes."
        }
      },
      {
        id: "proj-3",
        category: "motion",
        aspectRatio: "16:9",
        views: "Commercial",
        tools: ["After Effects", "Sound Design"],
        thumb: "assets/img/thumb-motion-1.svg",
        videoUrl: "assets/videos/placeholder-showreel.mp4",
        isEmbed: false,
        title: { ar: "جرافيك HUD وتتبع حركة ثلاثي الأبعاد", en: "Cyber-HUD & Planar Tracking Showcase" },
        tag: { ar: "موشن جرافيك و HUD", en: "Motion Graphics & HUD" },
        challenge: {
          ar: "دمج بيانات ورسوم HUD مستقبلية بدقة متناهية على لقطات حركة سريعة بكاميرا محمولة.",
          en: "Integrate futuristic telemetry HUD callouts seamlessly onto handheld outdoor sports footage."
        },
        technique: {
          ar: "تتبع حركة ثلاثي الأبعاد (3D Camera Tracking) في After Effects مع تصميم مؤثرات صوتية مخصصة.",
          en: "3D camera solve & planar motion tracking in After Effects with custom vector HUD elements and sub-bass impacts."
        },
        result: {
          ar: "تم اعتماده في الحملة الإعلانية الرئيسية للعلامة التجارية وحقق 3.4x عائد إعلاني.",
          en: "Featured in brand launch campaign across YouTube & paid social ads with 3.4x ROAS."
        }
      },
      {
        id: "proj-4",
        category: "reels",
        aspectRatio: "9:16",
        views: "2.1M Views",
        tools: ["After Effects", "Premiere Pro"],
        thumb: "assets/img/thumb-reel-2.svg",
        videoUrl: "assets/videos/placeholder-vertical.mp4",
        isEmbed: false,
        title: { ar: "مونتاج قصة مؤسس وبناء علامة شخصية", en: "Founder Story & Personal Brand Hook Edit" },
        tag: { ar: "فيديو قصير / ريلز", en: "Short-Form / Viral Reel" },
        challenge: {
          ar: "تحويل تصوير خام من الهاتف إلى فيديو احترافي فخم يعكس قوة العلامة الشخصية.",
          en: "Elevate raw studio iPhone footage into a premium, authority-building founder story."
        },
        technique: {
          ar: "هندسة إيقاع الصوت (J-Cuts)، ودمج لقطات B-Roll سينمائية، وانتقالات متزامنة مع الإيقاع.",
          en: "J-cut audio pacing, custom B-roll compositing, subtle film grain, and beat-synced transitions."
        },
        result: {
          ar: "2.1 مليون مشاهدة وأكثر من 14 ألف متابع جديد مستهدف من فيديو واحد.",
          en: "2.1M views and 14,000+ new targeted followers from a single vertical video."
        }
      },
      {
        id: "proj-5",
        category: "motion",
        aspectRatio: "16:9",
        views: "SaaS Launch",
        tools: ["After Effects", "Illustrator"],
        thumb: "assets/img/thumb-motion-2.svg",
        videoUrl: "assets/videos/placeholder-showreel.mp4",
        isEmbed: false,
        title: { ar: "فيديو إطلاق منصة تقنية مالية (SaaS)", en: "Fintech SaaS Product Launch Trailer" },
        tag: { ar: "موشن جرافيك و HUD", en: "Motion Graphics & HUD" },
        challenge: {
          ar: "تبسيط آلية عمل منصة مالية متكاملة في 45 ثانية فقط بأسلوب بصري مبهر.",
          en: "Explain a complex B2B financial workflow in 45 seconds without losing visual momentum."
        },
        technique: {
          ar: "تحريك واجهات 2.5D باستخدام منحنيات Graph Editor احترافية ومؤثرات صوتية تفاعلية.",
          en: "Custom Graph Editor easing, 2.5D UI card choreography, glowing crimson accents, and crisp foley."
        },
        result: {
          ar: "تم وضعه في واجهة موقع الشركة الرئيسي ورفع نسبة طلبات التجربة بنسبة 28%.",
          en: "Embedded on the client’s main hero landing page, lifting demo signups by 28%."
        }
      },
      {
        id: "proj-6",
        category: "documentary",
        aspectRatio: "16:9",
        views: "640K Views",
        tools: ["Premiere Pro", "After Effects"],
        thumb: "assets/img/thumb-doc-2.svg",
        videoUrl: "assets/videos/placeholder-showreel.mp4",
        isEmbed: false,
        title: { ar: "مقال بصري: أسرار العمارة الحديثة", en: "Inside Modern Architecture — Video Essay" },
        tag: { ar: "وثائقي / يوتيوب", en: "Documentary / YouTube" },
        challenge: {
          ar: "إنتاج فيديو تحليلي يجمع بين الهدوء البصري والتشويق المستمر للمشاهد.",
          en: "Create a meditative yet deeply engaging visual essay on brutalist & minimalist design."
        },
        technique: {
          ar: "انتقالات Match-Cuts ذكية، وتحريك مخططات هندسية، وهندسة صوتية محيطية.",
          en: "Match-cut visual transitions, blueprint line-art animations, and spatial ambient sound design."
        },
        result: {
          ar: "640 ألف مشاهدة عضوية وإشادة واسعة من صناع المحتوى الإبداعي.",
          en: "640K organic views and featured across creative curation newsletters."
        }
      }
    ]
  },

  /* ------------------------------------------------------------------
     الخدمات
     ------------------------------------------------------------------ */
  services: {
    eyebrow:  { ar: "// الخدمات الاحترافية", en: "// CAPABILITIES" },
    title:    { ar: "حلول ما بعد الإنتاج المتكاملة", en: "Tailored Post-Production" },
    subtitle: {
      ar: "مصممة خصيصاً لرفع معدل الاحتفاظ بالمشاهدين، وخطف الانتباه في أول ثانيتين، وتعزيز هوية علامتك التجارية.",
      en: "Engineered to maximize watch time, hook viewers within the first 2 seconds, and elevate brand authority."
    },
    popular: { ar: "الأكثر طلباً", en: "MOST REQUESTED" },
    cta:     { ar: "اطلب الباقة الآن", en: "Request Package" },
    items: [
      {
        num: "01",
        ratio: "VERTICAL 9:16",
        icon: "bolt",
        popular: false,
        title: { ar: "مونتاج الريلز والفيديوهات القصيرة", en: "Short-Form Viral Reels" },
        desc: {
          ar: "فيديوهات إنستغرام ريلز وتيك توك ويوتيوب شورتس بإيقاع سريع، نصوص حركية، تسريع لقطات (Speed Ramps)، ومؤثرات صوتية متقنة.",
          en: "High-pacing Instagram Reels, TikToks, and YouTube Shorts built with kinetic typography, pattern interrupts, speed-ramps, and layered SFX."
        },
        features: [
          { ar: "تحسين خطاف البداية (First 3-Second Hook)", en: "3-Second Visual Hook Optimization" },
          { ar: "نصوص ديناميكية احترافية ولقطات B-Roll",   en: "Custom Dynamic Captions & B-Roll" },
          { ar: "تسليم سريع خلال 24 إلى 48 ساعة",         en: "24–48 Hour Fast Turnaround" }
        ]
      },
      {
        num: "02",
        ratio: "WIDESCREEN 16:9",
        icon: "film",
        popular: true,
        title: { ar: "فيديوهات اليوتيوب والوثائقيات", en: "YouTube & Documentaries" },
        desc: {
          ar: "مونتاج قصصي طويل يجمع بين تحريك الخرائط الوثائقية، حركة الكاميرا ثلاثية الأبعاد، السرد الأرشيفي، والمكساج الصوتي السينمائي.",
          en: "Narrative-driven long-form edits combining documentary map animations, 3D camera moves, archival storytelling, and theatrical sound mixing."
        },
        features: [
          { ar: "بناء إيقاع سردي يحافظ على المشاهد للنهاية", en: "Retention-Focused Story Pacing" },
          { ar: "رسوم توضيحية وخرائط متحركة مخصصة",       en: "Custom Visual Explainers & Map Motion" },
          { ar: "تلوين سينمائي ومعالجة صوتية بمعيار (-14 LUFS)", en: "Color Grading & Mastered Audio (-14 LUFS)" }
        ]
      },
      {
        num: "03",
        ratio: "AFTER EFFECTS",
        icon: "bezier",
        popular: false,
        title: { ar: "الموشن جرافيك وواجهات HUD", en: "Motion Graphics & HUDs" },
        desc: {
          ar: "تصميم وتحريك واجهات UI/HUD، تتبع الحركة (Motion Tracking)، إظهار الشعارات، وفيديوهات إطلاق المنتجات والتطبيقات.",
          en: "Bespoke UI/HUD animations, planar motion tracking, 3D object callouts, logo reveals, and commercial SaaS product promo sequences."
        },
        features: [
          { ar: "تتبع حركة ثلاثي الأبعاد ودمج العناصر البصرية", en: "3D Camera & Planar Tracking Overlays" },
          { ar: "تحريك انسيابي فائق الدقة عبر Graph Editor",   en: "Silky Graph-Editor Keyframe Curves" },
          { ar: "تسليم ملفات شفافة قابلة لإعادة الاستخدام",    en: "Alpha-Channel Reusable Asset Delivery" }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------
     الأدوات (Arsenal)
     ------------------------------------------------------------------ */
  tools: {
    eyebrow: { ar: "// ترسانة البرامج والأدوات", en: "// POST-PRODUCTION STACK" },
    title:   { ar: "أدوات صناعة المحتوى", en: "The Editing Arsenal" },
    subtitle: {
      ar: "بيئة عمل احترافية مصممة للسرعة، دقة التحريك، وجودة الألوان والصوت السينمائي.",
      en: "Industry-standard pipeline optimized for speed, precision keyframes, and cinema-grade color & audio."
    },
    items: [
      { abbr: "Ae", name: "Adobe After Effects", badge: "PRIMARY", color: "#9999FF",
        desc: { ar: "تحريك احترافي عبر Graph Editor، تتبع كاميرا 3D، جرافيك HUD، وأنظمة النصوص الحركية.",
                en: "Custom Graph Editor curves, 3D camera tracking, HUD/AR callouts, and kinetic motion systems." } },
      { abbr: "Pr", name: "Adobe Premiere Pro", badge: "", color: "#EA77FF",
        desc: { ar: "مونتاج متعدد الكاميرات، قص إيقاعي سريع، وإدارة المشاريع الضخمة بسلاسة تامة.",
                en: "Multi-cam narrative assembly, high-speed rhythm cutting, dynamic proxy workflows & XML roundtripping." } },
      { abbr: "Dv", name: "DaVinci Resolve", badge: "", color: "#4ADE80",
        desc: { ar: "تلوين سينمائي متقدم بنظام العقد (Nodes)، محاكاة أفلام السينما، وضبط ألوان البشرة.",
                en: "Node-based color grading, LOG-to-Rec.709 film emulation, skin-tone isolation, and halation looks." } },
      { abbr: "Sfx", name: "Sound Design & SFX", badge: "", color: "#FBBF24",
        desc: { ar: "بناء طبقات المؤثرات الصوتية (Risers & Impacts)، تنقية الصوت، وموازنة المستويات الصوتية.",
                en: "Tactile risers, sub-drops, foley layering, vocal clarity EQ, and broadcast-standard loudness mastering." } }
    ]
  },

  /* ------------------------------------------------------------------
     خطوات العمل
     ------------------------------------------------------------------ */
  workflow: {
    eyebrow: { ar: "// خطوات العمل", en: "// SEAMLESS EXECUTION" },
    title:   { ar: "من رابط الملفات الخام إلى فيديو جاهز للانتشار", en: "From Raw Drive Link to Viral Cut" },
    steps: [
      { num: "01", title: { ar: "استلام الملفات والتصور", en: "Brief & Raw Footage" },
        desc: { ar: "مشاركة رابط Google Drive للقطات الخام، والأمثلة المرجعية، والهدف من الفيديو.",
                en: "Share your Google Drive/Frame.io footage, references, and target retention goals." } },
      { num: "02", title: { ar: "المونتاج المبدئي والإيقاع", en: "Rough Cut & Pacing" },
        desc: { ar: "بناء القصة، حذف الفراغات، وضبط خطاف البداية والإيقاع العام للفيديو.",
                en: "Structuring the story arc, trimming dead air, and locking the hook & narrative rhythm." } },
      { num: "03", title: { ar: "الموشن جرافيك والصوت", en: "Motion Graphics & SFX" },
        desc: { ar: "إضافة تحريكات After Effects، جرافيك HUD، لقطات B-Roll، والمؤثرات الصوتية.",
                en: "Injecting custom After Effects animations, HUD overlays, B-roll, and immersive sound design." } },
      { num: "04", title: { ar: "التلوين والتسليم النهائي", en: "Final Polish & Delivery" },
        desc: { ar: "التلوين السينمائي، تنفيذ التعديلات بدقة، والتصدير بأعلى جودة 4K/1080p.",
                en: "Color grading, fast frame-accurate revisions, and final 4K/1080p high-bitrate export." } }
    ]
  },

  /* ------------------------------------------------------------------
     التواصل
     ------------------------------------------------------------------ */
  contact: {
    eyebrow: { ar: "// ابدأ مشروعك الآن", en: "// START A PROJECT" },
    title:   { ar: "جاهز للارتقاء بمستوى فيديوهاتك القادمة؟", en: "Ready to Elevate Your Next Video?" },
    subtitle: {
      ar: "سواء كنت تحتاج إلى مونتاج فيديو إعلاني واحد أو شراكة شهرية مستمرة لصناعة المحتوى، أرسل تفاصيل مشروعك ولنبدأ العمل.",
      en: "Whether you need a single high-impact commercial edit or a dedicated monthly content partner, send over your vision and let’s cut."
    },

    whatsapp_label: { ar: "تواصل مباشر عبر واتساب", en: "WhatsApp Direct" },
    whatsapp_number: "201212439985",          // رقم الواتساب بكود الدولة بدون +
    whatsapp_display: "+20 121 243 9985",     // الشكل اللي هيظهر في الموقع
    email: "nabhanlvideoeditor@gmail.com",
    email_label: { ar: "البريد الإلكتروني للعمل (اضغط للنسخ)", en: "Business Inquiries (Click to Copy)" },

    socials_label: { ar: "تابع أرشيف الأعمال", en: "FOLLOW THE ARCHIVE" },
    socials: [
      { icon: "instagram", label: "Instagram", url: "https://instagram.com/" },
      { icon: "tiktok",    label: "TikTok",    url: "https://tiktok.com/" },
      { icon: "youtube",   label: "YouTube",   url: "https://youtube.com/" },
      { icon: "facebook",  label: "Facebook",  url: "https://facebook.com/" }
    ],

    form: {
      name_label:  { ar: "الاسم أو العلامة التجارية *", en: "Your Name / Brand *" },
      email_label: { ar: "البريد الإلكتروني أو رقم الواتساب *", en: "Email or WhatsApp *" },
      type_label:  { ar: "نوع المشروع المطلوب", en: "Project Format" },
      ref_label:   { ar: "رابط الملفات الخام أو فيديو مرجعي", en: "Footage or Reference Link" },
      msg_label:   { ar: "تفاصيل المشروع وموعد التسليم المتوقع *", en: "Project Brief & Deadline *" },
      submit:      { ar: "إرسال تفاصيل المشروع", en: "Send Project Brief" },
      ok_title:    { ar: "تم استلام طلبك بنجاح!", en: "Brief Received!" },
      ok_desc:     { ar: "شكراً لتواصلك مع نبهان. سيقوم محمد نبهان بمراجعة تفاصيل مشروعك والرد عليك خلال 24 ساعة.",
                     en: "Thanks for reaching out. Mohamed Nabhan will review your project details and reply within 24 hours." },
      reset:       { ar: "إرسال مشروع آخر", en: "Send Another Brief" },
      // الاختيارات اللي هتظهر في قائمة "نوع المشروع"
      types: [
        { ar: "فيديو قصير / ريلز", en: "Short-Form Reels" },
        { ar: "يوتيوب / وثائقي",   en: "YouTube / Documentary" },
        { ar: "موشن جرافيك / إعلان", en: "Motion Graphics / Commercial" },
        { ar: "مشروع آخر",         en: "Other" }
      ]
    }
  },

  /* ------------------------------------------------------------------
     الفوتر
     ------------------------------------------------------------------ */
  footer: {
    copy: { ar: "© 2026 محمد نبهان. جميع الحقوق محفوظة.", en: "© 2026 Mohamed Nabhan. All Rights Reserved." },
    tag:  { ar: "مصمم لصناعة محتوى بصري عالي التأثير", en: "CRAFTED FOR HIGH-RETENTION STORYTELLING" }
  }
};

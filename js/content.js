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
    title: { ar: "نبهان | فيديو إيديتور", en: "Nabhan | Video Editor" },
    description: {
      ar: "نبهان — فيديو إيديتور ومصمم موشن جرافيك: ريلز عالية الانتشار، أفلام وثائقية، جرافيك HUD، وهندسة صوتية احترافية.",
      en: "Nabhan — Video Editor & Motion Designer crafting viral short-form reels, documentary storytelling, custom HUD overlays, and precision sound design."
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
    about:     { ar: "نبذة",                en: "About" },
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
      ar: "أعمال مختارة من مشاريع المونتاج — عدّل المشاريع من صفحة التحكم admin.html أو من ملف content.js",
      en: "A selection of editing projects — edit them from admin.html or content.js"
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
        id: "work-reels",
        category: "reels",
        aspectRatio: "9:16",
        views: "18 sec",
        tools: ["Premiere Pro", "After Effects"],
        thumb: "assets/img/work-reels.jpg",
        videoUrl: "assets/videos/montage-reels.mp4",
        isEmbed: false,
        title: { ar: "ريلز تعليمي — «في عالم كل ثانية فيه محسوبة»", en: "Educational Reel — “Every Second Counts”" },
        tag: { ar: "ريلز / محتوى تعليمي", en: "Short-Form / Educational" },
        challenge: {
          ar: "تحويل شرح تحليلي إلى ريلز عمودي من ١٨ ثانية يشدّ المشاهد من أول إطار من غير ما يحس إنه محتوى طويل.",
          en: "Turn an analytical explainer into an 18-second vertical reel that hooks viewers from the first frame without ever feeling rushed."
        },
        technique: {
          ar: "نصوص حركية متدرجة الألوان، وخريطة متحركة خلف المتحدث، وقصّ إيقاعي سريع، ومؤثرات صوتية مدروسة على اللحظات المفتاحية.",
          en: "Kinetic colour-graded captions, a live map layer behind the speaker, tight rhythm cutting, and sound hits placed exactly on the key beats."
        },
        result: {
          ar: "نسخة نهائية بدقة 1080×1920 مهيأة للنشر على إنستجرام وتيك توك ويوتيوب شورتس.",
          en: "A final 1080×1920 cut, ready to publish across Instagram Reels, TikTok and YouTube Shorts."
        }
      },
      {
        id: "work-medical",
        category: "reels",
        aspectRatio: "9:16",
        views: "32 sec",
        tools: ["Premiere Pro", "DaVinci Resolve"],
        thumb: "assets/img/work-medical.jpg",
        videoUrl: "assets/videos/montage-medical.mp4",
        isEmbed: false,
        title: { ar: "إعلان عيادة أسنان — مونتاج سينمائي", en: "Dental Clinic Promo — Cinematic Cut" },
        tag: { ar: "إعلان / قطاع طبي", en: "Commercial / Healthcare" },
        challenge: {
          ar: "توصيل إحساس الاحتراف والراحة في ٣٢ ثانية، من غير أي نص طويل أو شرح مباشر.",
          en: "Communicate professionalism and calm within 32 seconds — with no long voiceover or direct explanation."
        },
        technique: {
          ar: "إضاءة بلون تييل سينمائي، ولقطات مقربة للتفاصيل، وانتقالات ناعمة، وتلوين متجانس يوحّي بالنظافة والجودة.",
          en: "Cinematic teal lighting, detail-driven close-ups, soft transitions, and a unified grade that reads as clean and premium."
        },
        result: {
          ar: "فيديو عمودي 9:16 جاهز للنشر كإعلان على منصات التواصل.",
          en: "A 9:16 vertical spot, ready to run as a paid social campaign."
        }
      },
      {
        id: "work-fashion",
        category: "motion",
        aspectRatio: "9:16",
        views: "31 sec",
        tools: ["Premiere Pro", "After Effects"],
        thumb: "assets/img/work-fashion.jpg",
        videoUrl: "assets/videos/montage-fashion.mp4",
        isEmbed: false,
        title: { ar: "براند ملابس — خلف الكواليس", en: "Fashion Brand — Behind The Scenes" },
        tag: { ar: "براند / أزياء", en: "Brand / Fashion" },
        short: { ar: "خلف الكواليس", en: "Behind The Scenes" },
        challenge: {
          ar: "تحويل لقطات خلف الكواليس إلى محتوى يحمل هوية البراند ويشدّ المتابع في أول ثواني.",
          en: "Turn raw behind-the-scenes footage into content that carries the brand’s identity and holds attention from the first seconds."
        },
        technique: {
          ar: "طبقة HUD تحاكي شاشة الكاميرا (REC + بطارية + إطارات تركيز)، وقصّ سريع على الإيقاع، ولقطات مقربة للتفاصيل.",
          en: "A camera-HUD overlay (REC, battery, focus brackets), fast beat-synced cutting, and detail close-ups."
        },
        result: {
          ar: "محتوى عمودي جاهز للنشر على حسابات البراند ويعكس أجواء جلسة التصوير.",
          en: "Vertical content ready for the brand’s channels, capturing the energy of the shoot."
        },
        extra: [
          {
            videoUrl: "assets/videos/montage-nike.mp4",
            thumb: "assets/img/work-nike.jpg",
            short: { ar: "عرض منتج — نايكي", en: "Nike Product Cut" },
            title: { ar: "نايكي — عرض منتج لطقم رياضي", en: "Nike — Tracksuit Product Showcase" },
            tag: { ar: "إعلان منتج / متجر رياضية", en: "Product Ad / Sportswear Store" }
          }
        ]
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
     نبذة عن نبهان
     ------------------------------------------------------------------ */
  about: {
    eyebrow: { ar: "// نبذة", en: "// ABOUT" },
    title:   { ar: "مونتير بيشتغل كأنه شريك في مشروعك", en: "An editor who treats your project like his own" },
    subtitle: {
      ar: "مش بس بقص لقطات — ببني إيقاع بصري خلاصته إن المشاهد يكمّل للآخر.",
      en: "I don’t just cut clips — I build a visual rhythm whose payoff is that viewers stay until the end."
    },
    bio: [
      {
        ar: "أنا نبهان — مونتير فيديو ومصمم موشن جرافيك. شغلي بيبدأ من اللقطات الخام وبيوصل لفيديو جاهز للنشر، قرارات القص فيه مبنية على الإيقاع والمؤثر الصوتي مش على «الشكل» بس.",
        en: "I’m Nabhan — a video editor & motion graphics designer. My work starts from raw footage and ends with a publish-ready video, where every cut is driven by rhythm and sound rather than looks alone."
      },
      {
        ar: "تعاملت مع براندات ملابس، عيادات، وصناع محتوى — وكل مشروع بيبدأ بفهم الجمهور قبل فتح خط الزمن.",
        en: "I’ve worked with fashion brands, clinics, and content creators — and every project starts with understanding the audience before opening the timeline."
      }
    ],
    points: [
      { ar: "متخصص في الريلز عالية الاحتفاظ بالمشاهد", en: "Short-form built for retention" },
      { ar: "إعلانات براند: أزياء، قطاع طبي، ومتاجر رياضية", en: "Brand campaigns across fashion, healthcare & sportswear" },
      { ar: "نسخة أولى سريعة وتسليم منضبط بالمواعيد", en: "Fast first cut, reliable deadlines" },
      { ar: "تواصل مباشر على واتساب طوال مدة التنفيذ", en: "Direct WhatsApp line throughout the project" }
    ],
    cta: { ar: "ابدأ مشروعك", en: "Start Your Project" }
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
  },

  /* ------------------------------------------------------------------
     صفحات الموقع الرسمية
     ------------------------------------------------------------------ */
  legal: {
    privacy: "privacy.html",
    privacy_label: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
    terms_label:   { ar: "الشروط والأحكام", en: "Terms of Service" }
  },

  /* ------------------------------------------------------------------
     الإعلانات — عشان تكسب من الزيارات
     ------------------------------------------------------------------
     فعّلها لما يجيك موافقة Google AdSense:
     1) enabled: true
     2) client: "ca-pub-XXXXXXXXXXXXXXXX"  (من كود AdSense بتاعك)
     3) slots: رقم الـ data-ad-slot لكل مساحة من لوحة AdSense
     لحد ما تفعلها، المكان فلااض ومش بيظهر حاجة.
     ------------------------------------------------------------------ */
  ads: {
    enabled: false,
    client: "",
    slots: { leaderboard: "", infeed: "" },
    label: { ar: "إعلان", en: "Advertisement" }
  }
};

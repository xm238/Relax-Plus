const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const year = document.getElementById("year");
const bookingForm = document.getElementById("booking-form");
const formFeedback = document.getElementById("form-feedback");
const siteHeader = document.querySelector(".site-header");
const metaDescription = document.querySelector('meta[name="description"]');

const safeStorage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      return;
    }
  },
};

const translations = {
  tr: {
    "meta.title": "Relax Plus | Beylikdüzü Premium Masaj Salonu",
    "meta.description":
      "Relax Plus, Beylikdüzü İstanbul'da premium masaj deneyimi sunar. Özel odalar, uzman terapistler ve 200-300 USD arasında lüks paketler.",
    "brand.homeAria": "Relax Plus ana sayfa",
    "brand.name": "Relax Plus",
    "nav.primaryAria": "Ana menü",
    "nav.services": "Hizmetler",
    "nav.gallery": "Galeri",
    "nav.reviews": "Yorumlar",
    "nav.book": "Rezervasyon",
    "nav.callNow": "Hemen Ara",
    "lang.ariaLabel": "Dil seçimi",
    "menu.toggleAria": "Menüyü aç veya kapat",
    "hero.eyebrow": "Beylikdüzü Premium Masaj Salonu",
    "hero.title": "Lüks Rahatlama Geceleri. Üst Düzey Masaj Deneyimi.",
    "hero.lead":
      "Özel terapi odaları, uzman terapistler ve stresi hızla azaltan premium atmosfer. Paketler <strong>$200</strong> ile başlar, <strong>$300</strong> seviyesine kadar çıkar.",
    "hero.trust.reviews": "73 doğrulanmış yorumla memnuniyet oranı sürekli yüksek kalıyor.",
    "hero.trust.openLabel": "Geç Saatlere Kadar Açık",
    "hero.trust.openInfo": "Her gün geç saatlere kadar hizmet verilir, kapanış saati 03:00'tür.",
    "hero.trust.locationLabel": "Merkezi Konum",
    "hero.trust.locationInfo": "Avrupa Cd. No:82, D:11 adresinde merkezi konum ve kolay ulaşım.",
    "hero.reserve": "Seans Ayırt",
    "hero.directions": "Yol Tarifi Al",
    "hero.phoneLabel": "Telefon:",
    "hero.instagramLabel": "Instagram:",
    "stats.one": "Tamamlanan masaj seansı",
    "stats.two": "Haftanın her günü açık",
    "stats.threeTitle": "Özel",
    "stats.three": "Duşlu bireysel terapi odaları",
    "stats.fourTitle": "Hızlı Rezervasyon",
    "stats.four": "Telefon + Instagram + form ile anında",
    "services.eyebrow": "Paketler (USD)",
    "services.title": "Dönüşümü yüksek, premium müşteriye odaklı fiyatlama.",
    "services.subtitle":
      "Tüm paketlerde özel oda hazırlığı, premium havlu seti, aroma ambiyansı ve seans sonrası çay servisi vardır.",
    "plans.basic.tag": "En İyi Başlangıç",
    "plans.basic.item1": "60 dk derin doku masajı",
    "plans.basic.item2": "Boyun ve omuz odaklı basınçlama",
    "plans.basic.item3": "Özel duş odası erişimi",
    "plans.basic.cta": "Deep Reset Ayırt",
    "plans.pro.tag": "En Çok Tercih Edilen",
    "plans.pro.item1": "75 dk imza terapi karışımı",
    "plans.pro.item2": "Sıcak taş bitişi + aroma yağları",
    "plans.pro.item3": "Öncelikli randevu saati",
    "plans.pro.cta": "Royal Recovery Rezerve Et",
    "plans.elite.tag": "Lüks Seviye",
    "plans.elite.item1": "90 dk tam vücut terapi ritüeli",
    "plans.elite.item2": "Ayak ritüeli ve ekstra gevşeme",
    "plans.elite.item3": "VIP oda hazırlığı",
    "plans.elite.cta": "Elite Escape Ayırt",
    "gallery.eyebrow": "Mekan Deneyimi",
    "gallery.title": "İlk bakışta güven veren atmosfer, saniyeler içinde ikna eden görünüm.",
    "reviews.eyebrow": "Sosyal Kanıt",
    "reviews.title": "Misafirler memnun kalıyor, tekrar rezervasyon yapıyor.",
    "reviews.quote1":
      '"Bugün ziyaret ettim. Ekibin ilgisi harikaydı, masaj çok kaliteliydi ve fiyat kesinlikle değerdi."',
    "reviews.quote2": '"Temiz bir salon, iyi personel ve profesyonel hizmet. Kesinlikle tavsiye ederim."',
    "reviews.quote3": '"Profesyonel kadro ve güçlü yönetim. Tekrar gelmek isteyeceğiniz bir yer."',
    "reviews.stars": "5 yıldız yorum",
    "booking.eyebrow": "Saniyeler İçinde Rezervasyon",
    "booking.title": "Talebini gönder, seans saatini kilitle.",
    "booking.subtitle":
      "Bu form şu an front-end placeholder olarak çalışıyor. İstediğin backend/API bağlantısıyla direkt canlı rezervasyona dönüştürülebilir.",
    "booking.point1": "Adres: Adnan Kahveci, Avrupa Cd. No:82 D:11, 34528 Beylikdüzü/İstanbul",
    "booking.point2": "Telefon desteği: 0505 523 98 66",
    "booking.point3": "Her gün açık, 03:00'te kapanır",
    "form.nameLabel": "Ad Soyad",
    "form.namePlaceholder": "Adınız Soyadınız",
    "form.phoneLabel": "Telefon Numarası",
    "form.phonePlaceholder": "+90 5XX XXX XX XX",
    "form.packageLabel": "Paket",
    "form.packagePlaceholder": "Paket seçiniz",
    "form.packageOne": "Deep Reset 60 - $220",
    "form.packageTwo": "Royal Recovery 75 - $260",
    "form.packageThree": "Elite Escape 90 - $300",
    "form.datetimeLabel": "Tercih Ettiğiniz Tarih ve Saat",
    "form.notesLabel": "Notlar (Opsiyonel)",
    "form.notesPlaceholder": "Özel taleplerinizi yazabilirsiniz",
    "form.submit": "Rezervasyon Talebi Gönder",
    "form.feedbackSuccess": "Talebiniz alındı. Canlıya almak için bu formu backend rezervasyon API'sine bağlayın.",
    "faq.eyebrow": "Sık Sorulanlar",
    "faq.title": "İlk ziyaret öncesi bilmen gerekenler.",
    "faq.q1": "Ödeme şimdi online mı yapılıyor?",
    "faq.a1": "Hayır. Onay süreci telefonla veya daha sonra entegre edilecek checkout sistemiyle ilerleyebilir.",
    "faq.q2": "Hizmet politikası nasıl?",
    "faq.a2": "Uygunluk ve detaylar rezervasyon öncesi telefonla netleştirilir.",
    "faq.q3": "Geç saat randevusu alabilir miyim?",
    "faq.a3": "Evet. Günlük müsaitliğe göre 03:00'e kadar randevu alınabilir.",
    "footer.tagline": "Professional Therapy & Massage",
    "footer.copyStart": "Telif Hakkı",
    "footer.copyEnd": "Tüm hakları saklıdır.",
    "mobile.ariaLabel": "Hızlı işlem tuşları",
    "mobile.call": "Ara",
    "mobile.book": "Rezervasyon",
    "mobile.instagram": "Instagram",
  },
  en: {
    "meta.title": "Relax Plus | Premium Massage Salon in Beylikduzu",
    "meta.description":
      "Relax Plus offers a premium massage experience in Beylikduzu, Istanbul. Private rooms, expert therapists, and luxury packages between $200 and $300.",
    "brand.homeAria": "Relax Plus homepage",
    "brand.name": "Relax Plus",
    "nav.primaryAria": "Main navigation",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.book": "Book",
    "nav.callNow": "Call Now",
    "lang.ariaLabel": "Language switch",
    "menu.toggleAria": "Toggle menu",
    "hero.eyebrow": "Beylikduzu Premium Massage Lounge",
    "hero.title": "Luxury Recovery Nights. Elite Massage Experience.",
    "hero.lead":
      "Private therapy suites, expert therapists, and a premium atmosphere that melts stress fast. Packages start at <strong>$200</strong> and go up to <strong>$300</strong>.",
    "hero.trust.reviews": "73 verified reviews with consistently high guest satisfaction and repeat visits.",
    "hero.trust.openLabel": "Open Late",
    "hero.trust.openInfo": "Open daily until late night with service continuing up to 3:00 AM.",
    "hero.trust.locationLabel": "Prime Location",
    "hero.trust.locationInfo": "Located at Avrupa Cd. No:82, D:11 with quick and easy access in central Beylikduzu.",
    "hero.reserve": "Reserve Session",
    "hero.directions": "Get Directions",
    "hero.phoneLabel": "Phone:",
    "hero.instagramLabel": "Instagram:",
    "stats.one": "Massage sessions delivered",
    "stats.two": "Open every day",
    "stats.threeTitle": "Private",
    "stats.three": "Individual suites with shower",
    "stats.fourTitle": "Fast Booking",
    "stats.four": "Phone + Instagram + direct form",
    "services.eyebrow": "Packages (USD)",
    "services.title": "Built to convert. Priced for premium clients.",
    "services.subtitle":
      "Every package includes private room setup, premium towels, aroma ambiance, and post-session tea service.",
    "plans.basic.tag": "Best Entry",
    "plans.basic.item1": "60 min deep tissue massage",
    "plans.basic.item2": "Neck and shoulder pressure work",
    "plans.basic.item3": "Private shower room access",
    "plans.basic.cta": "Book Deep Reset",
    "plans.pro.tag": "Most Booked",
    "plans.pro.item1": "75 min signature therapy blend",
    "plans.pro.item2": "Hot stone finish + aroma oils",
    "plans.pro.item3": "Priority appointment slot",
    "plans.pro.cta": "Reserve Royal Recovery",
    "plans.elite.tag": "Luxury Tier",
    "plans.elite.item1": "90 min total body therapy ritual",
    "plans.elite.item2": "Foot ritual and deep relaxation",
    "plans.elite.item3": "VIP room preparation",
    "plans.elite.cta": "Book Elite Escape",
    "gallery.eyebrow": "Visual Experience",
    "gallery.title": "A space that builds trust in seconds and drives booking decisions.",
    "reviews.eyebrow": "Social Proof",
    "reviews.title": "Guests leave satisfied and come back again.",
    "reviews.quote1":
      '"I visited today. The team was friendly, the massage quality was excellent, and the price was worth it."',
    "reviews.quote2": '"Clean salon, great staff, and professional service. Definitely recommended."',
    "reviews.quote3": '"Professional team and strong management. A place you will want to visit again."',
    "reviews.stars": "5-star review",
    "booking.eyebrow": "Book in Seconds",
    "booking.title": "Send your request and lock your time slot.",
    "booking.subtitle":
      "This form currently runs as a front-end placeholder and is ready to connect to your backend/API for live bookings.",
    "booking.point1": "Address: Adnan Kahveci, Avrupa Cd. No:82 D:11, 34528 Beylikduzu/Istanbul",
    "booking.point2": "Phone support: 0505 523 98 66",
    "booking.point3": "Open daily, closes at 3:00 AM",
    "form.nameLabel": "Full Name",
    "form.namePlaceholder": "Your full name",
    "form.phoneLabel": "Phone Number",
    "form.phonePlaceholder": "+90 5XX XXX XX XX",
    "form.packageLabel": "Package",
    "form.packagePlaceholder": "Select package",
    "form.packageOne": "Deep Reset 60 - $220",
    "form.packageTwo": "Royal Recovery 75 - $260",
    "form.packageThree": "Elite Escape 90 - $300",
    "form.datetimeLabel": "Preferred Date & Time",
    "form.notesLabel": "Notes (Optional)",
    "form.notesPlaceholder": "Any preference or request",
    "form.submit": "Request Reservation",
    "form.feedbackSuccess": "Reservation request captured. Connect this form to your backend booking API to make it live.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Everything to know before your first visit.",
    "faq.q1": "Do I need to pay online now?",
    "faq.a1": "No. Confirmation can be handled by phone or by your future checkout integration.",
    "faq.q2": "How is the service policy handled?",
    "faq.a2": "Availability and policy details are confirmed by phone before booking.",
    "faq.q3": "Can I book a late-night slot?",
    "faq.a3": "Yes. Late-night appointments are available daily based on availability until 3:00 AM.",
    "footer.tagline": "Professional Therapy & Massage",
    "footer.copyStart": "Copyright",
    "footer.copyEnd": "All rights reserved.",
    "mobile.ariaLabel": "Quick actions",
    "mobile.call": "Call",
    "mobile.book": "Book",
    "mobile.instagram": "Instagram",
  },
  ar: {
    "meta.title": "Relax Plus | صالون مساج فاخر في بيليك دوزو",
    "meta.description":
      "Relax Plus يقدم تجربة مساج فاخرة في بيليك دوزو اسطنبول مع غرف خاصة ومعالجين محترفين وباقات بين 200 و300 دولار.",
    "brand.homeAria": "الصفحة الرئيسية Relax Plus",
    "brand.name": "Relax Plus",
    "nav.primaryAria": "التنقل الرئيسي",
    "nav.services": "الخدمات",
    "nav.gallery": "المعرض",
    "nav.reviews": "المراجعات",
    "nav.book": "الحجز",
    "nav.callNow": "اتصل الآن",
    "lang.ariaLabel": "تبديل اللغة",
    "menu.toggleAria": "فتح وإغلاق القائمة",
    "hero.eyebrow": "صالون مساج فاخر في بيليك دوزو",
    "hero.title": "ليالي استشفاء فاخرة. تجربة مساج نخبوية.",
    "hero.lead":
      "غرف علاج خاصة ومعالجون محترفون وأجواء فاخرة تزيل التوتر بسرعة. تبدأ الباقات من <strong>$200</strong> وتصل إلى <strong>$300</strong>.",
    "hero.trust.reviews": "73 مراجعة موثقة مع رضا مرتفع ومستمر من العملاء.",
    "hero.trust.openLabel": "مفتوح حتى وقت متأخر",
    "hero.trust.openInfo": "خدمة يومية حتى وقت متأخر، والإغلاق الساعة 3:00 صباحا.",
    "hero.trust.locationLabel": "موقع مميز",
    "hero.trust.locationInfo": "العنوان Avrupa Cd. No:82, D:11 بموقع مركزي وسهولة وصول ممتازة.",
    "hero.reserve": "احجز الجلسة",
    "hero.directions": "الاتجاهات",
    "hero.phoneLabel": "الهاتف:",
    "hero.instagramLabel": "انستغرام:",
    "stats.one": "جلسات مساج مكتملة",
    "stats.two": "مفتوح كل ايام الاسبوع",
    "stats.threeTitle": "خصوصي",
    "stats.three": "غرف فردية مع دش",
    "stats.fourTitle": "حجز سريع",
    "stats.four": "هاتف + انستغرام + نموذج مباشر",
    "services.eyebrow": "الباقات (USD)",
    "services.title": "تسعير عالي التحويل ومخصص للعملاء المميزين.",
    "services.subtitle": "كل باقة تشمل تجهيز غرفة خاصة ومناشف فاخرة وعبق عطري وشاي بعد الجلسة.",
    "plans.basic.tag": "أفضل بداية",
    "plans.basic.item1": "60 دقيقة مساج عميق للعضلات",
    "plans.basic.item2": "تركيز ضغط على الرقبة والكتفين",
    "plans.basic.item3": "دخول غرفة دش خاصة",
    "plans.basic.cta": "احجز Deep Reset",
    "plans.pro.tag": "الأكثر حجزا",
    "plans.pro.item1": "75 دقيقة علاج توقيعي",
    "plans.pro.item2": "إنهاء بالأحجار الساخنة وزيوت عطرية",
    "plans.pro.item3": "أولوية في المواعيد",
    "plans.pro.cta": "احجز Royal Recovery",
    "plans.elite.tag": "فئة فاخرة",
    "plans.elite.item1": "90 دقيقة طقوس علاج كامل الجسم",
    "plans.elite.item2": "طقس عناية للقدم واسترخاء عميق",
    "plans.elite.item3": "تجهيز غرفة VIP",
    "plans.elite.cta": "احجز Elite Escape",
    "gallery.eyebrow": "التجربة البصرية",
    "gallery.title": "مساحة تبني الثقة خلال ثوان وتدفع للحجز مباشرة.",
    "reviews.eyebrow": "الدليل الاجتماعي",
    "reviews.title": "الضيوف يغادرون برضا ويعودون للحجز مرة أخرى.",
    "reviews.quote1": "\"زرت المكان اليوم. الفريق رائع وجودة المساج ممتازة والسعر يستحق تماما.\"",
    "reviews.quote2": "\"مكان نظيف وطاقم ممتاز وخدمة احترافية. أنصح به جدا.\"",
    "reviews.quote3": "\"فريق محترف وإدارة قوية. مكان تريد زيارته مرة أخرى.\"",
    "reviews.stars": "مراجعة 5 نجوم",
    "booking.eyebrow": "احجز خلال ثوان",
    "booking.title": "أرسل طلبك وثبت موعد جلستك.",
    "booking.subtitle": "هذا النموذج يعمل حاليا كواجهة أمامية ويمكن ربطه مباشرة مع API للحجز المباشر.",
    "booking.point1": "العنوان: Adnan Kahveci, Avrupa Cd. No:82 D:11, 34528 Beylikduzu/Istanbul",
    "booking.point2": "دعم الهاتف: 0505 523 98 66",
    "booking.point3": "مفتوح يوميا، الإغلاق 3:00 صباحا",
    "form.nameLabel": "الاسم الكامل",
    "form.namePlaceholder": "اكتب اسمك الكامل",
    "form.phoneLabel": "رقم الهاتف",
    "form.phonePlaceholder": "+90 5XX XXX XX XX",
    "form.packageLabel": "الباقة",
    "form.packagePlaceholder": "اختر الباقة",
    "form.packageOne": "Deep Reset 60 - $220",
    "form.packageTwo": "Royal Recovery 75 - $260",
    "form.packageThree": "Elite Escape 90 - $300",
    "form.datetimeLabel": "التاريخ والوقت المفضل",
    "form.notesLabel": "ملاحظات (اختياري)",
    "form.notesPlaceholder": "أي طلب أو تفضيل خاص",
    "form.submit": "إرسال طلب الحجز",
    "form.feedbackSuccess": "تم استلام طلبك. اربط النموذج بواجهة الحجز الخلفية لتفعيل الحجز المباشر.",
    "faq.eyebrow": "الأسئلة الشائعة",
    "faq.title": "كل ما تحتاجه قبل زيارتك الأولى.",
    "faq.q1": "هل يجب الدفع أونلاين الآن؟",
    "faq.a1": "لا. يمكن تأكيد الحجز عبر الهاتف أو عبر نظام الدفع الذي ستضيفه لاحقا.",
    "faq.q2": "كيف يتم التعامل مع سياسة الخدمة؟",
    "faq.a2": "يتم تأكيد التفاصيل وسياسة الخدمة عبر الهاتف قبل الحجز.",
    "faq.q3": "هل يمكن حجز موعد متأخر ليلا؟",
    "faq.a3": "نعم. تتوفر مواعيد متأخرة يوميا حسب التوفر حتى 3:00 صباحا.",
    "footer.tagline": "Professional Therapy & Massage",
    "footer.copyStart": "جميع الحقوق",
    "footer.copyEnd": "محفوظة.",
    "mobile.ariaLabel": "إجراءات سريعة",
    "mobile.call": "اتصال",
    "mobile.book": "حجز",
    "mobile.instagram": "انستغرام",
  },
};

let currentLang = "tr";

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.tr;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("lang-ar", lang === "ar");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const mappings = node.dataset.i18nAttr.split(",").map((item) => item.trim());

    mappings.forEach((mapping) => {
      const [attr, key] = mapping.split(":").map((item) => item.trim());
      if (attr && key && dictionary[key]) {
        node.setAttribute(attr, dictionary[key]);
      }
    });
  });

  if (dictionary["meta.title"]) {
    document.title = dictionary["meta.title"];
  }

  if (metaDescription && dictionary["meta.description"]) {
    metaDescription.setAttribute("content", dictionary["meta.description"]);
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

document.addEventListener("click", (event) => {
  const langButton = event.target.closest(".lang-btn");
  if (langButton) {
    const nextLang = langButton.dataset.lang;
    if (nextLang && translations[nextLang]) {
      applyLanguage(nextLang);
      safeStorage.set("relax_plus_lang", nextLang);
    }
    return;
  }

  if (menuToggle && siteNav && event.target.closest("#menu-toggle")) {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
    if (siteHeader) {
      siteHeader.classList.toggle("is-floating", isOpen || window.scrollY > 14);
    }
    return;
  }

  if (menuToggle && siteNav && event.target.closest("#site-nav a")) {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    if (siteHeader) {
      siteHeader.classList.toggle("is-floating", window.scrollY > 14);
    }
  }
});

const savedLanguage = safeStorage.get("relax_plus_lang");
const initialLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : "tr";
applyLanguage(initialLanguage);

const revealItems = document.querySelectorAll("[data-reveal]");
const shouldSkipReveal =
  window.matchMedia("(max-width: 820px)").matches ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (shouldSkipReveal) {
  revealItems.forEach((item) => item.classList.add("in-view"));
} else if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

function setMobileFloatingHeader() {
  if (!siteHeader) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 820px)").matches;
  if (!isMobile) {
    siteHeader.classList.remove("is-floating");
    return;
  }

  if (document.body.classList.contains("menu-open")) {
    siteHeader.classList.add("is-floating");
    return;
  }

  siteHeader.classList.toggle("is-floating", window.scrollY > 14);
}

let scrollTicking = false;
window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(() => {
      setMobileFloatingHeader();
      scrollTicking = false;
    });
  },
  { passive: true }
);

window.addEventListener("resize", setMobileFloatingHeader);
setMobileFloatingHeader();

if (bookingForm && formFeedback) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formFeedback.textContent = translations[currentLang]["form.feedbackSuccess"];
    bookingForm.reset();
  });
}

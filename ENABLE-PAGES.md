# 🔧 كيف تفعّل GitHub Pages

## 📌 المشكلة الحالية

الموقع يظهر "File not found" لأن GitHub Pages لم يتم تفعيله بعد.

---

## ✅ الحل (خطوتين فقط!)

### الخطوة 1: تحقق من GitHub Actions

افتح: **https://github.com/alihaidershakermax/wiki/actions**

يجب أن ترى:
- ✅ علامة خضراء = نجح
- 🟡 دائرة صفراء = جاري البناء (انتظر دقيقة)
- ❌ علامة حمراء = فشل (أخبرني)

**انتظر حتى ترى ✅ خضراء قبل المتابعة!**

---

### الخطوة 2: فعّل GitHub Pages

#### أ. افتح إعدادات Pages:
**https://github.com/alihaidershakermax/wiki/settings/pages**

#### ب. اختر الإعدادات التالية:

```
Build and deployment
├── Source: Deploy from a branch
└── Branch: 
    ├── Branch: gh-pages  ← اختر هذا من القائمة
    └── Folder: / (root)  ← اختر هذا
```

#### ج. اضغط **Save** 💾

---

### الخطوة 3: انتظر 2-3 دقائق

GitHub Pages يحتاج وقت لنشر الموقع لأول مرة.

---

### الخطوة 4: افتح موقعك! 🎉

**https://alihaidershakermax.github.io/wiki/**

---

## 🔍 إذا لم تجد branch اسمه gh-pages

معناها GitHub Actions لم ينتهي بعد. ارجع للخطوة 1 وانتظر.

---

## 📸 صورة توضيحية للإعدادات

في صفحة Settings > Pages، يجب أن تختار:

```
┌─────────────────────────────────────┐
│ Build and deployment                │
├─────────────────────────────────────┤
│ Source:                             │
│ ○ GitHub Actions                    │
│ ● Deploy from a branch              │ ← اختر هذا
├─────────────────────────────────────┤
│ Branch:                             │
│ ┌──────────┐  ┌──────────┐         │
│ │gh-pages ▼│  │/ (root) ▼│  [Save] │ ← اختر هذه
│ └──────────┘  └──────────┘         │
└─────────────────────────────────────┘
```

---

## ⚠️ ملاحظات مهمة

1. **لا تختار "GitHub Actions" كـ Source** - اختر "Deploy from a branch"
2. **يجب أن يكون Branch هو "gh-pages"** وليس "main"
3. **Folder يجب أن يكون "/ (root)"**
4. **لا تنسى الضغط على Save!**

---

## 🔗 روابط سريعة

- **Actions:** https://github.com/alihaidershakermax/wiki/actions
- **Pages Settings:** https://github.com/alihaidershakermax/wiki/settings/pages
- **الموقع (بعد التفعيل):** https://alihaidershakermax.github.io/wiki/

---

## 📞 إذا واجهت مشكلة

أخبرني بـ:
1. هل GitHub Actions نجح؟ (✅ أو ❌)
2. هل تجد branch اسمه "gh-pages"؟
3. ماذا يظهر في صفحة Settings > Pages؟

---

**حقوق النشر © 2026 - علي الأكبر حيدر**

**🚀 فقط فعّل Pages وموقعك سيعمل!**

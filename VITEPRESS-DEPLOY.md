# 🚀 دليل نشر VitePress على GitHub Pages

## الخطوات الكاملة

### 1️⃣ إنشاء مستودع على GitHub

1. اذهب إلى: https://github.com/new
2. **اسم المستودع:** `wiki`
3. **الوصف:** ويكي علي الأكبر حيدر
4. اختر **Public**
5. **لا تضف** README أو .gitignore أو LICENSE
6. اضغط **Create repository**

---

### 2️⃣ تهيئة Git محلياً

افتح Terminal في مجلد المشروع واكتب:

```bash
# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# أول commit
git commit -m "✨ feat: إنشاء ويكي علي الأكبر حيدر مع VitePress"

# ربط بـ GitHub (غيّر username إذا كان مختلف)
git remote add origin https://github.com/alihaidershakermax/wiki.git

# تسمية الفرع الرئيسي
git branch -M main

# رفع الملفات
git push -u origin main
```

---

### 3️⃣ تفعيل GitHub Actions

الملف `.github/workflows/deploy-vitepress.yml` موجود بالفعل!

سيتم النشر تلقائياً عند كل push.

---

### 4️⃣ تفعيل GitHub Pages

بعد رفع الملفات:

1. اذهب إلى المستودع: https://github.com/alihaidershakermax/wiki
2. اضغط **Settings** (الإعدادات)
3. من القائمة الجانبية، اضغط **Pages**
4. في قسم **Build and deployment**:
   - **Source:** اختر `Deploy from a branch`
   - **Branch:** اختر `gh-pages`
   - **Folder:** اختر `/ (root)`
5. اضغط **Save**

---

### 5️⃣ مراقبة عملية النشر

1. اذهب إلى تبويب **Actions** في المستودع
2. ستجد عملية "نشر VitePress على GitHub Pages"
3. انتظر حتى تظهر علامة ✅ خضراء
4. عادة تأخذ 2-3 دقائق

---

### 6️⃣ افتح الموقع! 🎉

بعد اكتمال النشر، افتح:

**https://alihaidershakermax.github.io/wiki/**

---

## 🔧 إذا واجهت مشاكل

### المشكلة 1: GitHub Actions فشل

**الحل:**
1. اذهب إلى Settings > Actions > General
2. في **Workflow permissions**، اختر:
   - ✅ Read and write permissions
3. احفظ التغييرات
4. أعد push:
   ```bash
   git commit --allow-empty -m "🔧 fix: تفعيل الأذونات"
   git push
   ```

### المشكلة 2: صفحة 404

**الحل:**
1. تأكد من اختيار الفرع `gh-pages` في Settings > Pages
2. انتظر 2-3 دقائق إضافية
3. امسح الكاش (Ctrl + Shift + R)

### المشكلة 3: الموقع لا يظهر بشكل صحيح

**الحل:**
تأكد من أن `base` في `docs/.vitepress/config.js` صحيح:
```javascript
base: '/wiki/',  // يجب أن يطابق اسم المستودع
```

---

## 📝 التحديثات المستقبلية

### لإضافة محتوى جديد:

```bash
# 1. أضف المحتوى
copy templates\new-page.md docs\02-معرفة\مقالي-الجديد.md

# 2. عدّل الملف كما تريد

# 3. احفظ التغييرات
git add .
git commit -m "📝 docs: إضافة مقال جديد"
git push

# سيتم النشر تلقائياً في 2-3 دقائق!
```

---

## 🎨 تخصيص الموقع

### تغيير الألوان

افتح `docs/.vitepress/config.js` وعدّل:

```javascript
theme: {
  palette: {
    primary: 'blue',  // غيّر اللون
    accent: 'pink'
  }
}
```

### إضافة صفحات للتنقل

في `docs/.vitepress/config.js`:

```javascript
nav: [
  { text: 'الرئيسية', link: '/' },
  { text: 'مشاريعي', link: '/01-مشاريع/' },
  // أضف المزيد هنا
]
```

---

## 📊 إضافة Google Analytics (اختياري)

في `docs/.vitepress/config.js`:

```javascript
head: [
  // ... الموجود
  [
    'script',
    { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }
  ],
  [
    'script',
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');`
  ]
]
```

---

## 🌐 إضافة نطاق مخصص (اختياري)

### 1. شراء نطاق
من: Namecheap, GoDaddy, أو Google Domains

### 2. إضافة ملف CNAME
أنشئ ملف `docs/public/CNAME`:
```
wiki.yourdomain.com
```

### 3. إعداد DNS
في موقع النطاق، أضف:
```
Type: CNAME
Name: wiki
Value: alihaidershakermax.github.io
```

### 4. تحديث GitHub Pages
Settings > Pages > Custom domain: `wiki.yourdomain.com`

---

## 🚀 الأوامر المفيدة

```bash
# تشغيل محلياً
npm run docs:dev

# بناء للإنتاج
npm run docs:build

# معاينة البناء
npm run docs:preview

# التحديث
git add .
git commit -m "📝 docs: تحديث المحتوى"
git push
```

---

## 📱 مشاركة الموقع

بعد النشر، شارك الرابط:

**https://alihaidershakermax.github.io/wiki/**

على:
- Twitter
- LinkedIn
- Facebook
- WhatsApp

---

## ✅ قائمة التحقق

- [ ] إنشاء مستودع على GitHub
- [ ] رفع الملفات (git push)
- [ ] تفعيل GitHub Pages
- [ ] تفعيل الأذونات في Actions
- [ ] انتظار اكتمال النشر
- [ ] فتح الموقع والتأكد
- [ ] إضافة محتوى جديد
- [ ] مشاركة الرابط

---

## 🎉 تهانينا!

ويكيك الآن منشور على الإنترنت!

**الرابط:** https://alihaidershakermax.github.io/wiki/

**شاركه مع العالم! 🌍**

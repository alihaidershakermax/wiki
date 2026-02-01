# 🚀 إعداد VitePress (مثل FMHY تماماً)

## اكتشاف مهم! 🎯

**FMHY يستخدم VitePress وليس MkDocs!**

VitePress هو مولد مواقع ثابتة مبني على Vue.js و Vite - أسرع وأكثر حداثة.

## الفرق بين الخيارين

### MkDocs (تم إنشاؤه بالفعل) ✅
- مبني على Python
- سهل الاستخدام
- ممتاز للوثائق
- Material theme جميل

### VitePress (مثل FMHY) ⭐
- مبني على Vue.js
- أسرع بكثير
- أكثر حداثة
- مرن جداً

## إعداد VitePress

### المتطلبات

```bash
# تحتاج Node.js 18+
node --version
```

### التثبيت

```bash
# 1. تهيئة المشروع
npm init -y

# 2. تثبيت VitePress
npm install -D vitepress

# 3. تهيئة VitePress
npx vitepress init
```

### الإجابة على الأسئلة:

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  ويكي الشخصي
│
◇  Site description:
│  مستودع مركزي للمعرفة الشخصية
│
◇  Theme:
│  Default Theme + Customization
│
◇  Use TypeScript for config and theme files?
│  No
│
◇  Add VitePress npm scripts to package.json?
│  Yes
```

### هيكل المشروع

```
personal-wiki/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js       # الإعدادات
│   │   └── theme/          # التخصيص
│   ├── index.md            # الصفحة الرئيسية
│   ├── 01-مشاريع/
│   ├── 02-معرفة/
│   └── ...
├── package.json
└── node_modules/
```

### ملف الإعدادات (.vitepress/config.js)

```javascript
export default {
  // معلومات الموقع
  title: 'ويكي الشخصي',
  description: 'مستودع مركزي للمعرفة الشخصية',
  lang: 'ar',
  
  // الثيم
  themeConfig: {
    // الشعار
    logo: '/logo.svg',
    
    // القائمة العلوية
    nav: [
      { text: 'الرئيسية', link: '/' },
      { text: 'المشاريع', link: '/01-مشاريع/' },
      { text: 'المعرفة', link: '/02-معرفة/' },
      { text: 'الأفكار', link: '/03-أفكار/' }
    ],
    
    // القائمة الجانبية
    sidebar: {
      '/01-مشاريع/': [
        {
          text: 'المشاريع',
          items: [
            { text: 'نظرة عامة', link: '/01-مشاريع/' }
          ]
        }
      ],
      '/02-معرفة/': [
        {
          text: 'المعرفة',
          items: [
            { text: 'نظرة عامة', link: '/02-معرفة/' }
          ]
        }
      ]
    },
    
    // الروابط الاجتماعية
    socialLinks: [
      { icon: 'github', link: 'https://github.com/username/repo' }
    ],
    
    // البحث
    search: {
      provider: 'local',
      options: {
        locales: {
          ar: {
            translations: {
              button: {
                buttonText: 'بحث',
                buttonAriaLabel: 'بحث'
              },
              modal: {
                noResultsText: 'لا توجد نتائج',
                resetButtonTitle: 'إعادة تعيين',
                footer: {
                  selectText: 'اختيار',
                  navigateText: 'تنقل'
                }
              }
            }
          }
        }
      }
    },
    
    // التذييل
    footer: {
      message: 'مرخص تحت MIT',
      copyright: 'حقوق النشر © 2024'
    }
  },
  
  // دعم RTL
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ]
}
```

### CSS مخصص (docs/.vitepress/theme/custom.css)

```css
/* دعم RTL */
:root {
  direction: rtl;
  text-align: right;
}

/* تحسين الخطوط العربية */
body {
  font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
}

/* تحسين القوائم */
.VPNav {
  direction: rtl;
}

.VPSidebar {
  direction: rtl;
  text-align: right;
}

/* تحسين البحث */
.DocSearch-Button {
  direction: rtl;
}
```

### الأوامر

```bash
# تشغيل محلياً
npm run docs:dev

# بناء للإنتاج
npm run docs:build

# معاينة البناء
npm run docs:preview
```

### النشر على GitHub Pages

#### 1. إنشاء ملف .github/workflows/deploy-vitepress.yml

```yaml
name: Deploy VitePress

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run docs:build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 2. إعداد base في config.js

```javascript
export default {
  base: '/personal-wiki/', // اسم المستودع
  // ... باقي الإعدادات
}
```

### الصفحة الرئيسية (docs/index.md)

```markdown
---
layout: home

hero:
  name: ويكي الشخصي
  text: مستودع مركزي للمعرفة
  tagline: نظم مشاريعك، معرفتك، وأفكارك في مكان واحد
  actions:
    - theme: brand
      text: ابدأ الآن
      link: /01-مشاريع/
    - theme: alt
      text: عرض على GitHub
      link: https://github.com/username/repo

features:
  - icon: 🚀
    title: المشاريع
    details: وثق مشاريعك الشخصية والمهنية
  - icon: 📚
    title: المعرفة
    details: اكتب مقالات وملاحظات تعليمية
  - icon: 💡
    title: الأفكار
    details: سجل أفكارك ومفاهيمك الجديدة
  - icon: 🔗
    title: المراجع
    details: احفظ الموارد والروابط المفيدة
  - icon: 🔧
    title: الأدوات
    details: شارك الأكواد والأسكريبتات
  - icon: 📅
    title: اليوميات
    details: تتبع تقدمك اليومي
---
```

## المقارنة

| الميزة | MkDocs | VitePress |
|--------|--------|-----------|
| اللغة | Python | JavaScript |
| السرعة | سريع | أسرع جداً |
| الثيم | Material | قابل للتخصيص |
| المرونة | محدود | عالي جداً |
| التعلم | سهل | متوسط |
| FMHY | ❌ | ✅ |

## التوصية

### استخدم MkDocs إذا:
- ✅ تريد شيء بسيط وسريع
- ✅ لا تعرف JavaScript
- ✅ تريد Material theme

### استخدم VitePress إذا:
- ✅ تريد نفس تقنية FMHY
- ✅ تعرف JavaScript/Vue
- ✅ تريد أقصى سرعة ومرونة

## الخلاصة

**لديك الآن خيارين:**

1. **MkDocs** (تم إنشاؤه) - جاهز للاستخدام فوراً
2. **VitePress** (هذا الدليل) - مثل FMHY تماماً

كلاهما ممتاز! اختر ما يناسبك.

---

**للبدء مع VitePress:**
```bash
npm init -y
npm install -D vitepress
npx vitepress init
npm run docs:dev
```

**للبقاء مع MkDocs:**
```bash
mkdocs serve
```

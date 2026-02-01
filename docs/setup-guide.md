# 📖 دليل الإعداد الكامل

## نظرة عامة

هذا الدليل يشرح كيفية إعداد ويكي شخصي مثل [FMHY.net](https://fmhy.net/) باستخدام **MkDocs** و **Material for MkDocs**.

## ما هو MkDocs؟

**MkDocs** هو مولد مواقع ثابتة (Static Site Generator) مصمم خصيصاً للوثائق. يستخدم ملفات Markdown البسيطة لإنشاء مواقع احترافية.

### المميزات

- ✅ سهل الاستخدام
- ✅ سريع جداً
- ✅ ثيمات جميلة
- ✅ بحث مدمج
- ✅ متجاوب (Responsive)
- ✅ مجاني ومفتوح المصدر

## الإعداد الأولي

### 1. تثبيت Python

=== "Windows"
    قم بتحميل Python من [python.org](https://www.python.org/downloads/)
    
    تأكد من تحديد "Add Python to PATH" أثناء التثبيت.

=== "macOS"
    ```bash
    brew install python3
    ```

=== "Linux"
    ```bash
    sudo apt update
    sudo apt install python3 python3-pip
    ```

### 2. تثبيت MkDocs و Material

```bash
pip install mkdocs mkdocs-material
```

### 3. التحقق من التثبيت

```bash
mkdocs --version
```

يجب أن ترى شيئاً مثل:
```
mkdocs, version 1.5.3
```

## إنشاء مشروع جديد

### الطريقة الأولى: استخدام هذا القالب

```bash
git clone https://github.com/username/personal-wiki.git
cd personal-wiki
pip install -r requirements.txt
mkdocs serve
```

### الطريقة الثانية: البدء من الصفر

```bash
mkdocs new my-wiki
cd my-wiki
mkdocs serve
```

## هيكل المشروع

```
personal-wiki/
├── docs/                    # ملفات Markdown
│   ├── index.md            # الصفحة الرئيسية
│   ├── 01-مشاريع/
│   ├── 02-معرفة/
│   ├── stylesheets/        # CSS مخصص
│   └── javascripts/        # JS مخصص
├── mkdocs.yml              # ملف الإعدادات
├── requirements.txt        # المتطلبات
└── .github/
    └── workflows/
        └── deploy-mkdocs.yml  # GitHub Actions
```

## ملف الإعدادات (mkdocs.yml)

### الإعدادات الأساسية

```yaml
site_name: اسم الموقع
site_description: وصف الموقع
site_author: اسمك
site_url: https://username.github.io/repo/

theme:
  name: material
  language: ar
  direction: rtl
```

### تخصيص الألوان

```yaml
theme:
  palette:
    - scheme: default
      primary: indigo
      accent: indigo
```

### تفعيل الميزات

```yaml
theme:
  features:
    - navigation.instant
    - navigation.tabs
    - navigation.sections
    - search.suggest
    - search.highlight
    - content.code.copy
```

## النشر على GitHub Pages

### الطريقة التلقائية (موصى بها)

1. أنشئ ملف `.github/workflows/deploy-mkdocs.yml`:

```yaml
name: Deploy MkDocs

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: pip install -r requirements.txt
      - run: mkdocs gh-deploy --force
```

2. ادفع الكود:

```bash
git add .
git commit -m "✨ feat: إعداد الويكي"
git push origin main
```

3. فعّل GitHub Pages:
   - اذهب إلى Settings > Pages
   - اختر الفرع `gh-pages`
   - احفظ

### الطريقة اليدوية

```bash
mkdocs gh-deploy
```

## التخصيص المتقدم

### إضافة CSS مخصص

أنشئ `docs/stylesheets/extra.css`:

```css
:root {
  --md-primary-fg-color: #3f51b5;
}

.md-header {
  background-color: var(--md-primary-fg-color);
}
```

ثم أضف في `mkdocs.yml`:

```yaml
extra_css:
  - stylesheets/extra.css
```

### إضافة JavaScript مخصص

أنشئ `docs/javascripts/extra.js`:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  console.log('الويكي جاهز!');
});
```

ثم أضف في `mkdocs.yml`:

```yaml
extra_javascript:
  - javascripts/extra.js
```

### إضافة أيقونات مخصصة

```yaml
theme:
  icon:
    repo: fontawesome/brands/github
    edit: material/pencil
```

## الإضافات المفيدة

### البحث المتقدم

```yaml
plugins:
  - search:
      lang: ar
      separator: '[\s\-\.]+'
```

### تواريخ Git

```yaml
plugins:
  - git-revision-date-localized:
      enable_creation_date: true
```

### الوسوم

```yaml
plugins:
  - tags:
      tags_file: tags.md
```

## نصائح للأداء

### تحسين الصور

- استخدم WebP بدلاً من PNG/JPG
- ضغط الصور قبل الرفع
- استخدم أحجام مناسبة

### تقليل حجم الملفات

- تجنب الملفات الكبيرة
- استخدم روابط خارجية للملفات الكبيرة
- نظف الملفات غير المستخدمة

### التخزين المؤقت

MkDocs يستخدم التخزين المؤقت تلقائياً.

## استكشاف الأخطاء

### الخطأ: `mkdocs: command not found`

```bash
pip install --upgrade mkdocs
```

### الخطأ: الموقع لا يظهر

1. تحقق من إعدادات GitHub Pages
2. تأكد من وجود الفرع `gh-pages`
3. انتظر بضع دقائق

### الخطأ: الخطوط العربية لا تظهر

تأكد من:
```yaml
theme:
  language: ar
  direction: rtl
```

## الموارد

### الوثائق الرسمية

- [MkDocs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### أمثلة

- [FMHY](https://fmhy.net/)
- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [Kubernetes Docs](https://kubernetes.io/docs/)

### المجتمع

- [GitHub Discussions](https://github.com/squidfunk/mkdocs-material/discussions)
- [Discord](https://discord.gg/squidfunk)

## الخطوات التالية

- [ ] تخصيص الألوان والثيم
- [ ] إضافة محتوى
- [ ] تفعيل GitHub Actions
- [ ] إضافة نطاق مخصص (اختياري)
- [ ] إضافة Google Analytics (اختياري)

---

!!! success "تهانينا!"
    الآن لديك ويكي احترافي مثل FMHY! 🎉

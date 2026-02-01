# 🚀 دليل البدء السريع

## المتطلبات

قبل البدء، تأكد من تثبيت:

- [x] Python 3.8 أو أحدث
- [x] pip (مدير حزم Python)
- [x] Git

## التثبيت

### الخطوة 1: استنساخ المستودع

```bash
git clone https://github.com/username/personal-wiki.git
cd personal-wiki
```

### الخطوة 2: تثبيت المتطلبات

=== "Windows"
    ```cmd
    pip install -r requirements.txt
    ```

=== "macOS/Linux"
    ```bash
    pip3 install -r requirements.txt
    ```

### الخطوة 3: تشغيل محلياً

```bash
mkdocs serve
```

!!! success "نجح!"
    افتح المتصفح على: [http://127.0.0.1:8000](http://127.0.0.1:8000)

## التخصيص

### تحديث المعلومات الأساسية

افتح `mkdocs.yml` وقم بتحديث:

```yaml
site_name: اسم ويكيك
site_author: اسمك
site_url: https://username.github.io/repo-name/
repo_name: username/repo-name
repo_url: https://github.com/username/repo-name
```

### تخصيص الألوان

في `mkdocs.yml`، غير الألوان:

```yaml
theme:
  palette:
    - scheme: default
      primary: indigo  # غير هذا
      accent: indigo   # وهذا
```

الألوان المتاحة:
`red`, `pink`, `purple`, `deep purple`, `indigo`, `blue`, `light blue`, `cyan`, `teal`, `green`, `light green`, `lime`, `yellow`, `amber`, `orange`, `deep orange`

## إضافة محتوى

### إنشاء صفحة جديدة

=== "مشروع"
    ```bash
    copy templates\project-template.md docs\01-مشاريع\مشروعي.md
    ```

=== "مقال"
    ```bash
    copy templates\new-page.md docs\02-معرفة\مقالي.md
    ```

=== "فكرة"
    ```bash
    copy templates\new-page.md docs\03-أفكار\فكرتي.md
    ```

### تحديث التنقل

افتح `mkdocs.yml` وأضف الصفحة في قسم `nav`:

```yaml
nav:
  - المشاريع:
    - 01-مشاريع/index.md
    - مشروعي الجديد: 01-مشاريع/مشروعي.md  # أضف هنا
```

## النشر على GitHub Pages

### الطريقة الأولى: تلقائياً (موصى بها)

الويكي يحتوي على GitHub Action جاهز:

1. ادفع الكود إلى GitHub:
   ```bash
   git add .
   git commit -m "✨ feat: إعداد الويكي"
   git push origin main
   ```

2. انتظر بضع دقائق حتى يكتمل النشر

3. افتح الموقع على:
   ```
   https://username.github.io/repo-name/
   ```

### الطريقة الثانية: يدوياً

```bash
mkdocs gh-deploy
```

## الأوامر المفيدة

### بناء الموقع

```bash
mkdocs build
```

### تشغيل محلياً

```bash
mkdocs serve
```

### النشر

```bash
mkdocs gh-deploy
```

### فحص الإعدادات

```bash
mkdocs --version
```

## المشاكل الشائعة

### المشكلة: `mkdocs: command not found`

**الحل:**
```bash
pip install --upgrade mkdocs mkdocs-material
```

### المشكلة: الموقع لا يظهر على GitHub Pages

**الحل:**
1. تأكد من تفعيل GitHub Pages في إعدادات المستودع
2. اختر الفرع `gh-pages` كمصدر
3. انتظر بضع دقائق

### المشكلة: الخطوط العربية لا تظهر بشكل صحيح

**الحل:**
تأكد من أن `mkdocs.yml` يحتوي على:
```yaml
theme:
  language: ar
  direction: rtl
  font:
    text: Cairo
```

## الخطوات التالية

- [ ] تخصيص الألوان والثيم
- [ ] إضافة أول مشروع
- [ ] كتابة أول مقال
- [ ] تسجيل الأفكار
- [ ] دعوة الآخرين للمساهمة

## الموارد

- [وثائق MkDocs](https://www.mkdocs.org/)
- [وثائق Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [دليل Markdown](https://www.markdownguide.org/)

---

!!! question "هل تحتاج مساعدة؟"
    راجع [دليل المساهمة](CONTRIBUTING.md) أو افتح issue على GitHub

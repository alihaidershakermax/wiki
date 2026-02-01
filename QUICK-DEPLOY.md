# ⚡ نشر سريع - 5 دقائق

## الخطوات

### 1. إنشاء مستودع على GitHub
https://github.com/new
- الاسم: `wiki`
- Public
- Create repository

### 2. افتح Terminal واكتب:

```bash
git init
git add .
git commit -m "✨ feat: إنشاء ويكي علي الأكبر حيدر"
git remote add origin https://github.com/alihaidershakermax/wiki.git
git branch -M main
git push -u origin main
```

### 3. تفعيل GitHub Pages

1. اذهب إلى: https://github.com/alihaidershakermax/wiki/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages`
4. **Folder:** `/ (root)`
5. Save

### 4. تفعيل الأذونات

1. اذهب إلى: https://github.com/alihaidershakermax/wiki/settings/actions
2. **Workflow permissions:** Read and write permissions
3. Save

### 5. انتظر 2-3 دقائق

راقب: https://github.com/alihaidershakermax/wiki/actions

### 6. افتح الموقع! 🎉

**https://alihaidershakermax.github.io/wiki/**

---

## للتحديثات المستقبلية:

```bash
git add .
git commit -m "📝 docs: تحديث"
git push
```

سيتم النشر تلقائياً!

---

## المشاكل الشائعة

### Actions فشل؟
Settings > Actions > Read and write permissions

### صفحة 404؟
Settings > Pages > Branch: `gh-pages`

### انتظر 5 دقائق
ثم امسح الكاش (Ctrl + Shift + R)

---

**هذا كل شيء! 🚀**

# 🔧 الأدوات

## الأسكريبتات

=== "Python"
    ### أسكريبتات Python
    لا توجد أسكريبتات حالياً.

=== "JavaScript"
    ### أسكريبتات JavaScript
    لا توجد أسكريبتات حالياً.

=== "Shell"
    ### Shell Scripts
    لا توجد أسكريبتات حالياً.

=== "أخرى"
    ### لغات أخرى
    لا توجد أسكريبتات حالياً.

## الأدوات المساعدة

### إدارة الويكي

<div class="grid cards" markdown>

-   :material-file-plus:{ .lg .middle } __إنشاء صفحة جديدة__

    ---

    ```bash
    copy templates\new-page.md docs\القسم\الصفحة.md
    ```

-   :material-refresh:{ .lg .middle } __تحديث الفهرس__

    ---

    قم بتحديث `mkdocs.yml` و `docs/index.md`

-   :material-link-variant:{ .lg .middle } __فحص الروابط__

    ---

    استخدم أدوات فحص الروابط المعطلة

-   :material-backup-restore:{ .lg .middle } __نسخ احتياطي__

    ---

    ```bash
    git push origin main
    ```

</div>

## أمثلة على الأسكريبتات

### إنشاء صفحة جديدة تلقائياً

```python
# create_page.py
import os
from datetime import datetime

def create_page(title, category):
    """إنشاء صفحة جديدة من القالب"""
    
    template = f"""---
title: {title}
description: وصف مختصر
date_created: {datetime.now().strftime('%Y-%m-%d')}
date_updated: {datetime.now().strftime('%Y-%m-%d')}
tags: []
category: {category}
status: مسودة
---

# {title}

## المحتوى

اكتب المحتوى هنا...
"""
    
    filename = f"docs/{category}/{title.replace(' ', '-')}.md"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f"تم إنشاء الصفحة: {filename}")

# الاستخدام
create_page("عنوان الصفحة", "02-معرفة")
```

### فحص الروابط المعطلة

```python
# check_links.py
import os
import re
from pathlib import Path

def check_broken_links():
    """فحص الروابط المعطلة في ملفات Markdown"""
    
    docs_path = Path("docs")
    broken_links = []
    
    for md_file in docs_path.rglob("*.md"):
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # البحث عن الروابط
        links = re.findall(r'\[([^\]]+)\]\(([^\)]+)\)', content)
        
        for text, link in links:
            if link.startswith('../') or link.startswith('./'):
                # فحص الروابط المحلية
                target = (md_file.parent / link).resolve()
                if not target.exists():
                    broken_links.append((md_file, link))
    
    if broken_links:
        print("روابط معطلة:")
        for file, link in broken_links:
            print(f"  {file}: {link}")
    else:
        print("لا توجد روابط معطلة!")

check_broken_links()
```

## إضافة أداة جديدة

```bash
copy templates\new-page.md docs\05-أدوات\اسم-الأداة.md
```

## نصائح

!!! tip "نصائح للأدوات"
    - وثق كيفية استخدام الأداة
    - أضف أمثلة عملية
    - اذكر المتطلبات
    - اختبر الأدوات قبل النشر

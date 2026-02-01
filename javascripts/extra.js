// JavaScript مخصص للويكي

// إضافة وظائف إضافية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  
  // إضافة زر نسخ للأكواد
  addCopyButtons();
  
  // تحسين الجداول
  enhanceTables();
  
  // إضافة أيقونات للروابط الخارجية
  addExternalLinkIcons();
  
});

// دالة لإضافة أزرار النسخ للأكواد
function addCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(function(codeBlock) {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'نسخ';
    
    button.addEventListener('click', function() {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(function() {
        button.textContent = 'تم النسخ!';
        setTimeout(function() {
          button.textContent = 'نسخ';
        }, 2000);
      });
    });
    
    const pre = codeBlock.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(button);
  });
}

// دالة لتحسين الجداول
function enhanceTables() {
  const tables = document.querySelectorAll('table');
  
  tables.forEach(function(table) {
    // إضافة wrapper للجداول للتمرير الأفقي
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

// دالة لإضافة أيقونات للروابط الخارجية
function addExternalLinkIcons() {
  const links = document.querySelectorAll('a[href^="http"]');
  
  links.forEach(function(link) {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      const icon = document.createElement('span');
      icon.innerHTML = ' ↗';
      icon.style.fontSize = '0.8em';
      link.appendChild(icon);
    }
  });
}

// دالة لتتبع الإحصائيات (اختياري)
function trackStats() {
  // يمكنك إضافة كود لتتبع الإحصائيات هنا
  console.log('تتبع الإحصائيات مفعل');
}

export default {
  // معلومات الموقع
  title: 'ويكي علي الأكبر حيدر',
  description: 'مطور | طالب هندسة نفط - مستودع مركزي للمعرفة الشخصية، المشاريع، والأفكار',
  lang: 'ar',
  
  // Base URL (غيّر هذا لاسم مستودعك)
  base: '/wiki/',
  
  // الثيم
  themeConfig: {
    // الشعار
    // logo: '/logo.svg',
    
    // عنوان الموقع
    siteTitle: 'ويكي علي الأكبر حيدر',
    
    // القائمة العلوية
    nav: [
      { text: 'الرئيسية', link: '/' },
      { 
        text: 'الأقسام',
        items: [
          { text: '🚀 المشاريع', link: '/01-مشاريع/' },
          { text: '📚 المعرفة', link: '/02-معرفة/' },
          { text: '💡 الأفكار', link: '/03-أفكار/' },
          { text: '🔗 المراجع', link: '/04-مراجع/' },
          { text: '🔧 الأدوات', link: '/05-أدوات/' },
          { text: '📅 اليوميات', link: '/06-يوميات/' }
        ]
      },
      { text: 'الأرشيف', link: '/archive/' }
    ],
    
    // القائمة الجانبية
    sidebar: {
      '/01-مشاريع/': [
        {
          text: '🚀 المشاريع',
          items: [
            { text: 'نظرة عامة', link: '/01-مشاريع/' }
          ]
        }
      ],
      '/02-معرفة/': [
        {
          text: '📚 المعرفة',
          items: [
            { text: 'نظرة عامة', link: '/02-معرفة/' },
            { text: '📝 دليل الكتابة الشامل', link: '/02-معرفة/writing-guide' },
            { text: '🎯 هندسة البرومبتات', link: '/02-معرفة/prompt-engineering' },
            { text: '🧠 المخططات الذهنية', link: '/02-معرفة/mind-maps-guide' }
          ]
        }
      ],
      '/03-أفكار/': [
        {
          text: '💡 الأفكار',
          items: [
            { text: 'نظرة عامة', link: '/03-أفكار/' }
          ]
        }
      ],
      '/04-مراجع/': [
        {
          text: '🔗 المراجع',
          items: [
            { text: 'نظرة عامة', link: '/04-مراجع/' }
          ]
        }
      ],
      '/05-أدوات/': [
        {
          text: '🔧 الأدوات',
          items: [
            { text: 'نظرة عامة', link: '/05-أدوات/' }
          ]
        }
      ],
      '/06-يوميات/': [
        {
          text: '📅 اليوميات',
          items: [
            { text: 'نظرة عامة', link: '/06-يوميات/' }
          ]
        }
      ]
    },
    
    // الروابط الاجتماعية
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alihaidershakermax' }
    ],
    
    // البحث المحلي
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'بحث',
                buttonAriaLabel: 'بحث في الويكي'
              },
              modal: {
                noResultsText: 'لا توجد نتائج للبحث',
                resetButtonTitle: 'إعادة تعيين البحث',
                footer: {
                  selectText: 'للاختيار',
                  navigateText: 'للتنقل',
                  closeText: 'للإغلاق'
                }
              }
            }
          }
        }
      }
    },
    
    // التذييل
    footer: {
      message: 'مرخص تحت رخصة MIT',
      copyright: 'حقوق النشر © 2026 - علي الأكبر حيدر'
    },
    
    // روابط التحرير
    editLink: {
      pattern: 'https://github.com/alihaidershakermax/wiki/edit/main/docs/:path',
      text: 'تحرير هذه الصفحة على GitHub'
    },
    
    // آخر تحديث
    lastUpdated: {
      text: 'آخر تحديث',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },
    
    // التنقل بين الصفحات
    docFooter: {
      prev: 'السابق',
      next: 'التالي'
    },
    
    // جدول المحتويات
    outline: {
      label: 'في هذه الصفحة',
      level: [2, 3]
    },
    
    // زر العودة للأعلى
    returnToTopLabel: 'العودة للأعلى',
    
    // تسميات الشريط الجانبي
    sidebarMenuLabel: 'القائمة',
    darkModeSwitchLabel: 'المظهر',
    lightModeSwitchTitle: 'التبديل إلى الوضع الفاتح',
    darkModeSwitchTitle: 'التبديل إلى الوضع الداكن'
  },
  
  // إعدادات Markdown
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  
  // Head tags
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ar' }],
    ['meta', { property: 'og:title', content: 'ويكي علي الأكبر حيدر - مطور | طالب هندسة نفط' }],
    ['meta', { property: 'og:site_name', content: 'ويكي علي الأكبر حيدر' }],
    ['meta', { property: 'og:description', content: 'مستودع مركزي للمعرفة الشخصية والمشاريع' }]
  ]
}

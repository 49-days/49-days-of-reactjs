import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "React 49 Days",
  description: "Learn all about React in 49 days",
  lang: 'vi-VN',
  markdown: {
    math: true
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {text: 'Trang chủ', link: '/'},
      {text: 'Bài học', link: '/lessons/getting-started'},
      {text: 'Liên hệ', link: 'mailto:nguyentruonganhkiet.work@gmail.com'},
      {text: 'Ủng hộ', link: 'https://www.buymeacoffee.com/49days'}
    ],

    sidebar: [
      {
        text: 'Những ngày đầu tiên',
        items: [
          {text: 'Ngày 01: Chuẩn bị và bắt đầu', link: '/lessons/getting-started'},
          {text: 'Ngày 02: Cài đặt', link: '/lessons/installation'},
        ]
      },
      {
        text: 'Tổng hợp kiến thức',
        items: [
        ]
      },
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/49-days/49-days-of-reactjs'},
      {icon: 'mastodon', link: 'https://mastodon.social/@49days'},
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
    editLink: {
      pattern: 'https://github.com/49-days/49-days-of-reactjs/tree/main/react/:path',
      text: 'Edit this page on GitHub',
    },

  },
  locales: {
    root: {
      label: 'Vietnamese',
      lang: 'vi',
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        logo: '/logo.png',
        nav: [
          {text: 'Home', link: '/'},
          {text: 'Lessons', link: '/lessons/getting-started'},
          {text: 'Contact', link: 'mailto:nguyentruonganhkiet.work@gmail.com'},
          {text: 'Sponsor', link: 'https://www.buymeacoffee.com/49days'}
        ],

        sidebar: [
          {
            text: 'The first day',
            items: [
              {text: 'Day 01: Getting Started', link: '/lessons/getting-started'},
              {text: 'Day 02: Installation', link: '/lessons/installation'},
            ]
          },
          {
            text: 'Review',
            items: [
            ]
          },
        ],
      }
    }
  }
})

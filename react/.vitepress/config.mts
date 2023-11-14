import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "React 49 Days",
  description: "Learn all about React in 49 days",
	head: [
		['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
		['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
		['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
		['link', {rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
		['link', {rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#92d9f4"}],
		['link', {rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
		['meta', {name: "msapplication-TileColor", content: "#92d9f4"}],
		['meta', {name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
		['meta', {name: "theme-color", content: "#ffffff"}],
	],
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
          {text: 'Ngày 04: Giới thiệu RFlix', link: '/lessons/introduce-movies-app'},
        ]
      },
      {
        text: 'Tổng hợp kiến thức',
        items: [
          {text: 'Tài nguyên', link: '/summarize/resources'},
          {text: 'Các công cụ và ứng dụng', link: '/summarize/tools'},
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
              {text: 'Day 01: Getting Started', link: '/en/lessons/getting-started'},
              {text: 'Day 02: Installation', link: '/en/lessons/installation'},
              {text: 'Day 04: Introduce RFlix', link: '/en/lessons/introduce-movies-app'},
            ]
          },
          {
            text: 'Review',
            items: [
              {text: 'Resources', link: '/summarize/resources'},
              {text: 'Tools and Applications', link: '/summarize/tools'},
            ]
          },
        ],
      }
    }
  }
})

# Ngày 01: Chuẩn bị và bắt đầu

::: info TDLR;
Ở bài này chúng ta nói qua về cách tiếp cận, những thứ cần chuẩn bị để bắt đầu các bài học React trong chuỗi 48 ngày
tiếp theo.
:::

## Giới thiệu về React

[React](https://react.dev) là một framework được phát triển vào cho ra mắt vào năm 2013 bởi
[Meta](https://about.meta.com) và cộng đồng lập trình viên yêu thích
[OpenSource](https://en.wikipedia.org/wiki/Open_source), kể từ năm 2015 tới nay
**React** được quan tâm và sử dụng rộng rãi hơn bởi cộng đồng lập trình viên.
Nhu cầu tuyển dụng cho vị trí **React Developer** cũng tăng lên đáng kể.
Với tinh thần chia sẻ và mong muốn giúp đỡ các bạn mới bắt đầu học **React** một cách dễ dàng hơn,
chúng tôi đã tạo ra chuỗi bài học này.

## Giới thiệu về chuỗi bài học

Chuỗi bài 49 Ngày cùng React sẽ cùng với các bạn trong 49 bài học để cùng các bạn hoàn thành một ứng dụng React có đầy
đủ chức năng, đủ các thư viện hỗ trợ, đủ các thư viện quản lý trạng thái, đủ các thư viện làm việc với API, ...

### Một số thư viện mà chúng ta sẽ cùng học trong chuỗi bài này:

* [React](https://react.dev/): Chúng ta sẽ đi sâu từng bước một vào React, các bạn sẽ hiểu được cách hoạt động của
  React, cách tối ưu hóa React, cách tối ưu hóa các Components, ...

  * [React Hooks](https://reactjs.org/docs/hooks-intro.html): Chúng ta sẽ đi sâu vào các Hooks của React, các bạn sẽ
      hiểu được cách sử dụng các Hooks, cách tạo ra các Hooks, ...

  * [React Context](https://reactjs.org/docs/context.html): Chúng ta sẽ đi sâu vào Context của React, các bạn sẽ
      hiểu được cách sử dụng Context, cách tạo ra Context, ...

  * [React Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html): Chúng ta sẽ đi sâu vào vòng đời của
      React, các bạn sẽ hiểu được cách sử dụng vòng đời của React.

    * [React Router](https://reactrouter.com/): Chúng ta sẽ đi sâu vào React Router, các bạn sẽ hiểu được cách sử dụng
      React Router.
* [Redux ToolKit](https://redux.js.org/): Thư viện dùng để quản lý trạng thái phổ biến trong React.

* [React Query](https://react-query.tanstack.com/): Thư viện dùng để làm việc với API.

    * [Axios](https://axios-http.com/): Thư viện dùng để làm việc với API.

* [React Hook Form](https://react-hook-form.com/): Thư viện dùng để quản lý Form trong React.

* [TailwindCSS](https://tailwindcss.com/): Thư viện CSS đơn giản và phổ biến hiện này.

## Chuẩn bị

### Dụng cụ học tập

* Chúng mình khuyên các bạn nên sài phiên bản [Node.js](https://nodejs.org/en/) >= 14.0.0 LTS (Long Term Support), để có
  những tính năng mới
  nhất và được hỗ trợ lâu dài

* Công cụ quan trọng để quản lý mã nguồn cần thiết và tiêu biểu là [Git](https://git-scm.com/)

* Công cụ để viết mã nguồn, chúng mình khuyên các bạn nên sử dụng [Visual Studio Code](https://code.visualstudio.com/)
  vì nó là công cụ mã nguồn mở, được cộng đồng lập trình viên yêu thích và sử dụng rộng rãi nhất hiện nay.
    * Hoặc có thể là Sublime Text, Atom, Vim, Emacs, ...

* Công cụ để quản lý các gói phụ thuộc của dự án các bạn có thể sử dụng [NPM](https://www.npmjs.com/) hoặc
  [Yarn](https://yarnpkg.com/), tùy vào sở thích của bạn.

* Nếu các bạn có thêm kỹ năng lập trình, biết một ít về ngôn
  ngữ [Javascript](https://www.javascript.com/), [Typescript](https://www.typescriptlang.org/), [HTML](https://en.wikipedia.org/wiki/HTML), [CSS](https://en.wikipedia.org/wiki/CSS)
  thì sẽ tốt hơn rất nhiều.

### Thông tin cần biết và tinh thần học tập

* Chuỗi bài 49 ngày cùng **React** là một chuỗi bài học về **React** và các thư viện liên quan, nên các bạn cần phải có
  tinh thần học tập, nghiêm túc và kiên trì.

* Các bài học sẽ nói rất kỹ và kèm theo ví dụ cụ thể, nên các bạn nên đọc kỹ và làm theo từng bước một.

* Các bài học sẽ được cập nhật thường xuyên có thể là 1-2 bài 1 ngày, nên các bạn nên theo dõi và cập nhật thường xuyên
  nhé.

### Các bạn đạt được những gì?

* Các bạn sẽ có thể làm được một ứng dụng **React** đơn giản, có thể là một ứng dụng quản lý công việc, ứng dụng quản lý
  tài chính cá nhân, ứng dụng quản lý nhà hàng, ứng dụng quản lý bán hàng, ...

* Các bạn hiểu thêm về vòng đời của một ứng dụng **React**, cách tối một Components, các thư viện hỗ trợ, các thư viện
  quản lý trạng thái, các thư viện làm việc với API, ...

* Nâng cao khả năng lập trình của bản thân, giúp các bạn tiếp cận nhanh hơn không chỉ với React và còn nhiều ngôn ngữ,
  framework khác nữa.

## Tóm tắt bài viết
- Tìm hiểu React là gì.
- Hiểu rõ chuỗi bài học này sẽ học những gì.
- Biết được những thứ cần chuẩn bị để bắt đầu học.
- Chuẩn bị tinh thần học tập.
- Kết quả đạt được những gì sau khi học xong chuỗi bài này.

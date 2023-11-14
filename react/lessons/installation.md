# Ngày 02: Cài đặt

::: info TL;DR
Ở bài này chúng ta nói về cách cài đặt các công cụ và phần mềm cần thiết để học React.
:::

## Node.js và Node Package Manager

::: tip Node là gì?
[Node](https://nodejs.org/en/) là một nền tảng để chạy [Javascript]() trên máy tính, nó được sử dụng rộng rãi trong việc
phát triển ứng dụng web, ứng dụng di động, ứng dụng desktop, ... Node cũng là một nền tảng để chạy các công cụ hỗ trợ
phát triển ứng dụng như [NPM](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/), [Vite](https://vitejs.dev/),
[Create React App](https://create-react-app.dev/), ...
:::

::: tip NPM là gì?

NPM viết tắt của từ Node Package Manager là một công cụ tạo và quản lý các thư viện javascript cho Nodejs. Những ai làm
việc với javascript chắc hẳn ít nhiều cũng đã từng nghe về nó.
NPM cung cấp 2 chức năng chính bao gồm:

- Là kho lưu trữ trực tuyến cho các package/module.
- Quản lý các module javascript và phiên bản của chúng trong các dự án của chúng ta đơn giản hơn, dễ dàng hơn, tiết kiệm
  thời gian hơn.

:::

### Cài đặt Node.js và Node Package Manager

::: details Cài đặt trên Windows

- Truy cập vào trang download của Node tại [đây](https://nodejs.org/en/download/)
- Chọn LTS (Long Term Support) và tải về bản cài đặt dành cho Window
- Chạy bản cài đặt và thế là xong
- Kiểm tra xem Node.js đã được cài đặt thành công chưa bằng cách mở Command Prompt hoặc PowerShell và gõ lệnh sau:
    ```bash
    node -v
    ```
- Kiểm tra xem NPM đã được cài đặt thành công chưa bằng cách mở Command Prompt hoặc PowerShell và gõ lệnh sau:
    ```bash
    npm -v
    ```

:::

::: details Cài đặt trên MacOS

- Truy cập vào trang download của Node tại [đây](https://nodejs.org/en/download/)
- Chọn LTS (Long Term Support) và tải về bản cài đặt dành cho MacOS
- Chạy bản cài đặt và thế là xong
- Kiểm tra xem Node.js đã được cài đặt thành công chưa bằng cách mở Command Prompt hoặc PowerShell và gõ lệnh sau:
    ```bash
    node -v
    ```
- Kiểm tra xem NPM đã được cài đặt thành công chưa bằng cách mở Command Prompt hoặc PowerShell và gõ lệnh sau:
    ```bash
    npm -v
    ```

:::

::: details Cài đặt trên Linux

- Cập nhật các gói phụ thuộc bằng lệnh sau:
    ```bash
    sudo apt update
    ```
- Cài đặt Node.js và NPM bằng lệnh sau:
    ```bash
    sudo apt install nodejs npm
    ```
- Kiểm tra xem Node.js đã được cài đặt thành công chưa bằng cách mở Terminal và gõ lệnh sau:
    ```bash
    node -v
    ```
- Kiểm tra xem NPM đã được cài đặt thành công chưa bằng cách mở Terminal và gõ lệnh sau:
    ```bash
    npm -v
    ```

:::

## Git và GitHub

::: tip Git là gì?
[Git](https://git-scm.com/) là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System – DVCS), nó
là một trong những hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay. Git cung cấp cho mỗi lập trình viên kho
lưu trữ (repository) riêng chứa toàn bộ lịch sử thay đổi. Mỗi lần thay đổi, Git sẽ lưu lại toàn bộ trạng thái của
các tập tin trong kho lưu trữ. Khi cần, lập trình viên có thể truy cập vào bất kỳ trạng thái nào trong quá khứ.
:::

::: tip Github là gì?
[Github](https://github.com/) là một dịch vụ cung cấp kho lưu trữ mã nguồn Git công cộng, nó cung cấp cho các lập trình
viên một nơi để lưu trữ mã nguồn của họ, cũng như cung cấp cho các lập trình viên một nơi để học hỏi, trao đổi, hợp tác
với nhau.
:::

Cả Git và Github đều là những công cụ hỗ trợ phát triển phần mềm, là một lập trình viên việc biết và sử dụng Git và
Github là rất cần thiết.

### Cài đặt Git

::: details Cài đặt trên Windows

- Git SCM đã có hướng dẫn cài đặt tại [đây](https://git-scm.com/download/win) các bạn chỉ cần làm theo là có thể cài đặt
  được Git trên Windows.
  :::

::: details Cài đặt trên MacOS

- Git SCM đã có hướng dẫn cài đặt tại [đây](https://git-scm.com/download/mac) các bạn chỉ cần làm theo là có thể cài đặt
  được Git trên MacOS.

:::

::: details Cài đặt trên Linux

- Git SCM đã có hướng dẫn cài đặt tại [đây](https://git-scm.com/download/linux) các bạn chỉ cần làm theo là có thể cài
  đặt
  được Git trên Linux.

:::

### Tạo tài khoản Github

Github cực kỳ quan trọng trong các chuỗi bài học của 49 Days vì thế trước khi sử dụng Github, chúng ta cần phải có một
tài khoản Github. Các bạn có thể tạo tài khoản Github tại
[đây](https://github.com/signup) nếu chưa có. Việc tạo tài khoản Github là rất đơn giản, các bạn chỉ cần điền đầy đủ các
thông tin theo yêu cầu là có thể tạo được tài khoản Github.

## Visual Studio Code

::: tip Visual Studio Code là gì?

[Visual Studio Code](https://code.visualstudio.com/) là một trình biên tập mã nguồn mở, được phát triển bởi Microsoft
cho Windows, Linux và macOS. Nó bao gồm hỗ trợ lập trình cho JavaScript, TypeScript và Node.js và có một số tính năng
tích hợp để phát triển ứng dụng web, bao gồm lập trình trên máy chủ, cũng như phát triển trên nền tảng Azure của
Microsoft.

:::

### Cài đặt Visual Studio Code

- Truy cập vào trang download của Visual Studio Code tại [đây](https://code.visualstudio.com/download)
- Chọn phiên bản phù hợp với hệ điều hành của bạn và tải về
- Chạy bản cài đặt và thế là xong

#### Một số extension cần thiết cho trong chuỗi bài học

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Là một công cụ giúp chúng ta
  format code, giúp chúng ta viết code tốt hơn.
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer): Là
  một công cụ giúp chúng ta phân biệt các cặp dấu ngoặc một cách dễ dàng hơn.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Là một
  công
  cụ giúp chúng ta viết code với TailwindCSS một cách dễ dàng hơn.
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets):
  Là một công cụ giúp
  chúng ta viết code React một cách dễ dàng hơn.
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): Là một công cụ giúp chúng
  ta biết được kích thước của các thư viện mà chúng ta import vào.

## Tóm tắt bài viết

- Tìm hiểu và cài đặt Node.js và Node Package Manager.
- Tìm hiểu và cài đặt Git và Github.
- Tìm hiểu và cài đặt Visual Studio Code.
- Cài đặt các extension cần thiết cho trong chuỗi bài học.

# Ngày 04: Giới thiệu RFlix

::: info TL;DR
Ở bài này chúng ta nói về dự án chúng ta sẽ làm trong chuỗi bài học này. Dự án là một ứng dụng xem phim đơn giản. nhưng
đầy đủ các chức năng cơ bản của một ứng dụng xem phim.
:::

## Giới thiệu

Chúng ta cùng đặt tên cho ứng dụng này là **RFlix**, một ứng dụng xem phim đơn giản, nhưng đầy đủ các chức năng cơ bản
của một ứng dụng xem phim như:

- Đăng nhập và đăng ký
- Tải một phim lên ứng dụng
- Xem danh sách các phim
- Xem chi tiết một phim
- Tìm kiếm phim
- Gợi ý phim

Tuy đơn giản nhưng ứng dụng này sẽ giúp chúng ta hiểu được các khái niệm cơ bản của React, các khái niệm cơ bản của một
ứng dụng web, cách triển khai và phát triển của một ứng dụng web như thế nào.

Các bạn có thể lấy thiết kế của ứng dụng này trong [Tài nguyên](/summarize/resources.html#giao-dien-nguoi-dung), giao
diện được
lấy từ [Figma Community](https://www.figma.com/community) và được chỉnh sửa lại một chút để phù hợp với ứng dụng của
chúng ta.

## Các công nghệ sẽ và công cụ sử dụng

Các công nghệ sử dụng chính trong ứng dụng này bao gồm:

#### 1. [Figma](https://www.figma.com/)

Là một ứng dụng thiết kế giao diện người dùng, chúng ta sẽ sử dụng nó để thiết kế giao diện người dùng cho ứng dụng.

#### 2. [React](https://reactjs.org/)

Là một thư viện Javascript để xây dựng giao diện người dùng, chúng ta sẽ sử dụng nó để xây dựng giao diện người dùng cho
ứng dụng.

#### 3. [React Redux](https://react-redux.js.org/)

Là một thư viện Javascript để quản lý trạng thái, chúng ta sẽ sử dụng nó để quản lý trạng thái cho ứng dụng.

#### 4. [TailwindCSS](https://tailwindcss.com/)

Là một thư viện CSS để thiết kế giao diện người dùng, chúng ta sẽ sử dụng nó để thiết kế giao diện người dùng cho ứng
dụng.

#### 5. [Appwrite](https://appwrite.io/)

Là một ứng dụng hỗ trợ giao tiếp với cơ sở dữ liệu, chúng ta sẽ sử dụng nó để giao tiếp với cơ sở dữ liệu của ứng dụng.

#### 6. [ReactQuery](https://react-query.tanstack.com/)

Là một thư viện hỗ trợ giao tiếp với API, chúng ta sẽ sử dụng nó để giao tiếp với API của ứng dụng.

#### 7. [Vercel](https://vercel.com/)

Là một dịch vụ để triển khai ứng dụng, chúng ta sẽ sử dụng nó để triển khai ứng dụng của chúng ta.

## Một số hình ảnh của ứng dụng

Đầu tiên là trang đăng ký và đăng nhập của ứng dụng này

![login.png](/day-04/images/login.png "Trang đăng nhập của ứng dụng")

Thứ hai là trang chủ của ứng dụng, ở đây hiển thị các phim mới nhất, các phim được gợi ý, các phim được xem nhiều nhất

![home.png](/day-04/images/home.png "Trang chủ của ứng dụng")

Tiếp đến là trang chi tiết của ứng dụng, ở đây hiển thị thông tin chi tiết của một phim, các phim liên quan, các phim
được gợi ý

![details-page.png](/day-04/images/details-page.png "Trang chi tiết của ứng dụng")

Tiếp nữa là trang tìm kiếm của ứng dụng, ở đây hiển thị danh sách các phim tìm được dựa trên từ khóa tìm kiếm

![search.png](/day-04/images/search.png)

Ở đây là trang gợi ý của ứng dụng, ở đây hiển thị các phim được gợi ý dựa trên các phim đã xem

![suggestion.png](/day-04/images/suggestion.png "Trang gợi ý của ứng dụng")

Cuối cùng là trang 404 của ứng dụng, ở đây hiển thị thông báo lỗi khi người dùng truy cập vào một trang không tồn tại

![404.png](/day-04/images/404.png "Trang 404 của ứng dụng")

## Tóm tắt bài viết

- Tìm hiểu về ứng dụng chúng ta sẽ làm trong chuỗi bài học này.
- Tìm hiểu về các công nghệ và công cụ chúng ta sẽ sử dụng trong chuỗi bài học này.
- Tìm hiểu về các chức năng của ứng dụng.
- Xem một vài hình ảnh của ứng dụng

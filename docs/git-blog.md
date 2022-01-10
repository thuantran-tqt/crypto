---
id: git-blog
title: Setup Git - Create Github repository - Deploy with Vercel 
sidebar_label: Setup Git - Create Github repository - Deploy with Vercel 
---

Tài liệu xoay quanh 3 chủ đề:

1. Git - các câu lệnh cơ bản thường dùng

2. Tạo một repository trên Github và push code từ local repository lên remote repository

3. Deploy với Vercel để có một website chạy nhanh và xịn với nhiều framework hỗ trợ ReactJS! 

<!--truncate-->

## 1. Git là gì?

> Git chính là một hệ thống VCS (Version Control System) cho dự án của bạn. Chính vì là một VCS ở trên nên Git ghi nhớ lại toàn bộ lịch sử thay đổi của source code trong dự án. Ai sửa file nào, thêm dòng code nào, xóa dòng code nào, bỏ thừa dấu ở đâu, ... Tất tần tật đều được Git ghi lại.

Tham khảo thêm các tài liệu sau để hiểu chi tiết về Git:

1. [Git là gì? Các lệnh git cơ bản mà mọi lập trình viên nên biết - TopDev](https://topdev.vn/blog/git-la-gi/)

2. [Git và GitHub — liệu bạn đã thật sự biết cách sử dụng? - GotIt](https://medium.com/got-it-vietnam/git-v%C3%A0-github-li%E1%BB%87u-b%E1%BA%A1n-%C4%91%C3%A3-th%E1%BA%ADt-s%E1%BB%B1-bi%E1%BA%BFt-c%C3%A1ch-s%E1%BB%AD-d%E1%BB%A5ng-ff5cc723edfd)

3. [Series học Git của Thachpham.com](https://thachpham.com/tools/git-gioi-thieu-serie-git-co-ban.html)

4. [Getting Started - About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

5. [Git cheat sheet - Github](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

6. [Git cheat sheet - Gitlab](https://about.gitlab.com/images/press/git-cheat-sheet.pdf?fbclid=IwAR0_PPQbAxlEfVzQDhuxVGtnIRqIFkzZou10GrolserG1wKlda_U6iWEd_c)

## 2. Các lệnh Git thường dùng mỗi ngày dành cho Developer

- Thiết lập `user.name` và `user.email`
```
$ git config --global user.name “Your Name”

$ git config --global user.email “you@example.com”
```

- Khởi tạo local repository
```
git init
```
- Thêm file (tất cả các file)
```
git add . 
```

- Thêm file (chỉ định tên file cụ thể)
```
git add [file]
```

- Commit 
```
git commit -m "..."
```

- Push (đẩy code lên remote repository)
```
git push
```

### Một số lệnh Git khác:

- Xem trạng thái
```
git status
```

- Xem lịch sử chỉnh sửa
```
git log --graph
```

## 3. Tạo repository trên Github và push code từ local repository lên remote repository

- Click vào dấu "+" góc bên phải cửa sổ trình duyệt (cạnh account avatar)

![Click "+" at top-right viewport (next to account avatar)](https://raw.githubusercontent.com/edwardtran97/frontend-blog/master/static/img/create-repo-1.png)

- Click chọn "New repository"

![Click chọn New repository](https://raw.githubusercontent.com/edwardtran97/frontend-blog/master/static/img/new-repo.png)

- Đặt tên cho repository (lưu ý là tên không được trùng với tên của repo đã tạo trước đó)

![Đặt tên cho repository](https://raw.githubusercontent.com/edwardtran97/frontend-blog/master/static/img/project-name.png)

- Click chọn Create repository

![Click chọn Create repository](https://raw.githubusercontent.com/edwardtran97/frontend-blog/master/static/img/click-create-repo.png)

- Copy & paste những lệnh sau vào Terminal trong Visual Studio Code

![Copy & paste những lệnh sau vào Terminal trong Visual Studio Code](https://raw.githubusercontent.com/edwardtran97/frontend-blog/master/static/img/copy-paste-in-terminal-vscode.png)

- Reload lại trình duyệt và tada ... source code đã được push lên Github

![Push source code lên Github](https://raw.githubusercontent.com/edwardtran97/frontend-blog/master/static/img/push-repo.png)

## 4. Deploy với Vercel

Đọc document [tại đây](https://vercel.com/docs/introduction)







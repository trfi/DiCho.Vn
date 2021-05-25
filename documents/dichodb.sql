INSERT INTO "dicho"."User" ("id", "phone", "password", "phoneVerified", "email", "emailVerified", "name", "username", "avatar", "gender", "birthday", "address", "role", "followingCount", "followerCount", "likeCount", "commentCount", "created", "updated") VALUES
('60a1296af601509a40766998', '0326030448', '7533eed9fe8879fcda.379e6b772870d25383d6bb341055bfdc', 'f', 'truongbuidp@gmail.com', 'f', 'Đăng Trường', 'tamdeptrai', 'https://i.pravatar.cc/200?u=sxada78', 'M', NULL, '80/66 Trường Chinh', 'ADMIN', 2, 0, 0, 0, '2021-05-16 14:17:15.736', '2021-05-24 07:38:03.494');
INSERT INTO "dicho"."User" ("id", "phone", "password", "phoneVerified", "email", "emailVerified", "name", "username", "avatar", "gender", "birthday", "address", "role", "followingCount", "followerCount", "likeCount", "commentCount", "created", "updated") VALUES
('60a129853b44265330880ebe', '0326030441', '7533eed9fe8879fcda.379e6b772870d25383d6bb341055bfdc', 'f', 'truongbuidp1@gmail.com', 'f', 'Quang Tâm', 'tammoilatao', 'https://i.pravatar.cc/200?u=sdas78asd', 'M', NULL, '80/66 Gò Vấp', 'ADMIN', 0, 2, 0, 0, '2021-05-16 14:17:41.842', '2021-05-24 07:38:03.494');
INSERT INTO "dicho"."User" ("id", "phone", "password", "phoneVerified", "email", "emailVerified", "name", "username", "avatar", "gender", "birthday", "address", "role", "followingCount", "followerCount", "likeCount", "commentCount", "created", "updated") VALUES
('60a4d97274248e5b5b0eef81', '0326030442', '7533eed9fe8879fcda.379e6b772870d25383d6bb341055bfdc', 'f', 'truongbuidp2@gmail.com', 'f', 'Minh Trí', 'minhtri', 'https://i.pravatar.cc/200?u=43kjfds', 'M', NULL, '80/66 Gò Vấp', 'ADMIN', 0, 1, 0, 0, '2021-05-16 14:17:41.842', '2021-05-18 11:13:38.825');
INSERT INTO "dicho"."User" ("id", "phone", "password", "phoneVerified", "email", "emailVerified", "name", "username", "avatar", "gender", "birthday", "address", "role", "followingCount", "followerCount", "likeCount", "commentCount", "created", "updated") VALUES
('60a3a0ddfcf2755644706180', '078888888', 'f26ff4d9318a84eed4aa63d4a7.b53102bd1af5ac1bbcc35bbd78ddbe82', 'f', 'tam6h00', 'f', 'Sơn', 'sonson', 'https://i.pravatar.cc/200?u=132321', NULL, NULL, '222 Phan Văn Trị', 'MODERATOR', 0, 0, 0, 0, '2021-05-18 11:11:25.544', '2021-05-23 14:29:39.001'),
('60a7b447e522e7f144960a30', '0788849647', 'c51d0e4b67a0d4b03e9913d418a5.e989575b3c2ad1023d9a81fecdb7380c', 'f', 'tam8h23', 'f', 'tam', 'vteam1', 'https://i.pravatar.cc/200?u=sad4534', NULL, NULL, '', 'ADMIN', 0, 0, 0, 0, '2021-05-21 13:23:19.942', '2021-05-24 01:23:45.789'),
('60ab0929109f7d6963c367af', '0326030401', 'bfa07c776ef21e7416.5a2cc3483e86634ffc86102885a0ffaa', 'f', NULL, 'f', 'Văn Tèo', 'vanteo', 'https://i.pravatar.cc/200?u=sdas45', NULL, NULL, NULL, 'USER', 0, 0, 0, 0, '2021-05-24 02:02:17.758', '2021-05-24 02:02:17.76'),
('60ab2d849ca6c0425202a746', '0947509171', '5e5f7e9ad7aa.946f0329acc0d39fec291fed2d3c1c09', 'f', NULL, 'f', 'Nguyễn Phan Minh Trí', 'minhtrii', 'https://i.pravatar.cc/200?u=saddsad', NULL, NULL, NULL, 'USER', 0, 0, 0, 0, '2021-05-24 04:37:24.136', '2021-05-24 04:37:24.193');

INSERT INTO "dicho"."Category" ("id", "title", "slug", "path", "parent", "children", "types", "created", "updated") VALUES
('0303', 'Quần áo', 'mua-ban-quan-ao', NULL, '03', NULL, '{B,S}', '2021-05-16 14:25:42.238', '2021-05-16 14:25:42.239');
INSERT INTO "dicho"."Category" ("id", "title", "slug", "path", "parent", "children", "types", "created", "updated") VALUES
('0305', 'Đồng hồ', 'mua-ban-dong-ho', NULL, '03', NULL, '{B,S}', '2021-05-16 14:25:43.243', '2021-05-16 14:25:43.244');
INSERT INTO "dicho"."Category" ("id", "title", "slug", "path", "parent", "children", "types", "created", "updated") VALUES
('0306', 'Giày dép', 'mua-ban-giay-dep', NULL, '03', NULL, '{B,S}', '2021-05-16 14:25:44.374', '2021-05-16 14:25:44.375');
INSERT INTO "dicho"."Category" ("id", "title", "slug", "path", "parent", "children", "types", "created", "updated") VALUES
('0307', 'Túi xách', 'mua-ban-tui-xach', NULL, '03', NULL, '{B,S}', '2021-05-16 14:25:45.258', '2021-05-16 14:25:45.259'),
('0308', 'Nước hoa', 'mua-ban-nuoc-hoa', NULL, '03', NULL, '{B,S}', '2021-05-16 14:25:46.262', '2021-05-16 14:25:46.263'),
('0309', 'Phụ kiện thời trang khác', 'mua-ban-phu-kien-thoi-trang-khac', NULL, '03', NULL, '{B,S}', '2021-05-16 14:25:47.412', '2021-05-16 14:25:47.413'),
('03', 'Thời trang, Đồ dùng cá nhân', 'mua-ban-thoi-trang-do-dung-ca-nhan', NULL, NULL, '["0303", "0305", "0306", "0307", "0308", "0309"]', NULL, '2021-05-16 14:25:48.268', '2021-05-16 14:25:48.27'),
('0401', 'Đồ sưu tầm, đồ cổ', 'mua-ban-do-suu-tam-do-co', NULL, '04', NULL, '{B,S}', '2021-05-16 14:25:49.27', '2021-05-16 14:25:49.271'),
('0402', 'Đồ thể thao, Dã ngoại', 'mua-ban-do-the-thao-da-ngoai', NULL, '04', NULL, '{B,S}', '2021-05-16 14:25:50.278', '2021-05-16 14:25:50.279'),
('0404', 'Nhạc cụ', 'mua-ban-nhac-cu', NULL, '04', NULL, '{B,S}', '2021-05-16 14:25:51.286', '2021-05-16 14:25:51.287'),
('0405', 'Thiết bị chơi game', 'mua-ban-thiet-bi-choi-game', NULL, '04', NULL, '{B,S}', '2021-05-16 14:25:52.297', '2021-05-16 14:25:52.298'),
('0406', 'Sở thích khác', 'mua-ban-so-thich-khac', NULL, '04', NULL, '{B,S}', '2021-05-16 14:25:53.295', '2021-05-16 14:25:53.296'),
('0407', 'Sách', 'mua-ban-sach', NULL, '04', NULL, '{B,S}', '2021-05-16 14:25:54.306', '2021-05-16 14:25:54.307'),
('04', 'Giải trí, Thể thao, Sở thích', 'mua-ban-giai-tri-the-thao-so-thich', NULL, NULL, '["0401", "0402", "0404", "0405", "0406", "0407"]', NULL, '2021-05-16 14:25:55.304', '2021-05-16 14:25:55.305'),
('0502', 'Tivi, Âm thanh', 'mua-ban-tivi-am-thanh', NULL, '05', NULL, '{B,S}', '2021-05-16 14:25:57.317', '2021-05-16 14:25:57.317'),
('0503', 'Laptop', 'mua-ban-laptop', NULL, '05', NULL, '{B,S}', '2021-05-16 14:25:58.32', '2021-05-16 14:25:58.321'),
('0504', 'Máy tính bảng', 'mua-ban-may-tinh-bang', NULL, '05', NULL, '{B,S}', '2021-05-16 14:25:59.324', '2021-05-16 14:25:59.325'),
('0505', 'Máy ảnh, Máy quay', 'mua-ban-may-anh-may-quay', NULL, '05', NULL, '{B,S}', '2021-05-16 14:26:00.47', '2021-05-16 14:26:00.471'),
('0506', 'Phụ kiện (Màn hình, Chuột...)', 'mua-ban-phu-kien', NULL, '05', NULL, '{B,S}', '2021-05-16 14:26:01.333', '2021-05-16 14:26:01.334'),
('0507', 'Máy tính để bàn', 'mua-ban-may-tinh-de-ban', NULL, '05', NULL, '{B,S}', '2021-05-16 14:26:02.338', '2021-05-16 14:26:02.339'),
('0508', 'Linh kiện (RAM, Card...)', 'mua-ban-linh-kien', NULL, '05', NULL, '{B,S}', '2021-05-16 14:26:03.494', '2021-05-16 14:26:03.495'),
('0509', 'Thiết bị đeo thông minh', 'mua-ban-thiet-bi-deo-thong-minh', NULL, '05', NULL, '{B,S}', '2021-05-16 14:26:04.355', '2021-05-16 14:26:04.356'),
('05', 'Đồ điện tử', 'mua-ban-do-dien-tu', NULL, NULL, '["0501", "0502", "0503", "0504", "0505", "0506", "0507", "0508", "0509"]', NULL, '2021-05-16 14:26:05.356', '2021-05-16 14:26:05.356'),
('0602', 'Dịch vụ', 'dich-vu', NULL, '06', NULL, '{B,S}', '2021-05-16 14:26:06.359', '2021-05-16 14:26:06.36'),
('0603', 'Du lịch', 'du-lich', NULL, '06', NULL, '{B,S}', '2021-05-16 14:26:07.369', '2021-05-16 14:26:07.37'),
('06', 'Dịch vụ, Du lịch', 'dich-vu-du-lich', NULL, NULL, '["0602", "0603"]', NULL, '2021-05-16 14:26:08.376', '2021-05-16 14:26:08.376'),
('0701', 'Đồ ăn, thực phẩm và các loại khác', 'mua-ban-do-an-thuc-pham', NULL, '07', NULL, '{B,S}', '2021-05-16 14:26:09.379', '2021-05-16 14:26:09.38'),
('07', 'Đồ ăn, thực phẩm và các loại khác', 'mua-ban-do-an-thuc-pham-va-cac-loai-khac', NULL, NULL, '["0701"]', NULL, '2021-05-16 14:26:10.383', '2021-05-16 14:26:10.384'),
('0801', 'Đồ dùng văn phòng', 'mua-ban-do-dung-van-phong', NULL, '08', NULL, '{B,S}', '2021-05-16 14:26:11.391', '2021-05-16 14:26:11.392'),
('0803', 'Đồ chuyên dụng, Giống nuôi trồng', 'mua-ban-do-chuyen-dung-giong-nuoi-trong', NULL, '08', NULL, '{B,S}', '2021-05-16 14:26:12.399', '2021-05-16 14:26:12.4'),
('08', 'Đồ dùng văn phòng, công nông nghiệp', 'mua-ban-thiet-bi-van-phong-cong-nong-nghiep', NULL, NULL, '["0801", "0803"]', NULL, '2021-05-16 14:26:13.4', '2021-05-16 14:26:13.4'),
('0903', 'Tủ lạnh', 'mua-ban-tu-lanh', NULL, '09', NULL, '{B,S}', '2021-05-16 14:26:14.407', '2021-05-16 14:26:14.408'),
('0906', 'Máy lạnh, điều hoà', 'mua-ban-may-lanh-dieu-hoa', NULL, '09', NULL, '{B,S}', '2021-05-16 14:26:15.417', '2021-05-16 14:26:15.418'),
('0907', 'Máy giặt', 'mua-ban-may-giat', NULL, '09', NULL, '{B,S}', '2021-05-16 14:26:16.447', '2021-05-16 14:26:16.448'),
('09', 'Tủ lạnh, máy lạnh, máy giặt', 'mua-ban-tu-lanh-may-lanh-may-giat', NULL, NULL, '["0903", "0906", "0907"]', NULL, '2021-05-16 14:26:17.422', '2021-05-16 14:26:17.423'),
('1101', 'Mẹ và bé', 'mua-ban-do-dung-me-va-be', NULL, '11', NULL, '{B,S}', '2021-05-16 14:26:18.427', '2021-05-16 14:26:18.428'),
('11', 'Mẹ và bé', 'mua-ban-do-dung-me-va-be', NULL, NULL, '["1101"]', NULL, '2021-05-16 14:26:19.574', '2021-05-16 14:26:19.575'),
('1201', 'Gà', 'mua-ban-ga', NULL, '12', NULL, '{B,S}', '2021-05-16 14:26:20.437', '2021-05-16 14:26:20.438'),
('1202', 'Chó', 'mua-ban-cho', NULL, '12', NULL, '{B,S}', '2021-05-16 14:26:21.446', '2021-05-16 14:26:21.447'),
('1203', 'Chim', 'mua-ban-chim', NULL, '12', NULL, '{B,S}', '2021-05-16 14:26:22.448', '2021-05-16 14:26:22.449'),
('1204', 'Phụ kiện, Thức ăn, Dịch vụ', 'mua-ban-phu-kien-thuc-an-dich-vu', NULL, '12', NULL, '{B,S}', '2021-05-16 14:26:23.457', '2021-05-16 14:26:23.459'),
('1205', 'Mèo', 'mua-ban-meo', NULL, '12', NULL, '{B,S}', '2021-05-16 14:26:24.456', '2021-05-16 14:26:24.457'),
('1206', 'Thú cưng khác', 'mua-ban-thu-cung-khac', NULL, '12', NULL, '{B,S}', '2021-05-16 14:26:25.466', '2021-05-16 14:26:25.467'),
('1301', 'Danh sách việc làm', 'danh-sach-viec-lam', NULL, '13', NULL, '{B}', '2021-05-16 14:26:27.483', '2021-05-16 14:26:27.484'),
('12', 'Thú cưng', 'mua-ban-thu-cung', NULL, NULL, '["1201", "1202", "1203", "1204", "1205", "1206"]', NULL, '2021-05-16 14:26:27.839', '2021-05-16 14:26:27.84'),
('02', 'Xe cộ', 'mua-ban-xe', 'https://static.chotot.com/storage/chapy-pro/newcats/v8/2000.png', NULL, '["0201", "0202", "0203", "0205", "0206", "0208", "0209"]', NULL, '2021-05-16 14:25:41.236', '2021-05-24 04:31:07.7'),
('0104', 'Đất', 'mua-ban-dat', 'https://cms.luatvietnam.vn/uploaded/Images/Original/2018/11/27/phi-cong-chung_2711160036.png', '01', NULL, '{B,R,S,T}', '2021-05-16 14:25:31.443', '2021-05-24 04:34:32.18'),
('0103', 'Văn phòng, Mặt bằng kinh doanh', 'sang-nhuong-van-phong-mat-bang-kinh-doanh', 'https://unia.vn/wp-content/uploads/2020/08/cach-hoc-tieng-Anh-giao-tiep-cuc-hieu-qua-cho-nhan-vien-van-phong-1-1.png', '01', NULL, '{B,R,S,T}', '2021-05-16 14:25:30.914', '2021-05-24 04:34:32.181'),
('0105', 'Phòng trọ', 'thue-phong-tro', 'https://thuenhatro360.com/u/i/YkGgFDNJ.png', '01', NULL, '{R,T}', '2021-05-16 14:25:32.19', '2021-05-24 04:36:08.178'),
('0203', 'Phụ tùng xe', 'mua-ban-phu-tung-xe', 'https://file.hstatic.net/1000192210/article/1200__1__27c775ea8b5f44d9b160d68c00e94278_1024x1024.png', '02', NULL, '{B,S}', '2021-05-16 14:25:36.212', '2021-05-24 04:37:11.354'),
('0209', 'Xe điện', 'mua-ban-xe-dien', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6M7RNu5Ua8BYuF3sO7bystZSQJxeGEfllOQ&usqp=CAU', '02', NULL, '{B,S}', '2021-05-16 14:25:40.231', '2021-05-24 04:42:26.591'),
('13', 'Việc làm', 'viec-lam', NULL, NULL, '["1301", "1302"]', NULL, '2021-05-16 14:26:29.489', '2021-05-16 14:26:29.49'),
('1402', 'Dụng cụ nhà bếp', 'mua-ban-dung-cu-nha-bep', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:31.495', '2021-05-16 14:26:31.496'),
('1404', 'Thiết bị vệ sinh, nhà tắm', 'mua-ban-thiet-bi-ve-sinh-nha-tam', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:33.507', '2021-05-16 14:26:33.508'),
('1405', 'Quạt', 'mua-ban-quat', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:35.006', '2021-05-16 14:26:35.007'),
('1407', 'Bàn ghế', 'mua-ban-ban-ghe', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:36.517', '2021-05-16 14:26:36.518'),
('1409', 'Cây cảnh, đồ trang trí', 'mua-ban-cay-canh-do-trang-tri', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:38.53', '2021-05-16 14:26:38.532'),
('14', 'Đồ gia dụng, nội thất, cây cảnh', 'mua-ban-do-gia-dung-noi-that-cay-canh', NULL, NULL, '["1401", "1402", "1403", "1404", "1405", "1406", "1407", "1408", "1409", "1411"]', NULL, '2021-05-16 14:26:40.54', '2021-05-16 14:26:40.541'),
('1302', 'Danh sách người tìm việc', 'danh-sach-nguoi-tim-viec', NULL, '13', NULL, '{B}', '2021-05-16 14:26:28.485', '2021-05-16 14:26:28.486'),
('1401', 'Bếp, lò, đồ điện nhà bếp', 'mua-ban-bep-lo-do-dien-nha-bep', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:30.487', '2021-05-16 14:26:30.488'),
('1403', 'Giường, chăn ga gối nệm', 'mua-ban-giuong-chan-ga-goi-nem', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:32.639', '2021-05-16 14:26:32.64'),
('1406', 'Đèn', 'mua-ban-den', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:35.6', '2021-05-16 14:26:35.601'),
('1408', 'Tủ, kệ gia đình', 'mua-ban-tu-ke-gia-dinh', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:37.52', '2021-05-16 14:26:37.521'),
('1411', 'Nội thất, đồ gia dụng khác', 'mua-ban-noi-that-do-gia-dung-khac', NULL, '14', NULL, '{B,S}', '2021-05-16 14:26:39.529', '2021-05-16 14:26:39.53'),
('0501', 'Điện thoại', 'mua-ban-dien-thoai', 'https://static.chotot.com/storage/chapy-pro/newcats/v8/5000.png', '05', NULL, '{B,S}', '2021-05-16 14:25:56.316', '2021-05-24 04:31:07.7'),
('01', 'Bất động sản - Mua bán', 'mua-ban-bat-dong-san', 'https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png', NULL, '["0101", "0102", "0103", "0104", "0105"]', NULL, '2021-05-16 14:25:33.195', '2021-05-24 04:31:07.7'),
('0101', 'Căn hộ/Chung cư', 'mua-ban-can-ho-chung-cu', 'https://ancu.me/images/201910/tong-quan-du-an-chung-cu-lotus-lake-view/tong-quan-du-an-chung-cu-lotus-lake-view.png?image_id=24115', '01', NULL, '{B,R,S,T}', '2021-05-16 14:25:28.845', '2021-05-24 04:31:51.823'),
('0102', 'Nhà ở', 'mua-ban-nha-dat', 'https://cms.luatvietnam.vn/uploaded/Images/Original/2019/01/28/mua_ban_2801093748.png', '01', NULL, '{B,R,S,T}', '2021-05-16 14:25:30.914', '2021-05-24 04:33:25.517'),
('0201', 'Ô tô', 'mua-ban-o-to', 'https://chonoithatoto.vn/wp-content/uploads/2018/07/2018-07-11_212209.png', '02', NULL, '{B,S}', '2021-05-16 14:25:34.201', '2021-05-24 04:36:08.179'),
('0202', 'Xe máy', 'mua-ban-xe-may', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/10/dia-diem-nao-cho-thue-xe-may-vung-tau-uy-tin.png', '02', NULL, '{B,S}', '2021-05-16 14:25:35.205', '2021-05-24 04:36:08.179'),
('0206', 'Xe đạp', 'mua-ban-xe-dap', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUoHdkDBjDr-7WdXdUHOIHecqZ4bgz0RC9w&usqp=CAU', '02', NULL, '{B,S}', '2021-05-16 14:25:38.222', '2021-05-24 04:42:26.592'),
('0205', 'Xe tải, xe ben', 'mua-ban-xe-tai-xe-ben', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC31OP7jGMy5tPjJ16HXr7IbkQFv3DB1dhkA&usqp=CAU', '02', NULL, '{B,S}', '2021-05-16 14:25:37.221', '2021-05-24 04:42:26.592'),
('0208', 'Phương tiện khác', 'mua-ban-phuong-tien-khac', 'https://i.pinimg.com/originals/ef/36/e1/ef36e1b29e0f2d0b21c8282db1a26720.png', '02', NULL, '{B,S}', '2021-05-16 14:25:39.227', '2021-05-24 04:42:26.593');


INSERT INTO "dicho"."Message" ("id", "content", "attachment") VALUES
('60a13183e59904964c524fd1', 'Chào Tâm nhé!', NULL);
INSERT INTO "dicho"."Message" ("id", "content", "attachment") VALUES
('60a131a8218c1a23f4b5cc3d', 'Chào Tâm nhé 2!', NULL);
INSERT INTO "dicho"."Message" ("id", "content", "attachment") VALUES
('60a131cc2206c706f54ba8cd', 'Chào Trường nhé nhé!', NULL);
INSERT INTO "dicho"."Message" ("id", "content", "attachment") VALUES
('60a131d61bdb16a1143375bf', 'Chào Trường nhé nhé 2!', NULL),
('60a22d789412a0bbf481b47c', 'Chào Trường nhé nhé 3!', NULL),
('60a4e60500549ddfb030e910', 'Chào Trí nhé!', NULL),
('60a4eaa294e33b7feb02cda3', 'Trường chào Tâm nhé 3!', NULL),
('60a4ec3183debcb60828d021', 'Trí chào Trường nhé!', NULL);


INSERT INTO "dicho"."Chat" ("msgId", "senderId", "receiverId", "lastMsg", "seen", "deletedUser", "unseenNumber") VALUES
('60a131cc2206c706f54ba8cd', '60a129853b44265330880ebe', '60a1296af601509a40766998', NULL, 'f', '', 0);
INSERT INTO "dicho"."Chat" ("msgId", "senderId", "receiverId", "lastMsg", "seen", "deletedUser", "unseenNumber") VALUES
('60a131a8218c1a23f4b5cc3d', '60a1296af601509a40766998', '60a129853b44265330880ebe', NULL, 'f', '', 0);
INSERT INTO "dicho"."Chat" ("msgId", "senderId", "receiverId", "lastMsg", "seen", "deletedUser", "unseenNumber") VALUES
('60a13183e59904964c524fd1', '60a1296af601509a40766998', '60a129853b44265330880ebe', NULL, 'f', '', 0);
INSERT INTO "dicho"."Chat" ("msgId", "senderId", "receiverId", "lastMsg", "seen", "deletedUser", "unseenNumber") VALUES
('60a131d61bdb16a1143375bf', '60a129853b44265330880ebe', '60a1296af601509a40766998', NULL, 'f', '', 0),
('60a22d789412a0bbf481b47c', '60a129853b44265330880ebe', '60a1296af601509a40766998', NULL, 'f', '', 0),
('60a4e60500549ddfb030e910', '60a1296af601509a40766998', '60a4d97274248e5b5b0eef81', NULL, 'f', '', 0),
('60a4eaa294e33b7feb02cda3', '60a1296af601509a40766998', '60a129853b44265330880ebe', NULL, 'f', '', 0),
('60a4ec3183debcb60828d021', '60a4d97274248e5b5b0eef81', '60a1296af601509a40766998', NULL, 'f', '', 0);

INSERT INTO "dicho"."Post" ("id", "title", "thumbnail", "categoryId", "type", "broker", "params", "region", "area", "ward", "price", "images", "content", "address", "postedById", "likeCount", "commentCount", "status", "created", "updated") VALUES
('60ab39339391f751e8197590', 'Ứng tuyển vị trí node js junior', 'ung-tuyen-vi-tri-node-js-junior-60ab392f-1', '1302', 'B', 'f', NULL, 13000, 13099, 0, 150000, '{ung-tuyen-vi-tri-node-js-junior-60ab392f-1}', 'Tôi đang mong muốn tìm vị trí công việc backend dev Junior Nodejs 
Năng lực & Kinh nghiệm : 
- Làm 3 dự án lớn trong đó có 1 dự án về Blockchain
- Tốt nghiệp đại học Bách Khoa', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 05:27:15.119', '2021-05-24 05:30:56.664');
INSERT INTO "dicho"."Post" ("id", "title", "thumbnail", "categoryId", "type", "broker", "params", "region", "area", "ward", "price", "images", "content", "address", "postedById", "likeCount", "commentCount", "status", "created", "updated") VALUES
('60ab37b2539cf2c15d6ab9b8', 'Bán đầm bầu style Hàn Quốc ( hàng xách tay )', 'ban-dam-bau-style-han-quoc-hang-xach-tay--60ab37ae-2', '1101', 'S', 'f', NULL, 13000, 13099, 0, 1000000, '{ban-dam-bau-style-han-quoc-hang-xach-tay--60ab37ae-2,ban-dam-bau-style-han-quoc-hang-xach-tay--60ab37ae-1}', 'Mô tả:

Mama Style Shop là đơn vị cung cấp đầu bầu luôn được đông đảo khách hàng tin tưởng. Với hàng loạt mẫu mã thiết kế mới mẻ, hợp xu hướng thời trang, shop luôn cam kết về chất lượng hoàn hảo, sử dụng nguồn nguyên liệu cao cấp nên giúp người dùng yên tâm sử dụng.

Đầm bầu của Mama Style Shop freesize nên mẹ bầu có thể diện được cả thai kỳ lẫn sau sinh bằng các điều chỉnh dây cột tiện lợi.

Giá đầm bầu đẹp dao động trong khoảng từ 350.000 – 490.000 đồng/sản phẩm.', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 05:20:50.105', '2021-05-24 05:30:58.672');
INSERT INTO "dicho"."Post" ("id", "title", "thumbnail", "categoryId", "type", "broker", "params", "region", "area", "ward", "price", "images", "content", "address", "postedById", "likeCount", "commentCount", "status", "created", "updated") VALUES
('60ab32f46a4647bdfe8700be', 'Cho thú cưng (Chó Big Bull)', 'cho-thu-cung-cho-big-bull-60ab32cf-1', '1202', 'B', 'f', NULL, 13000, 13108, 0, 1400000, '{cho-thu-cung-cho-big-bull-60ab32cf-1,cho-thu-cung-cho-big-bull-60ab32cf-2}', 'Mình đang tìm chủ mới cho bé cưng của mình .
Chó giống Big Bull rất ngoan và vui
Ai có nhu cầu thì chat trực tiếp với mình nha', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 05:00:37.032', '2021-05-24 05:08:57.824');
INSERT INTO "dicho"."Post" ("id", "title", "thumbnail", "categoryId", "type", "broker", "params", "region", "area", "ward", "price", "images", "content", "address", "postedById", "likeCount", "commentCount", "status", "created", "updated") VALUES
('60ab3f5c68b7212dc9577c99', 'Bán xe máy sirius 2013 (cũ) - 10 tr', 'ban-xe-may-sirius-2013-cu-10-tr-60ab3f55-2', '0202', 'S', 'f', NULL, 13000, 13101, 0, 10000000, '{ban-xe-may-sirius-2013-cu-10-tr-60ab3f55-2,ban-xe-may-sirius-2013-cu-10-tr-60ab3f55-1}', ' Tôi đang có chiếc xe máy của ông anh đi xa muốn bán  , xe còn đẹp và chạy tốt, bốc đầu mấy lần không sao.

Nếu ai có như cầu thì liên hệ với mình ạ', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'P', '2021-05-24 05:53:32.234', '2021-05-24 05:53:32.235'),
('60ab3e9cc458dda625091102', 'Mua bàn học ngồi bệt', 'mua-ban-hoc-ngoi-bet-60ab3e98-1', '0801', 'B', 'f', NULL, 2010, 201004, 0, 100000, '{mua-ban-hoc-ngoi-bet-60ab3e98-1}', 'Tôi muốn mua một bàn bệt để ngồi học dành cho sinh viên , tôi chỉ muốn mua cũ giá mềm tí, ai có nhu cầu thì chat trực tiếp với tôi ạ', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 05:50:20.138', '2021-05-24 05:53:50.029'),
('60ab3f59c3689e7c486560e2', 'Bán xe máy sirius 2013 (cũ) - 10 tr', 'ban-xe-may-sirius-2013-cu-10-tr-60ab3f55-2', '0202', 'S', 'f', NULL, 13000, 13101, 0, 10000000, '{ban-xe-may-sirius-2013-cu-10-tr-60ab3f55-2,ban-xe-may-sirius-2013-cu-10-tr-60ab3f55-1}', ' Tôi đang có chiếc xe máy của ông anh đi xa muốn bán  , xe còn đẹp và chạy tốt, bốc đầu mấy lần không sao.

Nếu ai có như cầu thì liên hệ với mình ạ', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 05:53:29.477', '2021-05-24 05:53:50.877'),
('60ab406fc0fde8a22af690a8', 'Bán laptop gaming ASUS chip i7', 'ban-laptop-gaming-asus-chip-i7-60ab4069-1', '0503', 'S', 'f', NULL, 1004, 100405, 0, 125000, '{ban-laptop-gaming-asus-chip-i7-60ab4069-1}', 'Tôi cần bán 1 con laptop cũ ở bắc ninh đã qua sử dụng : 
- Ram 12 GB bus 1866
- CPU 8500U - i7 Thế hệ 8
- SSD 125 GB

ai mua liên hệ ạ, xin cám ơn', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 05:58:07.976', '2021-05-24 05:58:20.213'),
('60ab4047a3dcd17e152f883d', 'May tinh ban', 'may-tinh-ban-60ab4044-1', '0507', 'S', 'f', NULL, 1007, 100702, 0, 8, '{may-tinh-ban-60ab4044-1}', 'May tinh ban
8.000.000 đ


Nhấn để hiện số: 090531 ***
Tình trạng
Tình trạng: Đã sử dụng (chưa sửa chữa)', NULL, '60a7b447e522e7f144960a30', 0, 0, 'A', '2021-05-24 05:57:27.944', '2021-05-24 06:05:08.623'),
('60ab41ee5956102c9302e022', 'Bán tủ lạnh Samsung 8Lit - cũ 1.4tr', 'ban-tu-lanh-samsung-8lit-cu-14tr-60ab41ec-1', '0903', 'S', 'f', NULL, 13000, 13099, 0, 140000, '{ban-tu-lanh-samsung-8lit-cu-14tr-60ab41ec-1}', 'Tôi cần bán tủ lạnh cũ  8 lít giá sinh viên
ai có nhu cầu liên hệ nha ', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 06:04:31.083', '2021-05-24 06:05:10.879'),
('60ab40abcd790bc22687ee02', 'May tinh chien game lien minh', 'may-tinh-chien-game-lien-minh-60ab40a3-1', '0507', 'S', 'f', NULL, 10064, 1006402, 0, 2, '{may-tinh-chien-game-lien-minh-60ab40a3-1}', 'Ko sữ dụng máy chơi còn tốt chiến liên minh cf ok tất tần tật

Nhấn để hiện số: 090597 ***
Tình trạng
Tình trạng: Đã sử dụng (chưa sửa chữa)
Kích cỡ màn hình
Kích cỡ màn hình: 19 - 20.9 inch
RAM
RAM: 4 GB
Card màn hình
Card màn hình: NVIDIA
Ổ cứng
Ổ cứng: 250 GB', NULL, '60a7b447e522e7f144960a30', 0, 0, 'R', '2021-05-24 05:59:07.033', '2021-05-24 06:05:43.511'),
('60ab3a053f39fae940bbdfb7', 'Tìm bạn ở ghép giá 1.5Tr/tháng', 'tim-ban-o-ghep-gia-15trthang-60ab3a03-1', '0101', 'T', 'f', NULL, 13000, 13100, 0, 150000, '{tim-ban-o-ghep-gia-15trthang-60ab3a03-1,tim-ban-o-ghep-gia-15trthang-60ab3a03-2}', '[Tìm người ở ghép] 1.5tr/th Full Nội thất
đ/c : Trường tiểu học Bình Triệu .
Tìm bạn sinh viên share phòng giá 1.5tr/tháng ( hiện tại đã có 2 người)
LH : 0947 509 171
Phòng full nội thất
Bếp từ nấu ăn
Quạt
Máy lạnh
Tủ lạnh
tivi samsung 43inchs 2020
máy nước nóng
Máy giặt
Phòng rộng nên cần tìm thêm 2-4 bạn nữa . ai đang có nhu cầu thì để lại cmt mình inbx cho hoặc gọi và số điện thoại trên, xin cám ơn', NULL, '60ab2d849ca6c0425202a746', 1, 0, 'A', '2021-05-24 05:30:45.493', '2021-05-24 07:23:42.425'),
('60ab40a5253cacafca4dbef1', 'May tinh chien game lien minh', 'may-tinh-chien-game-lien-minh-60ab40a3-1', '0507', 'S', 'f', NULL, 10064, 1006402, 0, 2, '{may-tinh-chien-game-lien-minh-60ab40a3-1}', 'Ko sữ dụng máy chơi còn tốt chiến liên minh cf ok tất tần tật

Nhấn để hiện số: 090597 ***
Tình trạng
Tình trạng: Đã sử dụng (chưa sửa chữa)
Kích cỡ màn hình
Kích cỡ màn hình: 19 - 20.9 inch
RAM
RAM: 4 GB
Card màn hình
Card màn hình: NVIDIA
Ổ cứng
Ổ cứng: 250 GB', NULL, '60a7b447e522e7f144960a30', 0, 0, 'A', '2021-05-24 05:59:01.578', '2021-05-24 06:05:09.42'),
('60ab438c2867e102422ae4db', 'Bán đồng hồ Eterna Legacy Automatic ', NULL, '0305', 'S', 'f', NULL, 13000, 13100, 0, 135000, '{}', 'ĐỒNG HỒ ETERNA LEGACY AUTOMATIC 2951.53.11.1701, thiết kế mặt chải tia rất đẹp, tông màu gold sang trọng, thiết kế siêu mỏng với độ dày chỉ 9.5 mm. 1 mẫu đồng hồ rất đẹp đến từ thương hiệu lâu đời Eterna.

⌚Thông tin chi tiết

Xuất xứ: Đồng Hồ Thụy Sỹ
Thương hiệu: ETERNA
Mã sản phẩm: 2951.53.11.1701
Loại máy: Cơ (Automatic)
Chất liệu kính: Sapphire
Chất liệu dây: Dây kim loại
Kích thước: 41,5 mm
Độ dày: 9,6 mm nhưng lên tay như 6-7mm ạ
Chống nước: 50 m

-----------------------------------
Giá hãng 2600$ ~ 70t nhưng đến với em giá sập sàn chỉ 18,5 triệu thôi nhé ae!', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'P', '2021-05-24 06:11:24.569', '2021-05-24 06:11:24.57'),
('60ab4471fb3258a81d2e8a04', 'Bán đồng hồ Eterna Legacy Automatic ', 'ban-dong-ho-eterna-legacy-automatic--60ab446e-1', '0305', 'S', 'f', NULL, 1005, 100507, 0, 199000, '{ban-dong-ho-eterna-legacy-automatic--60ab446e-1}', 'ĐỒNG HỒ ETERNA LEGACY AUTOMATIC 2951.53.11.1701, thiết kế mặt chải tia rất đẹp, tông màu gold sang trọng, thiết kế siêu mỏng với độ dày chỉ 9.5 mm. 1 mẫu đồng hồ rất đẹp đến từ thương hiệu lâu đời Eterna.

⌚Thông tin chi tiết

Xuất xứ: Đồng Hồ Thụy Sỹ
Thương hiệu: ETERNA
Mã sản phẩm: 2951.53.11.1701
Loại máy: Cơ (Automatic)
Chất liệu kính: Sapphire
Chất liệu dây: Dây kim loại
Kích thước: 41,5 mm
Độ dày: 9,6 mm nhưng lên tay như 6-7mm ạ
Chống nước: 50 m', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 06:15:13.102', '2021-05-24 06:15:20.025'),
('60ab442093f788750e087b20', 'Bán lại Nước hoa con báo', 'ban-lai-nuoc-hoa-con-bao-60ab441f-1', '0308', 'S', 'f', NULL, 13000, 13098, 0, 145000, '{ban-lai-nuoc-hoa-con-bao-60ab441f-1}', 'Nước hoa để trên xe ôtô hoặc để trong phòng khách.
Giá chỉ 200k/1chai
Liên hệ zalo nhé mọi người. Thanks', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'A', '2021-05-24 06:13:52.155', '2021-05-24 06:15:21.951'),
('60ab46072b3ba34d57b86a60', 'Bán chó cưng pooed nâu đỏ', 'ban-cho-cung-pooed-nau-do-60ab4605-1', '1202', 'S', 'f', NULL, 13000, 13106, 0, 140000, '{ban-cho-cung-pooed-nau-do-60ab4605-1}', 'nhà có đàn pooed nâu đỏ
Tìm sen, Cái đực có đủ cả ạ', NULL, '60ab2d849ca6c0425202a746', 0, 0, 'P', '2021-05-24 06:21:59.678', '2021-05-24 06:21:59.679'),
('60ab4551da27bec195d4caf9', 'Mèo anh lông ngắn màu xám', 'meo-anh-long-ngan-mau-xam-60ab454f-1', '1205', 'S', 'f', NULL, 13000, 13103, 0, 800000, '{meo-anh-long-ngan-mau-xam-60ab454f-1}', 'Bé mèo được hơn 2 tháng tuổi
Đã tiêm 1 mũi vacxin
Bảo hành sức khỏe bé 1 tuần và tiêm đủ 2 mũi vacxin', NULL, '60ab2d849ca6c0425202a746', 1, 1, 'A', '2021-05-24 06:18:57.742', '2021-05-24 07:16:55.662'),
('60ab44e1af5d3eb3e13c7ce9', 'Thanh lí giày nam công sở', 'thanh-li-giay-nam-cong-so-60ab44de-1', '0306', 'S', 'f', NULL, 13000, 13100, 0, 175000, '{thanh-li-giay-nam-cong-so-60ab44de-1}', 'Mình có giày như hình side 41 chưa sử dụng bạn nào cần mình để lại ạ, giày mới như hình còn hộp', NULL, '60ab2d849ca6c0425202a746', 1, 0, 'A', '2021-05-24 06:17:05.214', '2021-05-24 07:17:29.203');
INSERT INTO "dicho"."Post" ("id", "title", "thumbnail", "categoryId", "type", "broker", "params", "region", "area", "ward", "price", "images", "content", "address", "postedById", "likeCount", "commentCount", "status", "created", "updated") VALUES
('60ab5366a94bf87be60b8e1f', 'Cho thuê phòng trọ', 'cho-thue-phong-tro-60ab5360-1', '0105', 'T', 'f', NULL, 5028, 502805, 0, 2323232, '{cho-thue-phong-tro-60ab5360-1,cho-thue-phong-tro-60ab5360-2}', 'Cho thuê phòng', NULL, '60a1296af601509a40766998', 1, 1, 'A', '2021-05-24 07:19:02.963', '2021-05-24 07:21:54.907');
INSERT INTO "dicho"."Post" ("id", "title", "thumbnail", "categoryId", "type", "broker", "params", "region", "area", "ward", "price", "images", "content", "address", "postedById", "likeCount", "commentCount", "status", "created", "updated") VALUES
('60ab5563ccc6f1a30ef590d9', 'Cần bán xe máy', 'can-ban-xe-may-60ab555d-1', '0202', 'S', 'f', NULL, 0, 0, 0, 22222, '{can-ban-xe-may-60ab555d-1}', 'Cần bán xe máy', NULL, '60ab2d849ca6c0425202a746', 1, 1, 'A', '2021-05-24 07:27:31.568', '2021-05-24 07:29:18.921');



INSERT INTO "dicho"."Comment" ("id", "postId", "userId", "content") VALUES
('60ab52e77a392eaab5df88a4', '60ab4551da27bec195d4caf9', '60a1296af601509a40766998', 'Tôi muốn mua');
INSERT INTO "dicho"."Comment" ("id", "postId", "userId", "content") VALUES
('60ab54124c303b841e05503d', '60ab5366a94bf87be60b8e1f', '60a1296af601509a40766998', 'Tôi muốn thuê');
INSERT INTO "dicho"."Comment" ("id", "postId", "userId", "content") VALUES
('60ab55cecbb4e88f52b1ec3e', '60ab5563ccc6f1a30ef590d9', '60a1296af601509a40766998', 'Hay');



INSERT INTO "dicho"."Like" ("postId", "userId", "created") VALUES
('60ab4551da27bec195d4caf9', '60a1296af601509a40766998', '2021-05-24 07:16:42.304');
INSERT INTO "dicho"."Like" ("postId", "userId", "created") VALUES
('60ab44e1af5d3eb3e13c7ce9', '60a1296af601509a40766998', '2021-05-24 07:17:29.202');
INSERT INTO "dicho"."Like" ("postId", "userId", "created") VALUES
('60ab5366a94bf87be60b8e1f', '60a1296af601509a40766998', '2021-05-24 07:21:42.842');
INSERT INTO "dicho"."Like" ("postId", "userId", "created") VALUES
('60ab3a053f39fae940bbdfb7', '60a1296af601509a40766998', '2021-05-24 07:23:42.423'),
('60ab5563ccc6f1a30ef590d9', '60a1296af601509a40766998', '2021-05-24 07:28:38.394');



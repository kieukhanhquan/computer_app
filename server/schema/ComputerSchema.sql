-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2023 at 07:42 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `FirstName` text NOT NULL,
  `LastName` text NOT NULL,
  `UserName` text NOT NULL,
  `Password` text NOT NULL,
  `Type` int(11) NOT NULL,
  `PhoneNumber` double NOT NULL,
  `Avatar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `FirstName`, `LastName`, `UserName`, `Password`, `Type`, `PhoneNumber`, `Avatar`) VALUES
(1000001, 'Lượng', 'Nguyễn', 'ADMIN_1', 'Admin_1', 1000000, 371154967, 'https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver=6'),
(1000002, 'Hùng', 'Nguyễn', 'ADMIN_2', 'Admin_2', 1000000, 373846273, 'https://media.istockphoto.com/id/535076427/vi/vec-to/flat-busness-man-h%E1%BB%93-s%C6%A1-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-avatar-trong-b%E1%BB%99-%C4%91%E1%BB%93.jpg?s=170667a&w=0&k=20&c=_3s-b7oJVQ3FBNZL10eJ2tmzTmHmcIW_cTG6tjkRc7A='),
(1000003, 'Quân', 'Kiều', 'ADMIN_3', 'Admin_3', 1000000, 372454967, 'https://i.pinimg.com/originals/34/60/3c/34603ce8a80b1ce9a768cad7ebf63c56.jpg'),
(1000004, 'Đức', 'Hồ', 'ADMIN_4', 'Admin_4', 1000000, 372454912, 'https://w7.pngwing.com/pngs/922/214/png-transparent-computer-icons-avatar-businessperson-interior-design-services-corporae-building-company-heroes-thumbnail.png');

-- --------------------------------------------------------

--
-- Table structure for table `belong`
--

CREATE TABLE `belong` (
  `OrderID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `belong`
--

INSERT INTO `belong` (`OrderID`, `ProductID`, `Quantity`) VALUES
(6000001, 3200005, 5),
(6000002, 3200004, 2),
(6000002, 3100001, 1),
(6000003, 3000004, 1),
(6000003, 3200003, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `ID` int(11) NOT NULL,
  `ClientID` int(11) NOT NULL,
  `Amount` int(11) NOT NULL,
  `ProductQuantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`ID`, `ClientID`, `Amount`, `ProductQuantity`) VALUES
(4000001, 2000001, 25000000, 5),
(4000002, 2000002, 27000000, 3),
(4000003, 2000003, 26000000, 2);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `ID` int(11) NOT NULL,
  `FirstName` text NOT NULL,
  `LastName` text NOT NULL,
  `DayOfBirth` date NOT NULL,
  `Gender` text NOT NULL,
  `Email` text NOT NULL,
  `Address` text NOT NULL,
  `UserName` text NOT NULL,
  `Password` text NOT NULL,
  `Type` int(11) NOT NULL,
  `PhoneNumber` double NOT NULL,
  `Avatar` text NOT NULL,
  `Grade` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`ID`, `FirstName`, `LastName`, `DayOfBirth`, `Gender`, `Email`, `Address`, `UserName`, `Password`, `Type`, `PhoneNumber`, `Avatar`, `Grade`) VALUES
(2000001, 'Dương', 'Trần', '2002-04-10', 'Male', 'duongtran22@gmail.com', '193 Cô Giang, quận 1, thành phố Hồ Chí Minh', 'tranduong22', 'Duongtran123', 2000000, 705692140, 'https://www.w3schools.com/howto/img_avatar.png', 1),
(2000002, 'Nam', 'Lê', '2002-06-12', 'Male', 'namle12@gmail.com', '46A Đinh Công Tráng, phường Tân Định, quận 1, thành phố Hồ Chí Minh', 'namele12', 'Nle123456', 2000000, 705692141, 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', 1),
(2000003, 'Chi', 'Võ', '2002-06-23', 'Female', 'nhusyhoang683@gmail.com', 'Xã Đăk R\'Moan, Thị xã Gia Nghĩa, Đắc Nông', 'nhusyhoang683', 'nhusyhoang683', 2000000, 918597213, 'https://www.w3schools.com/howto/img_avatar.png', 1),
(2000004, 'Giang', 'Trương', '2002-05-30', 'Female', 'giangngocnu24@naver.com', 'Xã Vĩnh Lộc, Huyện Can Lộc, Hà Tĩnh', 'giangngocnu24', 'Giangnu24', 2000000, 918597211, 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', 3),
(2000005, 'Kỳ', 'Bạch', '1999-12-02', 'Male', 'bachcaoky20@microsoft.com', 'Xã Đồng Than, Huyện Yên Mỹ, Hưng Yên', 'bachcaoky20', 'baChcaoky20', 2000000, 918597218, 'https://www.w3schools.com/howto/img_avatar.png', 1),
(2000006, 'Ðạt', 'Huỳnh', '1996-01-11', 'Male', 'huynhhuuat984@microsoft.com', 'Phường Đức Xuân, Thành Phố Bắc Kạn, Bắc cạn', 'huynhhuuat984', 'huynhHuuat984', 2000000, 918597242, 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', 1),
(2000007, 'Dung', 'Đoàn', '1999-12-09', 'Female', 'doanphuongdung916@hotmail.com', 'Xã Nguyễn Úy, Huyện Kim Bảng, Hà Nam', 'doanphuongdung916', 'doAnphuongdung916', 2000000, 9185979876, 'https://www.w3schools.com/howto/img_avatar.png', 1),
(2000008, 'Phát', 'Công', '1999-12-15', 'Male', 'conghongphat699@hotmail.com', 'Xã Ngổ Luông, Huyện Tân Lạc, Hoà Bình', 'conghongphat699', 'conghongPhat699', 2000000, 918593529, 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', 2),
(2000009, 'Anh', 'Thịnh', '2001-06-12', 'Female', 'thinhhuyenanh330@facebook.com', 'Xã Tân Thắng, Huyện Hàm Tân, Bình Thuận', 'thinhhuyenanh330', 'thinhhUyenanh330', 2000000, 912197213, 'https://www.w3schools.com/howto/img_avatar.png', 2),
(2000010, 'Lộc', 'Dương', '2000-06-10', 'Male', 'duongloc912@gmail.com', '53 Cao Thắng, quận 3, thành phố Hồ Chí Minh', 'duongloc912', 'duoNgloc912', 2000000, 89, 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `ID` int(11) NOT NULL,
  `ClientID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Content` text NOT NULL,
  `Time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`ID`, `ClientID`, `ProductID`, `Content`, `Time`) VALUES
(5000001, 2000001, 3200001, 'Sản phẩm khá ổn so với mức giá', '2023-04-09 00:35:57'),
(5000002, 2000002, 3100001, 'Sản phẩm khá tệ so với mức giá bỏ ra', '2023-04-09 00:02:57'),
(5000003, 2000009, 3200002, 'Giao hàng hơi chậm', '2023-04-09 03:23:28'),
(5000004, 2000004, 3200001, 'Sản phẩm tương đối tốt', '2023-04-09 08:16:57'),
(5000005, 2000003, 3200003, 'Trải nghiệm đặt hàng rất tốt', '2023-04-09 15:11:57'),
(5000006, 2000008, 3100001, 'Hàng nhận bị lỗi nhưng shop đổi trả khá nhanh', '2023-04-12 00:00:00'),
(5000007, 2000002, 3200001, 'Sản phẩm ổn so với mức giá', '2023-04-09 00:35:57'),
(5000008, 2000004, 3100003, 'Giá thành hợp lý', '2021-01-03 14:43:09');

-- --------------------------------------------------------

--
-- Table structure for table `contactinfor`
--

CREATE TABLE `contactinfor` (
  `ID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Address` text NOT NULL,
  `Email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactinfor`
--

INSERT INTO `contactinfor` (`ID`, `Name`, `Address`, `Email`) VALUES
(100001, 'E-commerce Website', '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh', 'ecommerceweb@gmail.com'),
(100002, 'E-commerce Website', 'Cơ sở Dĩ An – Khu đô thị Đại học Quốc Gia TP. HCM, Quận Thủ Đức, TP. HCM', 'ecommerceweb2@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `contactlinklist`
--

CREATE TABLE `contactlinklist` (
  `ID` int(11) NOT NULL,
  `Image` text NOT NULL,
  `Link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactlinklist`
--

INSERT INTO `contactlinklist` (`ID`, `Image`, `Link`) VALUES
(100001, 'https://upload.wikimedia.org/wikipedia/commons/f/f0/HCMCUT.svg', 'https://github.com/kieukhanhquan/e-commerce-web-react'),
(100002, 'https://upload.wikimedia.org/wikipedia/commons/f/f0/HCMCUT.svg', 'https://github.com/kieukhanhquan/e-commerce-web-react');

-- --------------------------------------------------------

--
-- Table structure for table `intro`
--

CREATE TABLE `intro` (
  `ID` int(11) NOT NULL,
  `CoverImage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `intro`
--

INSERT INTO `intro` (`ID`, `CoverImage`) VALUES
(200001, 'https://images.macrumors.com/t/sbUxECDfHO8XZNaHjm-H1VEJ_lQ=/x/smart/article-new/2020/10/iphone-13-color-lineup.jpg'),
(200002, 'https://vnmedia.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/8a10a0d36d961641016dec2545b07848/062022/1206_-_galaxy_s22_ultra_20220612122709.jpg'),
(200003, 'https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/laptop/laptop-1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `introlinklist`
--

CREATE TABLE `introlinklist` (
  `ID` int(11) NOT NULL,
  `Title` text NOT NULL,
  `Description` text NOT NULL,
  `Image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `introlinklist`
--

INSERT INTO `introlinklist` (`ID`, `Title`, `Description`, `Image`) VALUES
(200001, 'Chính thức! Apple xác nhận cho ra mắt iPhone 14 vào ngày 7/9', 'Apple vừa thông báo sự kiện ra mắt dòng iPhone 14 cùng thế hệ đồng hồ thông minh Apple Watch Series 8. Thời gian được ấn định là vào lúc 10h ngày 7 tháng 9, tức 0h ngày 8 tháng 9 theo giờ Việt Nam. Đây là sự kiện được dự đoán sẽ có sự góp mặt của 4 phiên bản iPhone 14 với những cải tiến mới về thiết kế, không còn tai thỏ và camera có nhiều nâng cấp.', 'https://cdn.nguyenkimmall.com/images/companies/_1/Content/Blog/dien-thoai/iphone-14/iphone-14-chinh-thuc-ra-mat-h6.jpg'),
(200002, 'Samsung sắp ra mắt điện thoại mới 2023 đáng chú ý', 'Tiếp nối thành công của năm 2022, Samsung sắp ra mắt điện thoại mới 2023 với những dòng smartphone mới với thiết kế sang trọng và cấu hình ấn tượng. Hãy cùng khám phá chi tiết các mẫu điện thoại Samsung sắp ra mắt năm 2023 dưới đây!', 'https://news.khangz.com/wp-content/uploads/2023/03/samsung-sap-ra-mat-dien-thoai-moi-2023-1.jpg'),
(200003, 'Apple ra mắt bộ đôi MacBook Pro mới', 'Apple vừa giới thiệu hai mẫu MacBook Pro 2023 mới nhất của mình đi kèm chip xử lý “cây nhà lá vườn” Apple M2 Pro hoặc M2 Max, với hứa hẹn cho hiệu suất ấn tượng.', 'https://images2.thanhnien.vn/Uploaded/nthanhluan/2023_01_18/1-8449.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `keysearch`
--

CREATE TABLE `keysearch` (
  `ID` int(11) NOT NULL,
  `Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `keysearch`
--

INSERT INTO `keysearch` (`ID`, `Name`) VALUES
(300001, 'maytinh'),
(300002, 'dienthoai'),
(300003, 'phukien'),
(300004, 'tainghe'),
(300005, 'chuot');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `ID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Type` text NOT NULL,
  `Author` text NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`ID`, `Name`, `Type`, `Author`, `Description`) VALUES
(7000001, 'Google Chrome 113 chuẩn bị đón một công nghệ mới, mở ra \"bầu trời mới cho đồ họa web\"', 'Công nghệ', 'Nguyễn Hải', '<h1 style=\"text-align:center\"><strong>Google Chrome 113 chuẩn bị đ&oacute;n một c&ocirc;ng nghệ mới, mở ra &quot;bầu trời mới cho đồ họa web&quot;</strong></h1>\r\n\r\n<p>Sau nhiều năm ph&aacute;t triển, một API đồ họa web mới c&oacute; t&ecirc;n gọi WebGPU sắp xuất hiện tr&ecirc;n Chrome v&agrave; c&aacute;c tr&igrave;nh duyệt kh&aacute;c, d&agrave;nh cho cả nền tảng desktop v&agrave; mobile.</p>\r\n\r\n<p>So với thế hệ đồ họa web ng&agrave;y nay (API WebGL), WebGPU sẽ cho ph&eacute;p c&aacute;c nh&agrave; ph&aacute;t triển v&agrave; c&aacute;c ứng dụng truy cập được v&agrave;o &quot;c&aacute;c t&iacute;nh năng GPU ti&ecirc;n tiến hơn v&agrave; cung cấp sự hỗ trợ h&agrave;ng đầu cho c&aacute;c t&iacute;nh to&aacute;n chung tr&ecirc;n GPU&quot;. Hỗ trợ cho việc t&iacute;nh to&aacute;n tr&ecirc;n GPU sẽ cho ph&eacute;p c&aacute;c t&aacute;c vụ suy luận d&ugrave;ng m&ocirc; h&igrave;nh m&aacute;y học sẽ được tăng tốc gấp 3 lần so với tr&igrave;nh duyệt trước đ&acirc;y.</p>\r\n\r\n<p>Một v&iacute; dụ của điều n&agrave;y l&agrave; ứng dụng chat Google Meet sử dụng m&aacute;y học để ph&acirc;n chia người d&ugrave;ng với phần background của tr&igrave;nh duyệt. Sử dụng m&ocirc; h&igrave;nh m&aacute;y học bằng WebGPU sẽ gi&uacute;p t&aacute;c vụ n&agrave;y diễn ra nhanh hơn v&agrave; hiệu quả năng lượng hơn, mang lại c&aacute;c t&iacute;nh năng n&agrave;y đến những thiết bị gi&aacute; rẻ hơn v&agrave; phổ biến hơn với người d&ugrave;ng, cũng như cho ph&eacute;p vận h&agrave;nh được c&aacute;c m&ocirc; h&igrave;nh phức tạp hơn, nặng nề hơn.</p>\r\n\r\n<p><b>Bước tiến đột ph&aacute; về đồ họa cho gaming tr&ecirc;n tr&igrave;nh duyệt</b></p>\r\n\r\n<p>Đối với khả năng render, Google ca ngợi t&iacute;nh năng mới n&agrave;y sẽ mang lại &quot;c&aacute;c lợi &iacute;ch to lớn như giảm đ&aacute;ng kể tải c&ocirc;ng việc JavaScript đối với c&ugrave;ng t&aacute;c vụ đồ họa. Việc cho ph&eacute;p ứng dụng tr&igrave;nh duyệt truy cập trực tiếp v&agrave;o card đồ họa của thiết bị cũng mang lại c&aacute;c lợi &iacute;ch kh&aacute;c bao gồm:</p>\r\n\r\n<p>- Cải thiện c&aacute;c thư viện Javascript 3D hiện tại, như Babylon.js v&agrave; Three.js với c&aacute;c kỹ thuật render mới (c&aacute;c hạt dựa tr&ecirc;n t&iacute;nh to&aacute;n, xử l&yacute; hậu kỳ lung linh hơn, &hellip;) v&agrave; giảm tải cho GPU c&aacute;c t&iacute;nh to&aacute;n nặng nề hiện được thực hiện tr&ecirc;n CPU (chuyển đổi m&ocirc; h&igrave;nh c&oacute; da, &hellip;).</p>\r\n\r\n<p><img alt=\"Google Chrome 113 chuẩn bị đón một công nghệ mới, mở ra &amp;quot;bầu trời mới cho đồ họa web&amp;quot; - Ảnh 2.\" src=\"https://genk.mediacdn.vn/139269124445442048/2023/4/9/screenshot20230406at163428-1681004295927-16810042960311146147059-1681013142133-16810131422651914012576.png\" /></p>\r\n\r\n<p>- Chuyển đổi c&aacute;c engine game mới sang Web v&agrave; cho ph&eacute;p c&aacute;c engine c&oacute; được c&aacute;c t&iacute;nh năng hiển thị mới ti&ecirc;n tiến hơn. V&iacute; dụ xuất h&igrave;nh ảnh bằng WebGL của Unity chỉ sử dụng được c&aacute;c t&iacute;nh năng thấp nhất của engine, nhưng với WebGPU, tr&igrave;nh duyệt sẽ khai th&aacute;c được bộ t&iacute;nh năng cao cấp hơn.</p>\r\n\r\n<p>-&nbsp;Chuyển đổi c&aacute;c lớp ứng dụng mới l&ecirc;n Web: nhiều ứng dụng năng suất hiện đang giảm tải t&iacute;nh to&aacute;n cho GPU v&agrave; cần sự hỗ trợ của WebGPU cho c&aacute;c ph&eacute;p t&iacute;nh to&aacute;n chung.</p>\r\n\r\n<p>C&aacute;c cải thiện n&agrave;y cũng c&oacute; nghĩa người d&ugrave;ng c&oacute; thể sẽ c&oacute; được trải nghiệm chơi game đồ họa cao cấp ngay tr&ecirc;n tr&igrave;nh duyệt của m&igrave;nh, khi c&aacute;c nh&agrave; ph&aacute;t triển c&oacute; c&ocirc;ng cụ để tạo n&ecirc;n c&aacute;c h&igrave;nh ảnh được hiển thị đẹp hơn ngay tr&ecirc;n tr&igrave;nh duyệt.&nbsp;</p>\r\n\r\n<p>Một mục ti&ecirc;u l&agrave; &quot;l&agrave;m cho c&aacute;c ứng dụng hoạt động ổn định tr&ecirc;n nhiều hệ thống của người d&ugrave;ng v&agrave; tr&igrave;nh duyệt kh&aacute;c nhau.&quot; Đầu ti&ecirc;n t&iacute;nh năng n&agrave;y sẽ c&oacute; mặt tr&ecirc;n Chrome 113 (hiện đang ở giai đoạn beta, sẽ chuyển sang giai đoạn stable trong th&aacute;ng n&agrave;y) tr&ecirc;n Mac, c&aacute;c thiết bị Windows hỗ trợ Direct3D 12 v&agrave; c&aacute;c thiết bị ChromeOS hỗ trợ Vulkan. Sau đ&oacute; n&oacute; cũng sẽ xuất hiện tr&ecirc;n Android v&agrave; Linux, trong khi Safari v&agrave; Firefox cũng đang l&ecirc;n kế hoạch hỗ trợ t&iacute;nh năng n&agrave;y.</p>\r\n\r\n<p>WebGPU đ&atilde; được ph&aacute;t triển từ năm 2017 với sự đ&oacute;ng g&oacute;p của Mozilla, Apple, Intel v&agrave; Microsoft. Bản ph&aacute;t h&agrave;nh đầu ti&ecirc;n của WebGPU sẽ đ&oacute;ng vai tr&ograve; l&agrave; một phần trong c&aacute;c bản cập nhật v&agrave; cải thiện trong tương lai.</p>\r\n\r\n<p>Từ c&aacute;c ứng dụng web PWA cho đến WebAssembly, Google vẫn lu&ocirc;n l&agrave; người lĩnh xướng quan trọng để mang lại một thế hệ web mạnh mẽ hơn v&agrave; WebGPU tiếp tục nỗ lực n&agrave;y của họ.</p>\r\n\r\n<p>&nbsp;</p>'),
(7000002, 'Cuộc đua \'nhìn ban đêm\' trên camera điện thoại', 'Đời sống', 'Bảo Lâm', '<h1 style=\"text-align: center;\"><strong>Cuộc đua &#39;nh&igrave;n ban đ&ecirc;m&#39; tr&ecirc;n camera điện thoại</strong></h1>\r\n\r\n<p>Apple, Samsung, Google v&agrave; nhiều h&atilde;ng kh&aacute;c chạy đua cải thiện t&iacute;nh năng chụp đ&ecirc;m tr&ecirc;n smartphone trong bối cảnh c&aacute;c th&ocirc;ng số kh&aacute;c dần b&atilde;o h&ograve;a.</p>\r\n\r\n<article>\r\n<p>Th&ocirc;ng số m&aacute;y ảnh đang được xem l&agrave; &quot;yếu tố b&aacute;n h&agrave;ng quan trọng&quot; khi m&agrave; cuộc đua về cấu h&igrave;nh kh&ocirc;ng c&ograve;n hấp dẫn. Trong số đ&oacute;, chụp đ&ecirc;m được ch&uacute; trọng hơn cả nhờ t&iacute;nh thiết thực của n&oacute;.</p>\r\n\r\n<p>Đầu th&aacute;ng 4, Google giới thiệu bản cải tiến chế độ Night Sight tr&ecirc;n smartphone Pixel, sử dụng thuật to&aacute;n AI l&agrave;m s&aacute;ng h&igrave;nh ảnh trong m&ocirc;i trường tối. Trong khi đ&oacute;, Night Mode c&oacute; từ iPhone 11 cũng li&ecirc;n tục được Apple n&acirc;ng cấp theo thời gian. C&aacute;c h&atilde;ng Samsung, Huawei, Oppo cũng c&oacute; c&ocirc;ng nghệ chụp đ&ecirc;m ri&ecirc;ng v&agrave; được đ&aacute;nh gi&aacute; cao.</p>\r\n\r\n<figure data-size=\"true\" itemprop=\"associatedMedia image\" itemscope=\"\" itemtype=\"http://schema.org/ImageObject\"><img alt=\"Một bức ảnh được chụp bởi Google Pixel 5. Ảnh: CNN\" data-ll-status=\"loaded\" data-src=\"https://i1-sohoa.vnecdn.net/2023/04/07/230330170129-01-smartphone-nig-9691-4099-1680801110.png?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=fHRED0c91dgULHOTuL1kKg\" intrinsicsize=\"680x0\" itemprop=\"contentUrl\" loading=\"lazy\" src=\"https://i1-sohoa.vnecdn.net/2023/04/07/230330170129-01-smartphone-nig-9691-4099-1680801110.png?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=fHRED0c91dgULHOTuL1kKg\" />\r\n<figcaption itemprop=\"description\">\r\n<p>Một bức ảnh được chụp bởi Google Pixel 5. Ảnh:&nbsp;<em>CNN</em></p>\r\n</figcaption>\r\n</figure>\r\n\r\n<p>Theo giới chuy&ecirc;n gia, t&iacute;nh năng chụp thiếu s&aacute;ng tr&ecirc;n smartphone đ&atilde; trải qua một chặng đường d&agrave;i, nhưng đột ph&aacute; chỉ mới xuất hiện gần đ&acirc;y nhờ tiến bộ đ&aacute;ng kể về AI gi&uacute;p qu&aacute; tr&igrave;nh xử l&yacute; h&igrave;nh ảnh tốt hơn. Ảnh đ&atilde; trở n&ecirc;n sắc n&eacute;t, kh&ocirc;ng c&ograve;n bị nhiễu nhiều, tốc độ chụp nhanh v&agrave; linh hoạt hơn trong nhiều t&igrave;nh huống thử th&aacute;ch.</p>\r\n\r\n<p>&quot;Người d&ugrave;ng ng&agrave;y c&agrave;ng c&oacute; th&oacute;i quen sử dụng smartphone chụp ảnh, quay video v&agrave; tạo nội dung. Điều n&agrave;y sẽ th&uacute;c đẩy c&aacute;c h&atilde;ng điện thoại n&acirc;ng cấp camera, đặc biệt l&agrave; khả năng xử l&yacute; ảnh v&agrave; video ở nhiều m&ocirc;i trường, cũng như tăng cường ch&uacute;ng bằng AI&quot;, Lian Jye Su, nh&agrave; ph&acirc;n t&iacute;ch về tr&iacute; tuệ nh&acirc;n tạo tại ABI Research, n&oacute;i.</p>\r\n\r\n<p><strong>Nỗ lực của c&aacute;c h&atilde;ng smartphone</strong></p>\r\n\r\n<p>Đối với khả năng chụp đ&ecirc;m, yếu tố được c&aacute;c h&atilde;ng tập trung nhiều nhất l&agrave; xử l&yacute; nhiễu. Điều kiện &aacute;nh s&aacute;ng k&eacute;m, thời gian phơi s&aacute;ng l&acirc;u v&agrave; một số yếu tố kh&aacute;c c&oacute; thể l&agrave;m giảm chất lượng của h&igrave;nh ảnh.</p>\r\n\r\n<p>Samsung l&agrave; một trong những nh&agrave; sản xuất đi đầu trong việc cải thiện khả năng chụp đ&ecirc;m tr&ecirc;n điện thoại. C&aacute;c mẫu Galaxy được trang bị hệ thống ống k&iacute;nh độ ph&acirc;n giải cao, kết hợp Night Mode cho ph&eacute;p điện thoại chụp r&otilde; n&eacute;t trong điều kiện trời tối.</p>\r\n\r\n<p>Tr&ecirc;n Galaxy S23 mới nhất, Samsung cho biết b&iacute; quyết để giảm nhiễu l&agrave; kết hợp giữa cảm biến 200 megapixel với thuật to&aacute;n gộp ảnh. Khi người d&ugrave;ng nhấn n&uacute;t chụp, AI d&ugrave;ng c&ocirc;ng nghệ xử l&yacute; đa khung n&acirc;ng cao để kết hợp nhiều ảnh th&agrave;nh một ảnh duy nhất v&agrave; tinh chỉnh nếu cần.</p>\r\n\r\n<p>&quot;Khi chụp thiếu s&aacute;ng, bộ xử l&yacute; v&agrave; AI sẽ loại bỏ nhiễu, tự động nhận biết c&aacute;c chi tiết cần giữ lại v&agrave; những g&igrave; sẽ loại bỏ&quot;, Joshua Cho, Ph&oacute; chủ tịch nh&oacute;m Giải ph&aacute;p h&igrave;nh ảnh của Samsung, giải th&iacute;ch.</p>\r\n\r\n<p>Cũng theo Cho, AI của Samsung được đ&agrave;o tạo từ &quot;một lượng lớn h&igrave;nh ảnh được gi&aacute;m s&aacute;t bởi chuy&ecirc;n gia&quot;. AI sẽ học c&aacute;c th&ocirc;ng số để điều chỉnh cho mỗi bức ảnh được chụp trong điều kiện &aacute;nh s&aacute;ng yếu. Thuật to&aacute;n sẽ x&aacute;c định mức phơi s&aacute;ng ph&ugrave; hợp, bảng m&agrave;u v&agrave; chi tiết kh&aacute;c trong c&aacute;c điều kiện &aacute;nh s&aacute;ng nhất định, sau đ&oacute; l&agrave;m sắc n&eacute;t khu&ocirc;n mặt hoặc c&aacute;c chủ thể kh&aacute;c.</p>\r\n\r\n<p>D&ugrave; vậy, một số chuy&ecirc;n gia đ&atilde; thử nghiệm smartphone Samsung nhận x&eacute;t kết quả cuối c&ugrave;ng khi chụp đ&ecirc;m &quot;c&oacute; thể kh&aacute;c so với ảnh chụp ban đầu&quot;, như bị mất chi tiết, bị mờ hoặc được &quot;t&aacute;i tạo một c&aacute;ch giả tạo&quot;. Đ&acirc;y cũng được xem l&agrave; điểm yếu tr&ecirc;n điện thoại Samsung, kể cả l&agrave; thiết bị cao cấp nhất.</p>\r\n\r\n<figure data-size=\"true\" itemprop=\"associatedMedia image\" itemscope=\"\" itemtype=\"http://schema.org/ImageObject\"><img alt=\"Tính năng chụp đêm trên một mẫu smartphone Oppo. Ảnh: Techoffside\" data-ll-status=\"loaded\" data-src=\"https://i1-sohoa.vnecdn.net/2023/04/07/04-OPPO-Find-X5-Pro-5G-launch-2236-1680801110.png?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=1X-IFIv3FAGFFqf_RXuw7A\" intrinsicsize=\"680x0\" itemprop=\"contentUrl\" loading=\"lazy\" src=\"https://i1-sohoa.vnecdn.net/2023/04/07/04-OPPO-Find-X5-Pro-5G-launch-2236-1680801110.png?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=1X-IFIv3FAGFFqf_RXuw7A\" />\r\n<figcaption itemprop=\"description\">\r\n<p>T&iacute;nh năng chụp đ&ecirc;m tr&ecirc;n một mẫu smartphone Oppo. Ảnh:&nbsp;<em>Techoffside</em></p>\r\n</figcaption>\r\n</figure>\r\n\r\n<p>Google hiện cũng tập trung v&agrave;o giảm nhiễu khi chụp ảnh trong m&ocirc;i trường thiếu s&aacute;ng với Night Sight. T&iacute;nh năng n&agrave;y sử dụng AI để ghi lại một loạt khung h&igrave;nh được phơi s&aacute;ng l&acirc;u hơn, sau đ&oacute; kết hợp HDR+ Bracketing gộp những h&igrave;nh ảnh n&agrave;y lại. &quot;Kết quả l&agrave; ảnh chụp sẽ c&oacute; độ s&aacute;ng v&agrave; độ chi tiết đến kh&oacute; tin&quot;, Alex Schiffhauer, Gi&aacute;m đốc sản phẩm của Google, n&oacute;i.</p>\r\n\r\n<p>Nhưng Night Sight cũng c&oacute; nhược điểm. Theo Schiffhauer, tốc độ chụp v&agrave; xử l&yacute; chậm khiến người d&ugrave;ng kh&oacute; &quot;bấm ph&aacute;t ăn ngay&quot; v&agrave; Google đang tăng tốc qu&aacute; tr&igrave;nh. &quot;Ch&uacute;ng t&ocirc;i muốn người d&ugrave;ng Pixel trong tương lai kh&ocirc;ng cần đứng y&ecirc;n v&agrave;i gi&acirc;y m&agrave; vẫn c&oacute; ảnh thiếu s&aacute;ng đẹp&quot;, &ocirc;ng n&oacute;i.</p>\r\n\r\n<p>Apple được cho l&agrave; đang ph&aacute;t triển khả năng chụp thi&ecirc;n văn cho iPhone. C&ograve;n trong những thế hệ gần đ&acirc;y, nhất l&agrave; tr&ecirc;n iPhone 14 Pro Max, người d&ugrave;ng cũng đ&atilde; c&oacute; thể ghi lại ảnh bầu trời hoặc cảnh đ&ecirc;m với độ s&aacute;ng v&agrave; độ chi tiết cao. T&iacute;nh năng Night Mode c&oacute; thể tự ph&aacute;t hiện nơi c&oacute; &aacute;nh s&aacute;ng yếu để tối ưu v&agrave; đẩy độ s&aacute;ng l&ecirc;n cao hơn. D&ugrave; vậy, khả năng chụp đ&ecirc;m tr&ecirc;n iPhone c&ograve;n kh&aacute; hạn chế khi so s&aacute;nh với c&aacute;c mẫu Android đầu bảng kh&aacute;c.</p>\r\n\r\n<p><strong>Điểm yếu của camera điện thoại</strong></p>\r\n\r\n<p>Hầu hết camera tr&ecirc;n smartphone hiện nay đều được quảng c&aacute;o với yếu tố AI đi k&egrave;m. Nh&agrave; ph&acirc;n t&iacute;ch Bill Ray của Gartner cho rằng AI c&oacute; thể tạo ra sự kh&aacute;c biệt trong h&igrave;nh ảnh, nhưng kết quả cuối c&ugrave;ng vẫn phụ thuộc v&agrave;o ống k&iacute;nh.</p>\r\n\r\n<p>Thực tế, so với m&aacute;y ảnh chuy&ecirc;n dụng, camera điện thoại k&eacute;m hơn hẳn khi chụp đ&ecirc;m. Nếu như ống k&iacute;nh m&aacute;y ảnh c&aacute;ch cảm biến v&agrave;i cm, ống k&iacute;nh điện thoại bị &quot;&eacute;p&quot; gần nhau hơn rất nhiều, dẫn đến độ s&acirc;u trường ảnh n&ocirc;ng hơn v&agrave; giảm chất lượng, đặc biệt trong m&ocirc;i trường tối.</p>\r\n\r\n<p>&quot;Chất lượng ống k&iacute;nh vẫn l&agrave; một vấn đề lớn m&agrave; c&aacute;c nh&agrave; sản xuất smartphone cần giải quyết&quot;, Ray n&oacute;i.</p>\r\n\r\n<p>Trong khi đ&oacute;, &ocirc;ng Su của ABI Research cho rằng c&aacute;c m&ocirc; h&igrave;nh AI tổng qu&aacute;t như ChatGPT c&oacute; thể tăng khả năng chụp đ&ecirc;m cho smartphone. &quot;AI tổng qu&aacute;t hiện đ&atilde; được sử dụng cho chỉnh sửa ảnh chất lượng cao như x&oacute;a hoặc thay thế nền&quot;, &ocirc;ng n&oacute;i. &quot;Nếu c&ocirc;ng nghệ n&agrave;y được th&ecirc;m v&agrave;o hệ thống camera tr&ecirc;n smartphone, chế độ chụp đ&ecirc;m tr&ecirc;n thiết bị di động sẽ trở n&ecirc;n mạnh mẽ hơn nhiều so với hiện tại&quot;.</p>\r\n</article>\r\n\r\n<p>&nbsp;</p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `orderp`
--

CREATE TABLE `orderp` (
  `ID` int(11) NOT NULL,
  `AdminID` int(11) NOT NULL,
  `CientID` int(11) NOT NULL,
  `Address` text NOT NULL,
  `PayType` text NOT NULL,
  `OrderFee` double NOT NULL,
  `OrderState` text NOT NULL,
  `OrderShip` double NOT NULL,
  `TimeConfirm` date NOT NULL,
  `TimeCreate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderp`
--

INSERT INTO `orderp` (`ID`, `AdminID`, `CientID`, `Address`, `PayType`, `OrderFee`, `OrderState`, `OrderShip`, `TimeConfirm`, `TimeCreate`) VALUES
(6000001, 1000001, 2000001, '193 Cô Giang, quận 1, thành phố Hồ Chí Minh', 'Thanh toán online', 2500000, 'Pending', 15000, '2023-04-09', '2023-04-03'),
(6000002, 1000002, 2000002, '46A Đinh Công Tráng, phường Tân Định, quận 1, thành phố Hồ Chí Minh', 'Thanh toán khi nhận hàng', 27000000, 'Processing', 30000, '2023-04-08', '2023-04-02'),
(6000003, 1000003, 2000003, 'Xã Đăk R\'Moan, Thị xã Gia Nghĩa, Đắc Nông', 'Thanh toán khi nhận hàng', 26000000, 'Complete', 25000, '2023-04-09', '2023-04-01');

-- --------------------------------------------------------

--
-- Table structure for table `possess`
--

CREATE TABLE `possess` (
  `ProductID` int(11) NOT NULL,
  `CartID` int(11) NOT NULL,
  `ClientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `possess`
--

INSERT INTO `possess` (`ProductID`, `CartID`, `ClientID`) VALUES
(3200005, 4000001, 2000001),
(3200004, 4000002, 2000002),
(3100001, 4000002, 2000002),
(3000004, 4000003, 2000003),
(3200003, 4000003, 2000003);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Type` text NOT NULL,
  `Description` text NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Company` text NOT NULL,
  `Image` text NOT NULL,
  `Price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `Name`, `Type`, `Description`, `Quantity`, `Company`, `Image`, `Price`) VALUES
(3000001, 'Dell Vostro V3510', 'Máy tính', 'Dell Vostro 3510 là phiên bản laptop doanh nhân 15,6 inch mới nhất từ Dell, với thiết kế gọn gàng thanh thoát và hiện đại, đồng thời hiệu suất được nâng cấp đáng kể nhờ bộ vi xử lý Intel Core i5 thế hệ thứ 11 cùng card đồ họa rời NVIDIA MX350, giúp cho công việc của bạn luôn hoạt động hiệu quả và an toàn.', 25, 'Dell', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/dell-vostro-3510-1.jpg', 15000000),
(3000002, 'Dell Inspiron 15', 'Máy tính', 'Dell Inspiron N3520 là chiếc laptop lý tưởng cho công việc hàng ngày. Bộ vi xử lý Intel Core i5 thế hệ thứ 12 hiệu suất cao, màn hình lớn 15,6 inch Full HD 120Hz mượt mà, thiết kế bền bỉ sẽ giúp bạn giải quyết công việc nhanh chóng mọi lúc mọi nơi.', 25, 'Dell', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/0511/Dell-Inspiron-N3520-fpt-1.jpg', 16000000),
(3000003, 'Asus TUF Gaming', 'Máy tính', 'Asus TUF Gaming F15 FX506LHB-HN188W là chiếc laptop gaming giá rẻ với thiết kế tuyệt đẹp, phong cách chuẩn game thủ và cấu hình mạnh mẽ cho cả học tập, công việc cũng như chơi game. Bên cạnh đó là độ bền chuẩn quân đội đã làm nên tên tuổi của dòng TUF.', 25, 'Asus', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/0511/ASUS-TUF-Gaming-F15-2021-black-fpt-3.jpg', 20000000),
(3000004, 'MSI GF63 Thin', 'Máy tính', 'MSI GF63 Thin 11UC 444VN là bản nâng cấp tuyệt vời của dòng laptop chơi game nhỏ gọn GF 63 Thin. Vẫn với một thiết kế mỏng nhẹ nhưng bộ vi xử lý Intel thế hệ thứ 11 cùng card đồ họa RTX 30 series sẽ mang tới một sức mạnh hoàn toàn mới, cho bạn làm chủ mọi cuộc chơi.', 25, 'MSI', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/msi-gf63-thin-9.jpg', 22000000),
(3000005, 'Macbook Air M1', 'Máy tính', 'Chiếc MacBook Air có hiệu năng đột phá nhất từ trước đến nay đã xuất hiện. Bộ vi xử lý Apple M1 hoàn toàn mới đưa sức mạnh của MacBook Air M1 13 inch 2020 vượt xa khỏi mong đợi người dùng, có thể chạy được những tác vụ nặng và thời lượng pin đáng kinh ngạc.', 25, 'Apple', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-air-m1-1.jpg', 22000000),
(3100001, 'Samsung Galaxy S23 Ultra 5G 256GB', 'Điện thoại', 'Tự hào là điện thoại Galaxy đầu tiên sở hữu cảm biến tuyệt đỉnh 200MP, Samsung Galaxy S23 Ultra đưa người dùng vào không gian nhiếp ảnh tân tiến vượt trội. Sức mạnh còn bùng nổ với vi xử lý Snapdragon mạnh nhất cho cách mạng hiệu năng gaming đột phá. Tất cả được gói gọn trong thiết kế cao cấp và bền vững cho hiện tại và tương lai.', 20, 'Samsung', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/02/Samsung-Galaxy-S23-Ultra-1(1).jpg', 25000000),
(3100002, 'iPhone 11 64GB', 'Điện thoại', 'iPhone 11 với 6 phiên bản màu sắc, camera có khả năng chụp ảnh vượt trội, thời lượng pin cực dài và bộ vi xử lý mạnh nhất từ trước đến nay sẽ mang đến trải nghiệm tuyệt vời dành cho bạn.\n\n', 29, 'Apple', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg', 11000000),
(3100003, 'OPPO Reno8 T 5G', 'Điện thoại', 'Trọn vẹn từng trải nghiệm trên OPPO Reno8 T 5G với nâng cấp toàn diện từ thế hệ chân dung 108MP, màn hình cong 120Hz tuyệt đẹp đến sạc nhanh Super VOOCTM 67W. Bạn sẽ bất ngờ với những gì OPPO Reno8 T 5G mang đến – một siêu phẩm trong tầm giá.', 25, 'Oppo', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/02/Thiet-ke-OPPO-Reno8T-5G.jpg', 9000000),
(3100004, 'iPhone 12 64GB', 'Điện thoại', 'iPhone 12 ra mắt với vai trò mở ra một kỷ nguyên hoàn toàn mới. Tốc độ mạng 5G siêu tốc, bộ vi xử lý A14 Bionic nhanh nhất thế giới smartphone, màn hình OLED tràn cạnh tuyệt đẹp và camera siêu chụp đêm, tất cả đều có mặt trên iPhone 12.', 25, 'Apple', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/dell-vostro-3510-1.jpg', 15000000),
(3100005, 'Xiaomi 13 Lite', 'Điện thoại', 'Sở hữu một con chip mới mạnh mẽ, hệ thống camera kép ở mặt trước, màn hình sống động hay đơn giản hơn là thiết kế mỏng nhẹ ấn tượng, Xiaomi 13 Lite nhanh chóng chiếm trọn lòng tin người dùng. Với mức giá cực hấp dẫn khi đến tay người dùng, Xiaomi 13 Lite đáng đến từng xu bỏ ra và hứa hẹn sẽ mang về thành công cho thương hiệu đến từ quốc gia tỷ dân. ', 25, 'Xiaomi', 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/ThienNDDD/xiaomi-13-lite.jpg', 9000000),
(3200001, 'Pin sạc dự phòng Aukey Basix Slim', 'Phụ kiện', 'Với kích thước nhỏ gọn và dung lượng lên đến 10000mAh, pin sạc dự phòng Aukey Basix Slim PB-N99 10000mAh sẽ cho phép bạn sạc lại điện thoại thông minh hoặc máy tính bảng ở bất cứ nơi đâu.', 25, 'Aukey', 'https://fptshop.com.vn/Uploads/images/2015/VuTT29/Sac-du-phong-Aukey-N99-1000mAh-01.jpg', 400000),
(3200002, 'Tai nghe AirPods Pro 2022', 'Phụ kiện', 'Thế hệ AirPods Pro 2 được cải tiến nhằm chuyên nghiệp hóa trải nghiệm người dùng theo cách trọn vẹn hơn. Sự hiện diện của chip H2 giúp sản phẩm xử lý âm thanh xuất sắc, những nâng cấp về kỹ nghệ chống ồn, công nghệ xuyên âm và thời lượng pin cho cảm nhận vượt trội so với phiên bản AirPods Pro đầu tiên.', 25, 'Apple', 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/DuyLe/Vivo/Mo-ta-san-pham-airpods-pro-2-b.jpg', 6300000),
(3200003, 'Loa bluetooth JBL Charge 5', 'Phụ kiện', 'Đặc điểm nổi bật\nLoa bluetooth JBL Charge 5 sở hữu thiết kế hiện đại cùng khả năng chống nước và bụi theo chuẩn IP67. Với âm lượng lớn và chất âm vượt trội, sản phẩm sẽ giúp bạn dễ dàng có những không gian âm nhạc tuyệt vời bất cứ lúc nào.', 25, 'JBL', 'https://fptshop.com.vn/Uploads/images/2015/VuTT29/04-JBL-Charge-5-02.jpg', 4000000),
(3200004, 'Bàn phím Bluetooth Logitech K380', 'Phụ kiện', 'Không gian làm việc, học tập và giải trí của bạn sẽ trở nên tối giản và thanh lịch hơn với sự hiện diện của bàn phím bluetooth Logitech K380. Sản phẩm được thiết kế hướng tới trải nghiệm nhẹ nhàng nhất, linh hoạt nhất và tương thích với cả PC, smartphone hay tablet. Sự gọn gàng của Logitech K380 cho phép bạn mang theo bộ bàn phím này trong balo, túi xách để sử dụng ở bất cứ nơi đâu.', 25, 'Logitech', 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/BaoPK/A7(2016)/Ban-phim-bluetooth-logitech-k380-1.JPG', 1000000),
(3200005, 'Chuột Gaming Asus CERBERUS', 'Phụ kiện', 'Đến từ dòng sản phẩm Asus gaming rất được lòng giới đam mê Esport, chuột máy tính CERBERUS sở hữu thiết kế ấn tượng với những đường cắt xẻ hiện đại, thể hiện hiệu năng tốt khi vận hành và đặc biệt là có giá bán phải chăng. Ngoài ra, công tắc DPI bốn nấc và đèn LED tiện dụng sẽ khiến bạn hài lòng trong quá trình trải nghiệm sản phẩm.', 25, 'Asus', 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/2016/01/Chuot-game-asus-cerberus-1.JPG', 500000);

-- --------------------------------------------------------

--
-- Table structure for table `usev`
--

CREATE TABLE `usev` (
  `VoucherID` int(11) NOT NULL,
  `ClientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usev`
--

INSERT INTO `usev` (`VoucherID`, `ClientID`) VALUES
(8000001, 2000004),
(8000001, 2000008),
(8000001, 2000009),
(8000002, 2000004);

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--

CREATE TABLE `voucher` (
  `ID` int(11) NOT NULL,
  `Rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `voucher`
--

INSERT INTO `voucher` (`ID`, `Rate`) VALUES
(8000001, 15),
(8000002, 20),
(8000003, 25),
(8000004, 30);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `contactinfor`
--
ALTER TABLE `contactinfor`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `contactlinklist`
--
ALTER TABLE `contactlinklist`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `intro`
--
ALTER TABLE `intro`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `introlinklist`
--
ALTER TABLE `introlinklist`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `keysearch`
--
ALTER TABLE `keysearch`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `orderp`
--
ALTER TABLE `orderp`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `voucher`
--
ALTER TABLE `voucher`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000005;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4000004;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2000011;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5000009;

--
-- AUTO_INCREMENT for table `contactinfor`
--
ALTER TABLE `contactinfor`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100003;

--
-- AUTO_INCREMENT for table `contactlinklist`
--
ALTER TABLE `contactlinklist`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100003;

--
-- AUTO_INCREMENT for table `intro`
--
ALTER TABLE `intro`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200004;

--
-- AUTO_INCREMENT for table `introlinklist`
--
ALTER TABLE `introlinklist`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200004;

--
-- AUTO_INCREMENT for table `keysearch`
--
ALTER TABLE `keysearch`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=300006;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7000003;

--
-- AUTO_INCREMENT for table `orderp`
--
ALTER TABLE `orderp`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6000004;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3200012;

--
-- AUTO_INCREMENT for table `voucher`
--
ALTER TABLE `voucher`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8000005;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

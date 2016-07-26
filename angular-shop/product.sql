-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-07-25 06:00:19
-- 服务器版本： 10.0.17-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL COMMENT 'id标识',
  `name` varchar(50) NOT NULL COMMENT '商品名称',
  `description` varchar(300) NOT NULL COMMENT '商品描述',
  `category` varchar(30) NOT NULL COMMENT '分类',
  `price` int(10) NOT NULL DEFAULT '0' COMMENT '单价'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表';

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `category`, `price`) VALUES
(1, '乔丹篮球', '乔丹篮球水泥地耐磨防滑室内外通用七号篮球特价正品学生比赛用球。竞赛用篮球。', '篮球', 119),
(2, '斯伯丁篮球', '斯伯丁篮球室外 NBA篮球比赛用球 耐磨水泥地lanqiu74-414，买一送四 街头飓风 室外耐磨 标准7号篮球', '篮球', 169),
(3, '耐克篮球', '正品送配件耐克NIKE加厚纯牛皮乔丹签名NBA比赛CBA耐磨真皮篮球，抗菌，耐磨，牛皮。室内室外通用篮球，七号篮球(标准球)', '篮球', 188),
(4, '李宁篮球', '李宁篮球cba软pu皮手感好吸湿耐磨防滑比赛用球水泥地室内外包邮，正品李宁 真皮手感 CBA比赛球 防滑耐磨 掌控', '篮球', 235),
(5, 'WITESS篮球', 'WITESS室外篮球室内真皮手感篮球牛皮质感耐磨PU篮球耐磨lanqiu\r\n多彩中胎 磨砂皮革 送大礼包 质软 信心倍增', '篮球', 99),
(6, 'JCQ/百动篮球', '正品百动纯皮质感真皮手感水泥地耐磨室内室外水泥地篮球lanqiu 土豪级 尊贵篮球 原价1280 仅售 298元', '篮球', 298),
(7, 'BB－X SPECIAL/战舰', '战舰五号篮球 儿童青少年小学生幼儿园5号篮球 室内外水泥地耐磨 儿童用球 青少年 幼儿园 5号篮球 送打气筒', '篮球', 59),
(8, 'SIRDAR/萨达', '正品翻毛皮l篮球室外真皮牛皮质感7号萨达水泥地5五号儿童小学生 送豪华礼包 数量有限 丁基内胆 优质皮料', '篮球', 79),
(9, 'DHS/红双喜', '特价包邮正品红双喜篮球 耐磨吸汗吸湿室内室外比赛PU篮球7号球 红双喜篮球，全新产品体系，采用精选进口材料，升级丁基内胆，全新制作工艺。每一个球均经过严格检验，保证出色的耐磨性、防滑性、吸汗性、弹跳性、气密性和稳定性。', '篮球', 61),
(10, 'Wilson', 'Wilson篮球 威尔胜官方正品WB360 室外水泥地比赛耐磨防滑超软 超强耐磨 超软手感 送气筒气针 网兜 球包！', '篮球', 99),
(11, '李宁', '李宁足球 11人训练比赛用球成人5号机缝足球 PU防滑耐磨手缝足球', '足球', 79),
(12, 'adidas', 'adidas阿迪达斯足球 5号球欧冠zuqiu新款训练比赛正品欧洲杯足球 送打气筒 网兜 气针', '足球', 148),
(13, 'Disney', '正品迪士尼儿童足球 3号球 蜘蛛侠幼儿皮球宝宝幼儿园玩具球充气 活动中~ 高性价比 耐磨 蜘蛛侠炫酷 很软不伤脚', '足球', 42),
(14, 'PUMA/彪马', 'PUMA/彪马 TEAMSPORT evoPOWER 青年足球 082563 产地巴基斯坦', '足球', 129),
(15, '火车头', '火车头4号5号pu皮足球比赛成人男子大学生小孩儿童水泥地耐磨真软【送：1个加粗网兜】 +【送：2个不锈钢球针】+【送1个气筒】因为正品，因为优质，所以敢于保证： 3个月内有任何质量问题，免费维修，修不好换新！', '足球', 119),
(16, 'DHS/红双喜', '六星乒乓球拍红双喜正品狂飙王ppq乒乓球拍成品拍底板6星横拍直拍 正品保证 不变形 双面反胶 国标标准 送大礼包', '乒乓球拍', 378),
(17, '狂神', '狂神乒乓球拍 直拍 横拍 碳素乒乓球球拍成品拍新品单只装 碳拍买就 送4球 建议先通风', '乒乓球拍', 38),
(18, '马琳', '威德博威马琳乒乓球拍红黑碳王碳素底板ppq乒乓球成品拍横拍直拍 底劲足 弹力大 粘性强 易搓球 送多件赠品', '乒乓球拍', 69),
(19, '亚平', '正品亚平碳素乒乓球拍单拍 乒乓球拍成品拍 横拍直拍 高弹耐磨 42限时抢购 限购5件 送球和包 韵达或EMS', '乒乓球拍', 42),
(20, 'Bestray百斯锐', '高端乒乓球底板 正品Bestray百斯锐纳米碳王乒乓球拍 直拍横拍 纳米科技底板 碳素胶水涂层 进攻犀利 防守全面', '乒乓球拍', 196),
(21, 'TIMO BOLL', '乒乓球拍初学直拍横拍BOLL红黑纳米碳王单拍pp乒乓底板乒乓球球拍 此款为单支 需要两支 请填写数量2', '乒乓球拍', 60),
(22, '胜辉', '买1送6红黑碳王乒乓球拍 正品ppq百斯锐底板六星狂飙王直拍横拍 包邮 高端乒乓拍 限量送大礼 手工DIY 成品拍', '乒乓球拍', 98),
(23, '王子', '网球拍 正品Prince王子 超轻碳素女士网球拍O3 7TI74 7T00J 7T18R', '网球拍', 398),
(24, 'YONEX/尤尼克斯', '超轻拍YONEX/尤尼克斯网球拍全碳素专业初学单人男女VCORE SILITE 致密纳米碳素 减震凝胶', '网球拍', 699),
(25, 'Babolat百宝力', 'Babolat百宝力PD全碳素网球拍 特价正品专业男女网球单人训练套装\r\nPD新款 李娜战拍 法网冠军 穆古鲁扎战拍', '网球拍', 899),
(26, '克洛斯威', '克洛斯威网球拍720正品特价初学者碳素专业训练比赛男女用全包邮 买就送大礼包', '网球拍', 89),
(27, '伊克世宝', '伊克世宝6601网球拍单人初学正品女士男女通用网球训练套装自练球【网球拍重心后置手感更轻盈舒适】【男女通用】【专为初学定制】【网线耐打弹性好】【专一4线避震器减震性能更出色】【 防滑舒适手柄更容易上手】 现在购买还送网球束口背袋哦~~', '网球拍', 138),
(28, '韦伯', '新款正品韦伯全碳素网球拍 进攻男女单拍训练比赛网球拍包邮 高端全碳素 比赛用拍 超大甜区 送大礼包', '网球拍', 159);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id标识', AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*
 Navicat Premium Data Transfer

 Source Server         : mrcsh
 Source Server Type    : MySQL
 Source Server Version : 80402 (8.4.2)
 Source Host           : host.mrcsh.cn:3306
 Source Schema         : fazil_db

 Target Server Type    : MySQL
 Target Server Version : 80402 (8.4.2)
 File Encoding         : 65001

 Date: 11/06/2025 16:57:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_access_log
-- ----------------------------
DROP TABLE IF EXISTS `t_access_log`;
CREATE TABLE `t_access_log` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '请求ID',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '请求路径',
  `method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '请求方法',
  `access_as` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '请求人',
  `access_from` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '请求IP',
  `result` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '结果',
  `params` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '参数',
  `create_time` datetime DEFAULT NULL COMMENT '请求时间',
  `update_time` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_access_log
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_file_info
-- ----------------------------
DROP TABLE IF EXISTS `t_file_info`;
CREATE TABLE `t_file_info` (
  `file_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '文件ID',
  `file_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文件名称',
  `file_size` bigint DEFAULT NULL COMMENT '文件大小 单位 byte',
  `file_abs_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文件位置',
  `file_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文件类型',
  `file_md5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文件MD5值',
  `file_owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文件所属',
  `file_pid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文件父ID',
  `deleted` tinyint(1) DEFAULT NULL COMMENT '文件是否放入回收站',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '上传状态',
  `chunk_num` int DEFAULT NULL COMMENT '分片数',
  `chunk_index` int DEFAULT NULL COMMENT '断点续传分片id',
  `file_avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '视频文件缩略图',
  `create_time` datetime DEFAULT NULL COMMENT '用户创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '用户修改时间',
  `file_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文件位置',
  PRIMARY KEY (`file_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_file_info
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `menu_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '菜单名称',
  `menu_purview` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '菜单权限标识',
  `menu_router_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '菜单路由标识',
  `menu_pid` int DEFAULT NULL COMMENT '菜单父ID',
  `menu_comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '菜单备注',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '菜单图标',
  `menu_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `outline` tinyint(1) DEFAULT NULL COMMENT '是否为外链',
  `sys` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '客户端还是管理端',
  `deleted` tinyint(1) DEFAULT NULL COMMENT '是否删除',
  `create_time` datetime DEFAULT NULL COMMENT '菜单创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '菜单修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_menu
-- ----------------------------
BEGIN;
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (1, '仪表板', 'sys:home', '/dashboard', 0, '首页', 'DashboardOutlined', 'ITEM', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:56');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (2, '系统管理', 'sys:sys', '/sys', 0, '系统管理', 'SettingOutlined', 'FOLDER', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (3, '用户管理', 'sys:sys:user', '/sys/user', 2, '用户管理', '', 'ITEM', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (4, '添加用户', 'sys:user:add', '', 3, '添加用户按钮', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (5, '修改用户', 'sys:user:update', '', 3, '修改用户按钮', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (6, '删除用户', 'sys:user:remove', '', 3, '删除用户按钮', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (7, '角色管理', 'sys:sys:role', '/sys/role', 2, '角色管理', '', 'ITEM', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (8, '添加角色', 'sys:role:new', '', 7, '添加角色按钮', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (9, '修改角色', 'sys:role:update', '', 7, '修改角色按钮', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (10, '删除角色', 'sys:role:remove', '', 7, '删除角色按钮', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (11, '菜单管理', 'sys:menu', '/sys/menu', 2, '菜单管理', '', 'ITEM', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (23, '日志审计', 'sys:log', '/sys/log', 2, '日志页面', '', 'ITEM', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (28, '查询菜单', 'sys:menu:select', '', 11, '', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (29, '新建菜单', 'sys:menu:new', '', 11, '', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (30, '删除菜单', 'sys:menu:remove', '', 11, '', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (31, '修改菜单', 'sys:menu:update', '', 11, '', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (32, '查询角色', 'sys:role:select', '', 7, '', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (33, '查询用户', 'sys:user:select', '', 3, '', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (39, '查询日志', 'sys:log:select', '', 23, '', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (43, '清空日志', 'sys:log:remove', '', 23, '', '', 'ACTIVE', 0, 'sys', 0, '2024-07-04 13:11:54', '2024-07-04 13:11:54');
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (48, '系统设置', 'sys:settings', '/sys/settings', 2, '', NULL, 'ITEM', 0, 'sys', 0, NULL, NULL);
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (50, '我的文件', 'user:myfile', '/user/files', 0, '', 'FileOutlined', 'ITEM', 0, 'client', 0, NULL, NULL);
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (51, '我的分享', 'user:share', '/user/share', 0, '', 'ShareAltOutlined', 'ITEM', 0, 'client', 0, NULL, NULL);
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (52, '回收站', 'cli:recovery', '/user/recover', 0, '', 'AppstoreOutlined', 'ITEM', 0, 'client', 0, NULL, NULL);
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (54, '软件注册', 'sys:register', '/sys/register', 2, '系统注册', '', 'ITEM', 0, 'sys', 0, NULL, NULL);
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (55, '概览', 'user:dashboard', '/dashboard', 0, '概览', 'DashboardOutlined', 'ITEM', 0, 'client', 0, NULL, NULL);
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (56, '公告管理', 'sys:notify', '/sys/notify', 0, '', 'FileOutlined', 'ITEM', 0, 'sys', 0, NULL, NULL);
INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`, `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`) VALUES (57, '查询信息', 'sys:monitor:query', '', 1, '', '', 'ACTIVE', 0, 'sys', 0, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for t_monitor
-- ----------------------------
DROP TABLE IF EXISTS `t_monitor`;
CREATE TABLE `t_monitor` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `time_point` datetime DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `num` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_monitor
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_role
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '角色名称',
  `menu_ids` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '该角色拥有的权限列表',
  `auth_ids` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL COMMENT '是否删除',
  `create_time` datetime DEFAULT NULL COMMENT '角色创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '角色修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1880809480 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_role
-- ----------------------------
BEGIN;
INSERT INTO `t_role` (`id`, `role_name`, `menu_ids`, `auth_ids`, `deleted`, `create_time`, `update_time`) VALUES (1, '管理员', '[1,57,2,3,4,5,6,33,7,8,9,10,32,11,28,29,30,31,23,39,43,48,54,55,50,51,52,56]', '[57,4,5,6,33,8,9,10,32,28,29,30,31,39,43,48,54,50,51,52,55,56]', 0, '2024-07-13 14:17:16', '2024-07-13 14:17:18');
INSERT INTO `t_role` (`id`, `role_name`, `menu_ids`, `auth_ids`, `deleted`, `create_time`, `update_time`) VALUES (1880809478, '用户', '[55,50,51,52]', '[50,51,52,55]', 0, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for t_setting
-- ----------------------------
DROP TABLE IF EXISTS `t_setting`;
CREATE TABLE `t_setting` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `login_bg_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `logo_small` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `logo_text_black` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `logo_text_white` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `index_code` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_setting
-- ----------------------------
BEGIN;
INSERT INTO `t_setting` (`id`, `title`, `login_bg_img`, `logo_small`, `logo`, `logo_text_black`, `logo_text_white`, `index_code`) VALUES (0, 'Fazil', '', '', '', '', '', NULL);
COMMIT;

-- ----------------------------
-- Table structure for t_share
-- ----------------------------
DROP TABLE IF EXISTS `t_share`;
CREATE TABLE `t_share` (
  `share_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '分享ID',
  `share_user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '分享用户',
  `share_expire_time` datetime DEFAULT NULL COMMENT '分享超时时间',
  `share_pwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '分享密码',
  `share_file_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '分享文件ID',
  `share_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '分享地址',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`share_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_share
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户ID',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码 SHA256 加密',
  `role` int DEFAULT NULL COMMENT '角色ID',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '邮箱',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '头像URL',
  `storage` bigint DEFAULT NULL COMMENT '总存储空间',
  `used_storage` bigint DEFAULT NULL COMMENT '已使用的存储空间',
  `settings` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '设置',
  `deleted` tinyint(1) DEFAULT NULL COMMENT '是否删除',
  `create_time` datetime DEFAULT NULL COMMENT '用户创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '用户修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_user
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

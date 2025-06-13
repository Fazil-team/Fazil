CREATE TABLE `t_user_storage`
(
    `id`          varchar(255) DEFAULT NULL,
    `user_id`     varchar(255) DEFAULT NULL,
    `type`        varchar(255) DEFAULT NULL,
    `config_json` text,
    `create_time` datetime     DEFAULT NULL,
    `update_time` datetime     DEFAULT NULL,
    `deleted`     tinyint(1) DEFAULT NULL,
    `name`        varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `t_menu` AUTO_INCREMENT = 63;

INSERT INTO `t_menu` (`id`, `menu_name`, `menu_purview`, `menu_router_path`, `menu_pid`, `menu_comment`,
                                 `icon`, `menu_type`, `outline`, `sys`, `deleted`, `create_time`, `update_time`)
VALUES (62, '空间配置', 'sys:storage', '/user/storage', 0, '', 'CloudOutlined', 'ITEM', 0, 'client', 0, NULL, NULL);
INSERT INTO `t_role` (`id`, `role_name`, `menu_ids`, `auth_ids`, `deleted`, `create_time`, `update_time`)
VALUES (1, '管理员', '[55,50,51,52,62,1,57,2,3,4,5,6,33,7,8,9,10,32,11,28,29,30,31,23,39,43,48,54,56]',
        '[57,4,5,6,33,8,9,10,32,28,29,30,31,39,43,48,54,50,51,52,55,56,62]', 0, '2024-07-13 14:17:16',
        '2024-07-13 14:17:18');
INSERT INTO `t_role` (`id`, `role_name`, `menu_ids`, `auth_ids`, `deleted`, `create_time`, `update_time`)
VALUES (2, '用户', '[55,50,51,52,62]', '[50,51,52,55,62]', 0, NULL, NULL);
/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-11-03 09:30:48
 * @LastEditors  : liulib
 * @LastEditTime : 2020-11-03 13:45:59
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [];

  // 关闭csrf token
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // mysql配置
  config.orm = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'midway_blog',
    synchronize: true,
    logging: true,
  };

  return config;
};

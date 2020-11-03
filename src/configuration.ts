/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-11-03 11:41:13
 * @LastEditors  : liulib
 * @LastEditTime : 2020-11-03 11:44:14
 */
import { Configuration } from '@midwayjs/decorator';

@Configuration({
  importConfigs: [
    './config/', // 自动加载 config 目录下所有 配置文件
  ],
  imports: [
    'swagger', // 加载swagger组件
    '@midwayjs/orm', // 加载 orm 组件
  ],
})
export class ContainerConfiguratin {}

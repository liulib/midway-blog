/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-11-03 13:57:09
 * @LastEditors  : liulib
 * @LastEditTime : 2020-11-03 16:29:42
 */
import { App, Provide } from '@midwayjs/decorator';
import { Application } from 'egg';
import { GITHUB } from '../config/config.base';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';
import { User } from '../model/user';
import { comparePassword } from '../utils/bcrypt';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  @App()
  app: Application;
  /**
   * 读取 github 用户信息
   * @param {String} username - github 登录名
   */
  async getGithubInfo(username: string): Promise<string> {
    const result = await this.app.curl(`${GITHUB.fetch_user}${username}`);
    return result && result.data;
  }
  /**
   * @description: 默认登录
   * @param {string} username - 登录账户
   */
  async login(login): Promise<any> {
    // 查询用户
    const user = await this.userModel.find({
      where: { username: login.username },
    });
    // 不存在
    if (user.length < 1) {
      return { success: false, msg: '用户不存在' };
    } else {
      const isMatch = await comparePassword(login.password, user[0].password);
      if (!isMatch) {
        return { success: false, msg: '密码不正确' };
      }
    }
  }
}

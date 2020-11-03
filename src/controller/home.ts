/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-11-03 09:35:37
 * @LastEditors  : liulib
 * @LastEditTime : 2020-11-03 09:38:45
 */
import { Inject, Controller, Get, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';
// import { UserService } from '../service/user';

@Provide()
@Controller('/')
export class APIController {
  @Inject()
  ctx: Context;

  //   @Inject()
  //   userService: UserService;

  @Get()
  async getUser() {
    // const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: 'hello midway' };
  }
}

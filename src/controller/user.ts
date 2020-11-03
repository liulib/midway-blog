/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-11-03 13:56:31
 * @LastEditors  : liulib
 * @LastEditTime : 2020-11-03 16:29:13
 */
import {
  Inject,
  Controller,
  Post,
  Provide,
  Body,
  ALL,
  Validate,
} from '@midwayjs/decorator';
import { UserService } from '../service/user';
import { loginDTO, githubLoginDTO } from '../dto/user';

@Provide()
@Controller('/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Validate()
  @Post('/login')
  async login(@Body(ALL) login: loginDTO) {
    const res = await this.userService.login(login);
    return res;
  }

  @Post('/githubLogin')
  async githubLogin(@Body() githubLogin: githubLoginDTO) {
    return { test: githubLogin };
  }
}

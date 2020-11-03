/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-11-03 14:26:05
 * @LastEditors  : liulib
 * @LastEditTime : 2020-11-03 14:43:28
 */
import { Rule, RuleType } from '@midwayjs/decorator';

export class loginDTO {
  @Rule(RuleType.string().required())
  username: string;

  @Rule(RuleType.string().required())
  password: string;
}

export class githubLoginDTO {
  @Rule(RuleType.string().required())
  code: string;
}

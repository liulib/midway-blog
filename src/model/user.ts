/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-11-03 11:37:36
 * @LastEditors  : liulib
 * @LastEditTime : 2020-11-03 16:11:33
 */
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    default: 2,
    comment: '用户角色：1 - admin, 2 - 普通用户',
  })
  role: number;

  @Column({
    type: 'text',
    nullable: true,
    comment: 'github 登录用户 直接绑定在 user 表',
  })
  github: string;

  @Column({ default: false })
  notice: boolean;

  @Column({ default: false })
  disabledDiscuss: boolean;
}

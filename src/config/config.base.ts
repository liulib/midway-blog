/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-11-03 14:02:37
 * @LastEditors  : liulib
 * @LastEditTime : 2020-11-03 14:04:05
 */
export const GITHUB = {
  client_id: '8cfd838ae6ab49046df7',
  client_secret: '19e698188b8ebd8aa4ef5d3e51550ecc7f85247c',
  access_token_url: 'https://github.com/login/oauth/access_token',
  fetch_user_url: 'https://api.github.com/user', // 用于 oauth2
  fetch_user: 'https://api.github.com/users/', // fetch user url https://api.github.com/users/gershonv
};
export const ADMIN_GITHUB_LOGIN_NAME = 'liulib'; // 博主的 github 登录的账户名 user
export const TOKEN = {
  secret: 'liu-li-b-test', // secret is very important!
  expiresIn: '720h', // token 有效期
};

import request from '@/utils/request';

const prefix = "http://192.168.0.116:3030"

export async function fakeAccountLogin(params) {
  return request(`${prefix}/auth/signin`, {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

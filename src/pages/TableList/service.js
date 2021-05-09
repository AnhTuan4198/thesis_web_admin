import request from '@/utils/request';

export async function queryRule(params) {
  console.log(params);
  return request('/api/rule', {
    params
  });
}
export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },

  });
}

export async function configWifi(payload){
  return request(`/api/wifi/${payload.deviceId}`,{
    method:"POST",
    data:{...payload},
  })
}

export async function configService(payload){
  return request(`/api/service/${payload.deviceId}`,{
    method:"POST",
    data:{...payload},
  })
}
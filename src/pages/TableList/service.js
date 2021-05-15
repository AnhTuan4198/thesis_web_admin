import request from '@/utils/request';

const prefix = "http://172.16.5.177:3030";
export async function queryDeviceList(params) {
  return request(`${prefix}/api/modules`, {
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
  return request(`${prefix}/api/modules/${payload.deviceId}/wifi`,{
    method:"P",
    data:{...payload},
  })
}

export async function configService(payload){
  return request(`${prefix}/api/modules/${payload.deviceId}/service`,{
    method:"PUT",
    data:{...payload},
  })
}
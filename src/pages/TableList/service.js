import request from '@/utils/request';

const prefix = "http://192.168.0.116:3030";
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
  return request(`${prefix}/api/modules/${payload.moduleId}/wifi`,{
    method:"PUT",
    data:{...payload},
  })
}

export async function configService(payload){
  return request(`${prefix}/api/modules/${payload.moduleId}/service`,{
    method:"PUT",
    data:{
      ...payload
    },
  })
}
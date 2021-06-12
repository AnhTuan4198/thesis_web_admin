import request from '@/utils/request';


export async function queryDeviceList(params) {
  return request(`/api/modules`, {
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
  return request(`/api/modules/${payload.moduleId}/wifi`,{
    method:"PUT",
    data:{...payload},
  })
}

export async function configService(payload){
  return request(`/api/modules/${payload.moduleId}/service`,{
    method:"PUT",
    data:{
      ...payload
    },
  })
}
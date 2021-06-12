const { default: request } = require("@/utils/request")


export async function queryServiceByType(payload){
    return request(`/api/services`,{
        params:{
            ...payload
        }
    })
}


export  async function queryServiceDetail(payload){
    const {params,serviceId} =payload;
    console.log(` params in service ${JSON.stringify(payload)}`)
    return request(`/api/services/${serviceId}`,{
        params
    })
}

export async function createService(payload){
    console.log(payload);

    return request(`/api/services`,{
        method:"POST",
        data:{...payload}
    })
}
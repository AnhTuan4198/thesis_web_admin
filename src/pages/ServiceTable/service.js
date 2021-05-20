const { default: request } = require("@/utils/request")

const prefix = "http://10.128.158.7:3030";
export async function queryServiceByType(payload){
    return request(`${prefix}/api/services`,{
        params:{
            ...payload
        }
    })
}


export  async function queryServiceDetail(payload){
    const {params,serviceId} =payload;
    console.log(` params in service ${JSON.stringify(payload)}`)
    return request(`${prefix}/api/services/${serviceId}`,{
        params
    })
}
const { default: request } = require("@/utils/request")

const prefix = "http://192.168.0.116:3030";
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

export async function createService(payload){
    console.log(payload);

    return request(`${prefix}/api/services`,{
        method:"POST",
        data:{...payload}
    })
}
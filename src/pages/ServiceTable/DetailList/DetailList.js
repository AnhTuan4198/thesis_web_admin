import ProTable from '@ant-design/pro-table'
import React, { useState ,useEffect } from 'react'
import { queryServiceDetail } from '../service';

const columnOptions ={
    Food:[
        {
            title:"Food type",
            dataIndex:'foodKind'
        },
        {
            title:"Name",
            dataIndex:"foodName"
        },
        {
            title:"Price",
            dataIndex:"price"
        },
        {
            title:"Location",
            dataIndex:"location"
        },
    ],
    Resort:[
        {
            title:"Name",
            dataIndex:"resortName"
        },
    ],
    Cinema:[
        {
            title:"Movie",
            dataIndex:"movieName"
        },
        {
            title:"Performance Time",
            dataIndex:"performanceTime"
        },
        {
            title:"Theater",
            dataIndex:"theater"
        },
        {
            title:"Total Seat",
            dataIndex:"availableSeat"
        },
    ],
}

const detailColumns = (serviceType) => columnOptions[serviceType]



export default function DetailList( props) {
    const { queryOptions } = props;
    const [columns,setColumns] = useState()
    
    useEffect(() => {
        if(queryOptions ){
            setColumns(detailColumns(queryOptions.serviceType));
        }
    }, [queryOptions])

    return (
        <>
            {queryOptions !== undefined ?
            (<ProTable
                search={false}
                options={false}
                columns={columns}
                pagination={{
                    pageSize:10,
                    showSizeChanger:true
                }}
                
                params={{
                    pageSize:10
                }}
                request={(params)=>{
                    const payload = {
                        params,
                        serviceId:queryOptions.id
                    }
                    return queryServiceDetail(payload)
                }}
            />)
                :null
            }
        </>
       
    )
}

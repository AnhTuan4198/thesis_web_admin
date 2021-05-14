import ProTable from '@ant-design/pro-table';
import React, { useRef } from 'react'
import { useIntl } from 'umi'
import { queryServiceByType } from '../service';

import style from './ServiceList.less'

export default function ServiceList(props) {
    const { serviceType , onChange } = props;
    const intl = useIntl();
    const actionRef = useRef();
    const columns = [
        {
            title:"Service Id",
            key:"id",
            dataIndex:"id"
        },
        {
            title:"Service Name",
            dataIndex:"serviceName"
        },
        {
            title:"Date",
            dataIndex:"createdAt"
        }
    ]
   
    return (
        <ProTable
            headerTitle={intl.formatMessage({
                id: 'pages.service.searchTable.title',
                defaultMessage: "List Service",
            })}
            columns={columns}
            search={false}
            rowKey="key"
            pagination={{
                showTotal:false,
                pageSize:10
            }}
            params={{
                pageSize:10
            }}
            rowClassName={
                (record)=>{
                    console.log(props.id);
                    console.log(record.id)
                    return record.id === props.id ? style["split-row-select-active"] 
 : ''
                }
            }
            onRow={(rowItem)=>{
                return {
                    onClick:()=>{
                        if(rowItem.id){
                            const options ={
                                serviceType,
                                id:rowItem.id
                            }
                            onChange(options)
                        }
                    }
                }
            }}
            request={async (params)=>{
                const queryOptions ={
                   ...params,
                    serviceType
                }
               
                const result = await queryServiceByType(queryOptions)
                return result
            }}
            actionRef={actionRef}
        />
    )
}

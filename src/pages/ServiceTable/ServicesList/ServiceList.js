import ProTable from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { useIntl ,connect} from 'umi'
import { queryServiceByType } from '../service';

// import style from './ServiceList.less'

function ServiceList(props) {
    const { serviceType , onChange ,dispatch, serviceRef, detailRef, setUpdateServiceVisible} = props;
    
    const intl = useIntl();
    const columns = [
        {
            title:"Service Name",
            dataIndex:"serviceName"
        },
        {
            title:"Date",
            dataIndex:"createdAt",
             valueType: 'dateTime',
        }
    ]
   
    return (
        <ProTable
            headerTitle={intl.formatMessage({
                id: 'pages.service.searchTable.title',
                defaultMessage: "List Service",
            })}
            toolBarRender={()=>(
                <Button 
                    key="button"
                    icon={<PlusOutlined />} type="primary"
                    onClick={()=>setUpdateServiceVisible(true)}
                    >
                  New service
                </Button>
            )}
            columns={columns}
            search={false}
            rowKey="serviceName"
            pagination={{
                showTotal:false,
                pageSize:10
            }}
            params={{
                pageSize:10
            }}
            onRow={(rowItem)=>{
                return {
                    onClick:()=>{
                        if(rowItem["_id"]){
                            const options ={
                                serviceType,
                                id:rowItem['_id'],
                            }
                            onChange(options);
                        }
                        if(detailRef.current) detailRef.current.reload();
                    }
                }
            }}
            request={async (params)=>{
                const queryOptions ={
                   ...params,
                    serviceType
                }
               
                const result = await queryServiceByType(queryOptions)
                dispatch({
                    type:'table/saveServiceTable',
                    payload:[
                        ...result.data
                    ]
                })
                return result
            }}
            actionRef={serviceRef}
        />
    )
}
export default connect(({table})=>{
  return {
    servicesTable:table.servicesTable
  }
})(ServiceList);
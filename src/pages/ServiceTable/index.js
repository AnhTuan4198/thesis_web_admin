import React,{useState} from 'react';
import {PageContainer} from "@ant-design/pro-layout";
import { ProFormRadio } from '@ant-design/pro-form';

import ServiceList from './ServicesList/ServiceList';
import ProCard from '@ant-design/pro-card';
import DetailList from './DetailList/DetailList';

 const options = [
        "Cinema",
        "Food",
        "Resort"
    ];

export default function ServiceTable() {
    const [serviceType,setServiceType] = useState(options[0]);
    const [queryOptions,setQueryOptions] = useState();

    return (
        <PageContainer>
            <ProFormRadio.Group
                radioType= 'button'
                fieldProps={{
                    value:serviceType,
                    onChange: (e) =>{
                        setServiceType(e.target.value);
                    },
                }}
                defaultValue={options[0]}
                options={options}
            />
            <ProCard split="vertical">
                <ProCard colSpan="384px" ghost>
                    <ServiceList
                        id = {queryOptions?queryOptions.id : undefined}
                        onChange ={setQueryOptions}
                        serviceType={serviceType}
                    />
                </ProCard>
                <ProCard>
                    <DetailList
                        queryOptions={queryOptions}
                    />
                </ProCard>
            </ProCard>
            
        </PageContainer>
    )
}

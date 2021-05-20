import React,{useRef, useState} from 'react';
import {PageContainer} from "@ant-design/pro-layout";
import { ProFormRadio } from '@ant-design/pro-form';

import ServiceList from './ServicesList/ServiceList';
import ProCard from '@ant-design/pro-card';
import DetailList from './DetailList/DetailList';
import UpdateService from './updateService/index';


 const options = [
        "Cinema",
        "Food",
        "Resort"
    ];

export default function ServiceTable() {
    const [serviceType,setServiceType] = useState(options[0]);
    const [queryOptions,setQueryOptions] = useState();
    const [updateServiceVisible , setUpdateServiceVisible] = useState(false);
    const detailActionRef = useRef();
    const serviceActionRef =useRef();
   
    return (
        <PageContainer>
            <ProFormRadio.Group
                radioType= 'button'
                fieldProps={{
                    value:serviceType,
                    onChange: (e) =>{
                        setServiceType(e.target.value);
                        if(serviceActionRef)
                        serviceActionRef.current.reload();
                    },
                }}
                defaultValue={options[0]}
                options={options}
            />
            <ProCard split="vertical">
                <ProCard colSpan="384px" ghost>
                    <ServiceList
                        setUpdateServiceVisible={setUpdateServiceVisible}
                        detailRef={detailActionRef}
                        serviceRef={serviceActionRef}
                        id = {queryOptions?queryOptions.id : undefined}
                        onChange ={setQueryOptions}
                        serviceType={serviceType}
                    />
                </ProCard>
                <ProCard>
                    <DetailList
                        detailRef={detailActionRef}
                        queryOptions={queryOptions}
                    />
                </ProCard>
            </ProCard>
            <UpdateService
                addServiceVisible={updateServiceVisible}
                setAddServiceVisible={setUpdateServiceVisible}
            />
        </PageContainer>
    )
}

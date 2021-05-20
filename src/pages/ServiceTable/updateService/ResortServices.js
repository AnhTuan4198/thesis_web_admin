import React from 'react'
import { 
  ProFormText,
} from '@ant-design/pro-form';
import { Space } from 'antd';

export default function ResortServices() {
    return (
        <Space style={{
            display:'flex',
            width:"50%",
            marginTop:8,
            marginBottom:8,
            marginLeft:16,
            marginRight:16
        }}>
           <ProFormText width="l" name="resortServiceName" label="Resort service" placeholder="Resort service" />
            <ProFormText width="l" name="price" label="Food's price" placeholder="VND" />
        </Space>
    )
}

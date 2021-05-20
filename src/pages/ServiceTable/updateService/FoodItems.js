import React from 'react'
import { 
  ProFormText,
} from '@ant-design/pro-form';
import { Space } from 'antd';

export default function FoodItems() {
    return (
        <Space style={{
            display:'flex',
            width:"50%",
            marginTop:8,
            marginBottom:8,
            marginLeft:16,
            marginRight:16
        }}>
           <ProFormText width="md" name="foodName" label="Food Name" placeholder="New food name" />
           <ProFormText width="md" name="foodType" label="Food Type" placeholder="Food type" />
            <ProFormText width="md" name="price" label="Food's price" placeholder="VND" />
        </Space>
    )
}

import React from 'react';
import { ProFormText } from '@ant-design/pro-form';
import { Space } from 'antd';
import styles from './FoodItems.less';

export default function FoodItems() {
  return (
    <Space
      style={{
        display: 'flex',
        width: '50%',
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16,
      }}
    >
      <div className={styles["item-input"]}>
        <ProFormText
          width="md"
          name="foodName"
          label="Food Name"
          placeholder="New food name"
        />
      </div>
      <div className={styles["item-input"]}>
        <ProFormText width="md" name="foodType" label="Food Type" placeholder="Food type" />
      </div>
      <div className={styles["item-input"]}>
        <ProFormText width="md" name="price" label="Food's price" placeholder="VND" />
      </div>
    </Space>
  );
}

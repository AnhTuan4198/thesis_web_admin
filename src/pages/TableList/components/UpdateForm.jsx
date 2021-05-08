import React,{useState} from 'react';
import {Button, Buttont, Modal } from 'antd';
import ProForm,{
  ModalForm,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormRadio,
  ProFormDateTimePicker,
  ProFormGroup,
} from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import { isTypeOperatorNode } from 'typescript';

const UpdateForm = (props) => {
  
  const { updateModalVisible, handleUpdateModalVisible } = props;
  const [configOption, setConfigOption] =useState("WifiConfiuration");

  const options =[
    "WifiConfiuration",
    "AddToService"
  ]

  return (
    <ModalForm
      stepsProps={{
        size: 'small',
      }}
      visible={updateModalVisible}
      onVisibleChange={handleUpdateModalVisible}
      onFinish={()=>{
        console.log(`hello!`);
      }}
      render={()=>{

      }} 
    >
      <ProFormRadio.Group
             style={{
                margin: 16,
             }}
            radioType="button"
            fieldProps={{      
              value:configOption,    
              onChange:(e)=>{
                setConfigOption(e.target.value);
              }
            }}
            options={['1', '2']}
      />
      {}
      {}
    </ModalForm>
  );
};

export default UpdateForm;

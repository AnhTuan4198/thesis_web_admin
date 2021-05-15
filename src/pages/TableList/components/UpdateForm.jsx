import React,{useState} from 'react';
import { 
  ModalForm,
  ProFormRadio,
  ProFormText,
} from '@ant-design/pro-form';
import {configService, configWifi} from '../service';
import { message } from 'antd';

const UpdateForm = (props) => {
  
  const { updateModalVisible, handleUpdateModalVisible } = props;
  const [configOption, setConfigOption] =useState("WifiConfiuration");

  const options =[
    "WiFi Configuration",
    "Add To Service"
  ]
  return (
    <ModalForm
      visible={updateModalVisible}
      onVisibleChange={handleUpdateModalVisible}
      onFinish={async (values) => {
        let result;

        if(configOption === options[0]){
          const wifiConfig ={...values};
          const payload = {
            wifiConfig,
            moduleId:props.values.moduleId
          }
          result = await configWifi(payload);
        }else if( configOption === options[1]){
          const serviceConfig = {...values}
          const payload ={
            serviceConfig,
            moduleId:props.values.moduleId
          }
          
          result = await configService(payload)
        }

        if(result){
          console.log(window.location);
          message.success(`Message: ${result.Message}`)
          props.setCurrentRow(undefined)
          handleUpdateModalVisible(false);
          if(props.actionRef.current){
            props.actionRef.current.reload();
          }
        }
        return result
      }}
    >
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        radioType="button"
        fieldProps={{
          value: configOption,
          onChange: (e) => {
            setConfigOption(e.target.value);
          },
        }}
        options={options}
      />
      {configOption === options[0] && (
        <>
          <ProFormText name="ssid" label="WiFi SSID" placeholder="Wifi config ssid" />

          <ProFormText.Password
            name="password"
            label="WiFi password"
            placeholder="Wifi config password"
          />
        </>
      )}
      {configOption === options[1] && (
        <>
          <ProFormText name="serviceName" label="Service Name" placeholder="Your service id" />
          <ProFormText name="gate" label="Service gate" placeholder="Your service gate" />
        </>
      )}
    </ModalForm>
  );
};

export default UpdateForm;

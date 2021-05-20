import React, { useRef, useState } from 'react';
import  { ModalForm, ProFormRadio, ProFormList } from '@ant-design/pro-form';

import BasicField from './BasicFiled';
import FoodItems from './FoodItems';
import MovieItem from './MovieItem';
import ResortServices from './ResortServices';

import {createService} from '../service';


export default function UpdateService(props) {
  const options = {
    Food: {
      serviceType: 'Food',
      label: 'Add new food here',
    },
    Cinema: {
      serviceType: 'Cinema',
      label: 'Add new movie',
    },
    Resort: {
      serviceType: '',
      label: "Add new resort's service",
    },
  };
  const modalRef =useRef();
  const { addServiceVisible, setAddServiceVisible,serviceActionRef } = props;
  const [serviceTypeOption, setServiceTypeOption] = useState(options.Food);

  
  return (
    <ModalForm
     formRef={modalRef}
      title="Add new service"
      width={1080}
      visible={addServiceVisible}
      onVisibleChange={setAddServiceVisible}
      onFinish={(values) => {
        const payload = {
          ...values,
          serviceType:serviceTypeOption.serviceType

        }
        createService(payload);
        modalRef.current?.resetFields();
        serviceActionRef.current?.reload();
        setAddServiceVisible(false);
      }}
    >
      <ProFormRadio.Group
        name="serviceType"
        label="Choose your service type"
        style={{
          margin: 16,
        }}
        radioType="button"
        fieldProps={{
          value: serviceTypeOption,
          onChange: (e) => {
            setServiceTypeOption(options[e.target.value]);
            modalRef.current?.resetFields();
          },
        }}
        options={Object.keys(options)}
      />
      <BasicField />
      <div>
        <ProFormList
        name="subService"
        width="md"
        label={serviceTypeOption.label}
        creatorButtonProps={{
          position: 'top',
          creatorButtonText: 'New item',
          style:{
              maxWidth:120,
          }
        }}
      >
          {serviceTypeOption.serviceType==="Food"  &&<FoodItems />}
          { serviceTypeOption.serviceType==="Cinema" && <MovieItem/>}
          {serviceTypeOption.serviceType==="Resort"  &&<ResortServices/>}
      </ProFormList>
      </div>
    </ModalForm>
  );
}

import React from 'react'
import { 
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-form';

export default function BasicFiled() {
    return (
        <>
           <ProFormText name="serviceName" label="Service Name" placeholder="Your service name" />
           <ProFormText name="location" label="Service location" placeholder="Your service locations" />
            <ProFormCheckbox.Group
                name="availableTicketType"
                label="Ticket tier"
                placeholder="Choose tier of ticket that you accept for using"
                options={["Standard","Gold","Platinum"]}
            />
        </>
    )
}

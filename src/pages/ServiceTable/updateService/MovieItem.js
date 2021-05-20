import React from 'react'
import { 
  ProFormText,
  ProFormDateTimePicker
} from '@ant-design/pro-form';


export default function MovieItem() {
    return (
        <div style={{
            // display:'flex',
            width:"100%",
            marginTop:8,
            marginBottom:8,
            marginLeft:16,
            marginRight:16,
            border:"1px solid red"
        }}>
           <ProFormText width="l" name="movieName" label="Movie Name" placeholder="New movie name" />
           <ProFormDateTimePicker width="l" name="performanceTime" label="PerformanceTime" placeholder="Performance time" />
            <ProFormText width="l" name="theater" label="Movie theater" placeholder="Theater name" />
             <ProFormText width="l" name="availableSeat" label="Number of available seat" placeholder="Number of seat" />
        </div>
    )
}

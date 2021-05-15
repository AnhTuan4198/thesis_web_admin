import { } from '../pages/TableList/service' ;

const TableModel = {
  namespace: 'table',
  state: {
       devicesTable: {
        deviceList:[],
        nextKey:undefined,
        current:1,
        pageSize:10,
        total:0
    },
  },
  effects: {
    *saveDevicesList({payload}, { put }) {
      yield put({
        type: 'saveDevicesTable',
        payload:{ ...payload},
      });
    },

    
  },
  reducers: {

    saveDevicesTable(state,action){
        const {payload} = action;
        return {
            ...state,devicesTable:{
                ...payload
            }
        }
    },
   
    
  },
};
export default TableModel;

import { } from '../pages/TableList/service' ;

const TableModel = {
  namespace: 'table',
  state: {
       devicesTable:[],
      serviceTable:[]
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
            ...state,devicesTable:[
                ...payload
          ]
        }
    },
   
    saveServiceTable(state,action){
      const{ payload } = action;
      return {
        ...state.Table,
        servicesTable:{
          ...payload
        }
      }
    }
    
  },
};
export default TableModel;

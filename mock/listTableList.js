// eslint-disable-next-line import/no-extraneous-dependencies
import { ConsoleSqlOutlined } from '@ant-design/icons';
import { parse } from 'url';
import shortid from 'shortid';
import { match } from 'assert';
import { abort } from 'process';
// mock tableListDataSource
const genList = (current, pageSize) => {
  const tableListDataSource = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key: shortid.generate(),
      deviceId: shortid.generate(),
      serviceId:shortid.generate(),
      serviceType:"cinema",
      gate:Math.ceil(Math.random()*100),
      updatedAt: new Date(),
      createdAt: new Date(),
    });
  }

  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

function getRule(req, res, u) {
  // console.log(req);
  let realUrl = u;
  console.log(req.query);
  console.log(`thís is url:${req.url}`);
  


  // if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
  //   realUrl = req.url;
  // }

  const { current , pageSize  } = req.query;
  // const params = parse(realUrl,true).query;
  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);
  // const sorter = JSON.parse(params.sorter);

  // if (sorter) {
  //   dataSource = dataSource.sort((prev, next) => {
  //     let sortNumber = 0;
  //     Object.keys(sorter).forEach((key) => {
  //       if (sorter[key] === 'descend') {
  //         if (prev[key] - next[key] > 0) {
  //           sortNumber += -1;
  //         } else {
  //           sortNumber += 1;
  //         }

  //         return;
  //       }

  //       if (prev[key] - next[key] > 0) {
  //         sortNumber += 1;
  //       } else {
  //         sortNumber += -1;
  //       }
  //     });
  //     return sortNumber;
  //   });
  // }

  // if (params.filter) {
  //   const filter = JSON.parse(params.filter);

  //   if (Object.keys(filter).length > 0) {
  //     dataSource = dataSource.filter((item) => {
  //       return Object.keys(filter).some((key) => {
  //         if (!filter[key]) {
  //           return true;
  //         }

  //         if (filter[key].includes(`${item[key]}`)) {
  //           return true;
  //         }

  //         return false;
  //       });
  //     });
  //   }
  // }

  // if (params.name) {
  //   dataSource = dataSource.filter((data) => data.name.includes(params.name || ''));
  // }

  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${current}`, 10) || 1,
  };
  return res.json(result);
}

function postRule(req, res, u, b) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;

    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule = {
          key: tableListDataSource.length,
          href: 'https://ant.design',
          avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          ][i % 2],
          name,
          owner: '曲丽丽',
          desc,
          callNo: Math.floor(Math.random() * 1000),
          status: Math.floor(Math.random() * 10) % 2,
          updatedAt: new Date(),
          createdAt: new Date(),
          progress: Math.ceil(Math.random() * 100),
        };
        tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();

      return;

    case 'update':
      (() => {
        let newRule = {};
        tableListDataSource = tableListDataSource.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }

          return item;
        });
        return res.json(newRule);
      })();

      return;

    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };
  res.json(result);
}

function configWifi(req,res){
  console.log(`request body: ${JSON.stringify(req.body)}`);
  console.log(`request params:${JSON.stringify(req.params)}`);
  return res.status(200).json({
    Message:"Configuration success",
  });
}

function serviceConfig(req,res){
  console.log(`request body: ${JSON.stringify(req.body)}`);
  console.log(`request params:${JSON.stringify(req.params)}`);
  return res.status(200).json({
    Message: 'Configuration success',
  });
}

const genServiceList = (max)=>{
  const type = ["Cinema","Resort","Food","Movie"];
  const list =[];
  for(let i = 0;i <max;i++){
    list.push({
      key:shortid.generate(),
      id:Math.ceil(Math.random()*100),
      serviceType:type[Math.ceil(Math.random()*3)],
      serviceName:`Service ${Math.ceil(Math.random()*100)}`
    })
  }
  return list;
}

function queryServiceByType(req,res){
  const {current ,pageSize} =req.query;
  let start = (current-1)*pageSize;
  let end  =current * pageSize;
  
  const data = genServiceList(100);
  
  const result = [...data].slice(start,end);
  return res.status(200).json({
    data:result,
    success:true,
    total:data.length,
    current: parseInt(current,10)||1,
    pageSize
  })
}

function genDetailList(serviceId ,number){
  let data= [];
  if(serviceId == 81  ){
    for(let i = 0; i< number ; i++){
      const object ={
         id:Math.ceil(Math.random()*100),
        foodKind:"Drink",
        foodName:"Some kind of food",
        price:300,
        location:"sector A"
      }
      data.push(object)
    }
   
  }else if(serviceId == 97){
    for(let i = 0; i< number ; i++){
      const object ={
         id:Math.ceil(Math.random()*100),
        resortName:"Name of resort"
      }
      data.push(object)
    }
    
  }else if (serviceId == 30){
    for(let i = 0; i< number ; i++){
      const object ={
        id:Math.ceil(Math.random()*100),
        movieName:"Name of movie",
        performanceTime:"Time",
        theater: `Theater ${Math.ceil(Math.random()*10)}`,
        availableSeat:20
      }
      data.push(object)
    }
    
  }
  return data;
}


function queryServiceDetail(req,res){
   console.log(`this is params:${JSON.stringify(req.params)}`)
  console.log(`this is query:${JSON.stringify(req.query)}`);
  const {current ,pageSize} =req.query;
  let start = (current-1)*pageSize;
  let end  =current * pageSize;
  const dataSource = genDetailList(req.params.serviceId,5);
  const result = [...dataSource].slice(start,end);
  return res.status(200).json({
    data:result,
    success:true,
    total:dataSource.length,
    pageSize,
    current:parseInt(current,10)||1
  })
}

export default {
  'GET /api/rule': getRule,
  'POST /api/rule': postRule,
  'POST /api/wifi/:deviceId':configWifi,
  'POST /api/service/:deviceId':serviceConfig ,
  'GET /api/services/':queryServiceByType,
  'GET /api/services/:serviceId':queryServiceDetail
};

export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path:"/",
        redirect:"/user/login"
      },
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            exact:true,
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                name: 'Devices',
                icon: 'table',
                path: '/devices',
                component: './TableList',
                authority:['admin']
              },
              {
                name: 'Services',
                icon: 'table',
                path: '/services',
                component: './ServiceTable',
                authority:['admin']
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];

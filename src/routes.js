import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';
import Admin from 'layouts/Admin';

/*
export default [
  // normal route
  {
    component: Admin,
    exact: false,
    // TODO: get After to support nested routes
    // https://github.com/reactjs/react-router-tutorial/tree/master/lessons/04-nested-routes
    path: '/(/admin/index|alunos|)',
  },
  // Catch-all 404 Page
  // {
  //   path: '/', // need to define path for getInitialProps to work
  //   component: NotFound,
  //   exact: false,
  // },
];
*/

import AdminLayout from "layouts/Admin.jsx";

export default [
  {
    path: '/',
    exact: false,
    component: AdminLayout
  }
  
];

// export default routes;
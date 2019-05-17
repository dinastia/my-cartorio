import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

import Index from 'views/Index.jsx';

export default [
  {
    path: '/index',
    exact: true,
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/alunos",
    name: "Alunos",
    icon: "ni ni-hat-3 text-blue",
    component: asyncComponent({
      loader: () => import('views/Alunos.jsx'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
    layout: "/admin"
  },
  
];
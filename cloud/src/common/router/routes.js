
import Home from '@/pages/Home/Home'

import sms from './sms/sms'

import auth from './auth/auth'

import contact from './contact/contact'

import category from './category/category'

const AllRoutes = [
  ...sms,
  ...auth,
  ...contact,
  ...category,
  {
    path: '/home',
    component: Home,
    children: [
      
    ]
  },
  {
    path: '',
    redirect: '/home',
    meta: {
      title: '首页'
    }
  },
]


export default AllRoutes
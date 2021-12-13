import Category from '@/pages/Category/Category'
import CategoryPlus from '@/pages/Category/Plus/CategoryPlus'

import CategoryPlusWrite from '@/pages/Category/Plus/Write/CategoryPlusWrite'

export default [
    {
        path: '/service_sms',
        redirect: '/service_sms/plus',
        component: Category,
        children: [
            {
                path: '/service_sms/plus',
                component: CategoryPlus,
                redirect: '/service_sms/plus/write',
                children: [
                    {
                        path: '/service_sms/plus/write',
                        component: CategoryPlusWrite,
                    },
                ]
            },
        ]
    },
]
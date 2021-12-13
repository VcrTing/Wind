import Sms from '@/pages/Sms/Sms'
import SmsPlus from '@/pages/Sms/Plus/SmsPlus'

import SmsPlusWrite from '@/pages/Sms/Plus/Write/SmsPlusWrite'
import SmsPlusPreview from '@/pages/Sms/Plus/Preview/SmsPlusPreview'

export default [
    {
        path: '/sms',
        redirect: '/sms/plus',
        component: Sms,
        children: [
            {
                path: '/sms/plus',
                component: SmsPlus,
                redirect: '/sms/plus/write',
                children: [
                    {
                        path: '/sms/plus/write',
                        component: SmsPlusWrite,
                    },
                    {
                        path: '/sms/plus/preview',
                        component: SmsPlusPreview,
                    },
                ]
            },
        ]
    },
]
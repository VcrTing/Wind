import Auth from '@/pages/Auth/Auth'
import PageLogin from '@/pages/Auth/Login/PageLogin'

export default [
    {
        path: '/auth',
        redirect: '/auth/login',
        component: Auth,

        children: [
            {
                path: '/auth/login',
                component: PageLogin
            },
        ]
    },
]
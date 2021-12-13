import Contact from '@/pages/Contact/Contact'
import ContactView from '@/pages/Contact/View/ContactView'

export default [
    {
        path: '/contact',
        redirect: '/contact/view',
        component: Contact,

        children: [
            {
                path: '/contact/view',
                component: ContactView
            }
        ]
    },
]
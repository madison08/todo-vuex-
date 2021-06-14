const routes = [

    {
        path: '/',
        name: 'all',
        component: () => import('../components/All')
    },
    {
        path: '/active',
        name: 'acive',
        component: () => import('../components/Active')
    },
    {
        path: '/completed',
        name: 'completed',
        component: () => import('../components/Completed')
    }

]

export default routes
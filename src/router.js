import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('./components/authen/Login.vue')
  },
  {
    path: '/logout',
    component: () => import('./components/authen/Logout.vue')
  },
  {
    path: '/resetPassword',
    component: () => import('./components/authen/ResetPassword.vue')
  },
  {
    path: '/changePassword/:token',
    component: () => import('./components/authen/ChangePassword.vue')
  },
  {
    path: '/',
    component: () => import('./components/Default.vue')
  },
  {
    path: '/home',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/profile',
    component: () => import('./components/Profile.vue')
  },
  {
    path: '/userAccount',
    name: 'userAccount',
    component: () => import('./components/userAccount/Index.vue')
  },
  {
    path: '/userAccount/create',
    component: () => import('./components/userAccount/Create.vue')
  },
  {
    path: '/userAccount/:id/',
    component: () => import('./components/userAccount/Detail.vue')
  },
  {
    path: '/userAccount/edit/:id/',
    component: () => import('./components/userAccount/Edit.vue')
  },
  {
    path: '/userAccount/delete/:id/',
    component: () => import('./components/userAccount/Delete.vue')
  },
  {
    path: '/hosxpOfficer',
    name: 'hosxpOfficer',
    component: () => import('./components/hosxpOfficer/Index.vue')
  },
  {
    path: '/hosxpOfficer/edit/:id/',
    component: () => import('./components/hosxpOfficer/Edit.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('./components/product/Index.vue')
  },
  {
    path: '/product/create',
    component: () => import('./components/product/Create.vue')
  },
  {
    path: '/product/:id/',
    component: () => import('./components/product/Detail.vue')
  },
  {
    path: '/product/edit/:id/',
    component: () => import('./components/product/Edit.vue')
  },
  {
    path: '/product/delete/:id/',
    component: () => import('./components/product/Delete.vue')
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import('./components/brand/Index.vue')
  },
  {
    path: '/brand/create',
    component: () => import('./components/brand/Create.vue')
  },
  {
    path: '/brand/:id/',
    component: () => import('./components/brand/Detail.vue')
  },
  {
    path: '/brand/edit/:id/',
    component: () => import('./components/brand/Edit.vue')
  },
  {
    path: '/brand/delete/:id/',
    component: () => import('./components/brand/Delete.vue')
  },
  {
    path: '/hosxp',
    name: 'hosxp',
    component: () => import('./components/hosxp/Index.vue')
  },
   {
    path: '/opdConfirm',
    name: 'opdConfirm',
    component: () => import('./components/opdConfirm/Index.vue')
  },
  {
    path: '/orderHeader',
    name: 'orderHeader',
    component: () => import('./components/orderHeader/Index.vue')
  },
  {
    path: '/orderHeader/create',
    component: () => import('./components/orderHeader/Create.vue')
  },
  {
    path: '/orderHeader/:id/',
    component: () => import('./components/orderHeader/Detail.vue')
  },
  {
    path: '/orderHeader/edit/:id/',
    component: () => import('./components/orderHeader/Edit.vue')
  },
  {
    path: '/orderHeader/delete/:id/',
    component: () => import('./components/orderHeader/Delete.vue')
  },
  {
    path: '/orderDetail/create',
    component: () => import('./components/orderDetail/Create.vue')
  },
  {
    path: '/orderDetail/edit/:orderId/:no/',
    component: () => import('./components/orderDetail/Edit.vue')
  },
  {
    path: '/orderDetail/delete/:orderId/:no/',
    component: () => import('./components/orderDetail/Delete.vue')
  },
  {
    path: '/patient',
    name: 'patient',
    component: () => import('./components/patient/Index.vue')
  },
  {
    path: '/patientActivity',
    name: 'patientActivity',
    component: () => import('./components/patientActivity/Index.vue')
  },
  {
    path: '/maDepartment',
    name: 'maDepartment',
    component: () => import('./components/maDepartment/Index.vue')
  },
  {
    path: '/maDepartment/create',
    component: () => import('./components/maDepartment/Create.vue')
  },
  {
    path: '/maDepartment/:id/',
    component: () => import('./components/maDepartment/Detail.vue')
  },
  {
    path: '/maDepartment/edit/:id/',
    component: () => import('./components/maDepartment/Edit.vue')
  },
  {
    path: '/maDepartment/delete/:id/',
    component: () => import('./components/maDepartment/Delete.vue')
  },
  {
    path: '/maProvider',
    name: 'maProvider',
    component: () => import('./components/maProvider/Index.vue')
  },
  {
    path: '/maProvider/create',
    component: () => import('./components/maProvider/Create.vue')
  },
  {
    path: '/maProvider/:id/',
    component: () => import('./components/maProvider/Detail.vue')
  },
  {
    path: '/maProvider/edit/:id/',
    component: () => import('./components/maProvider/Edit.vue')
  },
  {
    path: '/maProvider/delete/:id/',
    component: () => import('./components/maProvider/Delete.vue')
  },
  {
    path: '/maStatusType',
    name: 'maStatusType',
    component: () => import('./components/maStatusType/Index.vue')
  },
  {
    path: '/maStatusType/create',
    component: () => import('./components/maStatusType/Create.vue')
  },
  {
    path: '/maStatusType/:id/',
    component: () => import('./components/maStatusType/Detail.vue')
  },
  {
    path: '/maStatusType/edit/:id/',
    component: () => import('./components/maStatusType/Edit.vue')
  },
  {
    path: '/maStatusType/delete/:id/',
    component: () => import('./components/maStatusType/Delete.vue')
  },
  {
    path: '/maType',
    name: 'maType',
    component: () => import('./components/maType/Index.vue')
  },
  {
    path: '/maType/create',
    component: () => import('./components/maType/Create.vue')
  },
  {
    path: '/maType/:id/',
    component: () => import('./components/maType/Detail.vue')
  },
  {
    path: '/maType/edit/:id/',
    component: () => import('./components/maType/Edit.vue')
  },
  {
    path: '/maType/delete/:id/',
    component: () => import('./components/maType/Delete.vue')
  },
  {
    path: '/ma',
    name: 'ma',
    component: () => import('./components/ma/Index.vue')
  },
  {
    path: '/ma/create',
    component: () => import('./components/ma/Create.vue')
  },
  {
    path: '/ma/:id/',
    component: () => import('./components/ma/Detail.vue')
  },
  {
    path: '/ma/edit/:id/',
    component: () => import('./components/ma/Edit.vue')
  },
  {
    path: '/ma/delete/:id/',
    component: () => import('./components/ma/Delete.vue')
  },
  {
    path: '/:path(.*)',
    component: () => import('./components/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
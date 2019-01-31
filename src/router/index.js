import Vue from 'vue'
import Router from 'vue-router'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
/** { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },
**/
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    children: [{
      path: '/home',
      component: () => import('@/views/home/index'),
      meta: { title: 'home', icon: 'home' , iconac: 'home-ac'}
    }]
  },
  {
    path: '/onlineBooking',
    component: Layout,
    name: 'onlineBooking',
    children: [{
      path: '/onlineBooking',
      component: () => import('@/views/onlineBooking/index'),
      meta: { title: 'onlineBooking', icon: 'clock' , iconac: 'clock-ac' }
    }]
  },
  {
    path: '/myProfile',
    component: Layout,
    name: 'myProfile',
    children: [{
      path: '/myProfile',
      component: () => import('@/views/myProfile/index'),
      meta: { title: 'myProfile', icon: 'profile', iconac: 'profile-ac' }
    }]
  },
  {
    path: '/myLoyalty',
    component: Layout,
    name: 'myLoyalty',
    meta: { title: 'Home', icon: 'home' },
    children: [{
      path: '/myLoyalty',
      component: () => import('@/views/myLoyalty/index'),
      meta: { title: 'myLoyalty', icon: 'loyalty', iconac: 'loyalty-ac' }
    }]
  },
  {
    path: '/myBookings',
    component: Layout,
    name: 'myBookings',
    children: [{
      path: '/myBookings',
      component: () => import('@/views/myBookings/index'),
      meta: { title: 'myBookings', icon: 'mybookings', iconac: 'mybooking-ac' }
    }]
  },
  {
    path: '/myPackages',
    component: Layout,
    name: 'myPackages',
    children: [{
      path: '/myPackages',
      component: () => import('@/views/myPackages/index'),
      meta: { title: 'myPackages', icon: 'package', iconac: 'package-ac' }
    }]
  },
  {
    path: '/buyVoucher',
    component: Layout,
    name: 'buyVoucher',
    children: [{
      path: '/buyVoucher',
      component: () => import('@/views/buyVoucher/index'),
      meta: { title: 'buyVoucher', icon: 'voucher', iconac: 'voucher-ac'  }
    }]
  },
  {
    path: '/password',
    component: Layout,
    name: 'password',
    children: [{
      path: '/password',
      component: () => import('@/views/password/index'),
      meta: { title: 'password', icon: 'password', iconac: 'password-ac'  }
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    name: 'login',
    meta: { title: 'login', icon: 'login' },
    children:[{
      path: 'index',
      component: () => import('@/views/loginLayout/components/loginSide')
    },{
      path:'forgot',
      component: () => import('@/views/loginLayout/components/forgotSide')
    }]
  },
  {
    path: '/forgot',
    component: Layout,
    hidden: true,
    name: 'forgot',
    children: [{
      path: '/forgot',
      component: () => import('@/views/forgot/index'),
      meta: { title: 'forgot', icon: 'forgot' }
    }]
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true,
    name: 'register',
    children: [{
      path: '/register',
      component: () => import('@/views/register/index'),
      meta: { title: 'register', icon: 'register' }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
/**
 * 加载控制器 router component自动加载在默认router-view上
 */
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

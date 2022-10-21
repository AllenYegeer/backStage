import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //地址没有#号
  /* history: createWebHashHistory(), //会带一个#号 */
  routes: [ 
    {
      /* 重定向
      第一种写法: redirect:'/login', 
      第二种写法: */
      redirect:(to) =>{
        return {path:'/login'}
      } 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/register.vue')
    },
    {
      path: '/backpage',  //后台界面
      name: 'backPage',
      component: () => import('../views/layout/index.vue'),
      redirect: '/backpage/user', //重定向
      children: [
        {
          path:'/backpage/user',  //用户管理
          name:'user',
          component:() => import('../views/userPage/index.vue')
        },
        {
          path:'/backpage/competition',  //竞赛管理
          name:'competition',
          component:() => import('../views/competitionPage/index.vue')
        },
        {
          path:'/backpage/question',   //问题管理
          name:'question',
          component:() => import('../views/questionPage/index.vue')
        },
        {
          path:'/backpage/announcements',  //公告管理
          name:'announcements',
          component:() => import('../views/announcementsPage/index.vue')
        },
        { 
          path:'/backpage/admin',   //用户管理
          name:'admin',
          component:() => import('../views/adminPage/index.vue')
        },
      ]
    },
    {
      path:"/update",
      name:"update",
      component:() => import('../views/update/index.vue')
    }
  ]
})
export default router

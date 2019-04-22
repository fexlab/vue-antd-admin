import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/PageView'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login,
      invisible: true
    },
    {
      path: '/register',
      name: '注册',
      component: Register,
      invisible: true
    },
    {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/workplace',
              name: '工作台',
              component: () => import(/* webpackChunkName: "workplace" */ '@/views/dashboard/WorkPlace'),
              icon: 'none'
            },
            {
              path: '/dashboard/analysis',
              name: '分析页',
              component: () => import(/* webpackChunkName: "analysis" */ '@/views/dashboard/Analysis'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/form',
          name: '表单页',
          component: PageView,
          icon: 'form',
          children: [
            {
              path: '/form/basic',
              name: '基础表单',
              component: () => import(/* webpackChunkName: "form_basic" */ '@/views/form/BasicForm'),
              icon: 'none'
            },
            {
              path: '/form/step',
              name: '分步表单',
              component: () => import(/* webpackChunkName: "form_step" */ '@/views/form/stepForm/StepForm'),
              icon: 'none'
            },
            {
              path: '/form/advanced',
              name: '高级表单',
              component: () => import(/* webpackChunkName: "form_advanced" */ '@/views/form/advancedForm/AdvancedForm'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/list',
          name: '列表页',
          component: PageView,
          icon: 'table',
          children: [
            {
              path: '/list/query',
              name: '查询表格',
              component: () => import(/* webpackChunkName: "list_query" */ '@/views/list/QueryList'),
              icon: 'none'
            },
            {
              path: '/list/standard',
              name: '标准列表',
              component: () => import(/* webpackChunkName: "list_standard" */ '@/views/list/StandardList'),
              icon: 'none'
            },
            {
              path: '/list/card',
              name: '卡片列表',
              component: () => import(/* webpackChunkName: "list_card" */ '@/views/list/CardList'),
              icon: 'none'
            },
            {
              path: '/list/search',
              name: '搜索列表',
              component: () => import('@/views/list/search/SearchLayout'),
              icon: 'none',
              children: [
                {
                  path: '/list/search/article',
                  name: '文章',
                  component: () => import(/* webpackChunkName: "list_search_article" */ '@/views/list/search/ArticleList'),
                  icon: 'none'
                },
                {
                  path: '/list/search/application',
                  name: '应用',
                  component: () => import(/* webpackChunkName: "list_search_application" */ '@/views/list/search/ApplicationList'),
                  icon: 'none'
                },
                {
                  path: '/list/search/project',
                  name: '项目',
                  component: () => import(/* webpackChunkName: "list_search_project" */ '@/views/list/search/ProjectList'),
                  icon: 'none'
                }
              ]
            }
          ]
        },
        {
          path: '/detail',
          name: '详情页',
          icon: 'profile',
          component: RouteView,
          children: [
            {
              path: '/detail/basic',
              name: '基础详情页',
              icon: 'none',
              component: () => import(/* webpackChunkName: "detail_basic" */ '@/views/detail/BasicDetail')
            },
            {
              path: '/detail/advanced',
              name: '高级详情页',
              icon: 'none',
              component: () => import(/* webpackChunkName: "detail_advanced" */ '@/views/detail/AdvancedDetail')
            }
          ]
        },
        {
          path: '/result',
          name: '结果页',
          icon: 'check-circle-o',
          component: PageView,
          children: [
            {
              path: '/result/success',
              name: '成功',
              icon: 'none',
              component: () => import(/* webpackChunkName: "result_success" */ '@/views/result/Success')
            },
            {
              path: '/result/error',
              name: '失败',
              icon: 'none',
              component: () => import(/* webpackChunkName: "result_error" */ '@/views/result/Error')
            }
          ]
        },
        {
          path: '/exception',
          name: '异常页',
          icon: 'warning',
          component: RouteView,
          children: [
            {
              path: '/exception/404',
              name: '404',
              icon: 'none',
              component: () => import(/* webpackChunkName: "exception_404" */ '@/views/exception/404')
            },
            {
              path: '/exception/403',
              name: '403',
              icon: 'none',
              component: () => import(/* webpackChunkName: "exception_403" */ '@/views/exception/403')
            },
            {
              path: '/exception/500',
              name: '500',
              icon: 'none',
              component: () => import(/* webpackChunkName: "exception_500" */ '@/views/exception/500')
            }
          ]
        }
      ]
    }
  ]
})

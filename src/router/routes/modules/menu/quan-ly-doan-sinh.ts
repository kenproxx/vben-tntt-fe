import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { ExceptionEnum } from '/@/enums/exceptionEnum';
import { t } from '/@/hooks/web/useI18n';

const ExceptionPage = () => import('/@/views/sys/exception/Exception.vue');

const page: AppRouteModule = {
  path: '/quan-ly-doan-sinh',
  name: 'quan-ly-doan-sinh',
  component: LAYOUT,
  redirect: '/page-demo/form/basic',
  meta: {
    orderNo: 20,
    icon: 'ion:aperture-outline',
    title: 'Quản lý đoàn sinh',
  },
  children: [
    // =============================form start=============================
    {
      path: 'huynh-truong',
      name: 'huynh-truong',
      component: () => import('/@/views/quan-ly-doan-sinh/quan-ly-huynh-truong/index.vue'),
      meta: {
        title: 'Quản lý Huynh Trưởng',
        ignoreKeepAlive: true,
      },

    },
    {
      path: 'thieu-nhi',
      name: 'thieu-nhi',
      component: () => import('/@/views/quan-ly-doan-sinh/quan-ly-thieu-nhi/index.vue'),
      meta: {
        title: 'Quản lý Thiếu nhi',
        ignoreKeepAlive: true,
      },
    },
    {
      path: 'doan-sinh',
      name: 'doan-sinh',
      component: () => import('/@/views/quan-ly-doan-sinh/doan-sinh/index.vue'),
      meta: {
        title: 'Quản lý Full',
        ignoreKeepAlive: true,
      },
    },
    // =============================form end=============================
    // =============================exception start=============================
    {
      path: 'exception',
      name: 'ExceptionPage',
      component: getParentLayout('ExceptionPage'),
      redirect: '/page-demo/exception/404',
      meta: {
        title: t('routes.demo.page.exception'),
        hideMenu: true,
      },
      children: [
        {
          path: '403',
          name: 'PageNotAccess',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.PAGE_NOT_ACCESS,
          },
          meta: {
            title: '403',
          },
        },
        {
          path: '404',
          name: 'PageNotFound',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.PAGE_NOT_FOUND,
          },
          meta: {
            title: '404',
          },
        },
        {
          path: '500',
          name: 'ServiceError',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.ERROR,
          },
          meta: {
            title: '500',
          },
        },
        {
          path: 'net-work-error',
          name: 'NetWorkError',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.NET_WORK_ERROR,
          },
          meta: {
            title: t('routes.demo.page.netWorkError'),
          },
        },
        {
          path: 'not-data',
          name: 'NotData',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.PAGE_NOT_DATA,
          },
          meta: {
            title: t('routes.demo.page.notData'),
          },
        },
      ],
    },
    // =============================exception end=============================
  ],
};

export default page;

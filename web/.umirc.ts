import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {path: '/', component: '@/pages/index'},
    {path: '/posts/:id', component: '@/pages/posts'},
  ],
  fastRefresh: {},
  antd: false,
  ssr: {
    mode: 'string',
  },
});

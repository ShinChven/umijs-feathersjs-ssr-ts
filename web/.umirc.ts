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
  ssr: {
    mode: 'string',
  },
});

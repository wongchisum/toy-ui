import { defineConfig } from 'dumi';

const isProd = process.env.node_env === 'production';

const nameSpace = '/toy-ui/';

export default defineConfig({
  title: 'toy-ui',
  favicon: isProd ? `${nameSpace}assets/favicon.ico` : '/assets/favicon.ico',
  logo: isProd ? `${nameSpace}assets/logo.png` : '/assets/logo.png',
  outputPath: 'docs-dist',
  publicPath: nameSpace,
  base: nameSpace,
  // more config: https://d.umijs.org/config
});

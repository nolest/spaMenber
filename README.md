# spaMenber project via vue-admin-template
##请先配置cnpm
##环境安装
```
cnpm i -D
```
##开发命令
``
npm start
```
```
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js",
    "build:report": "npm_config_report=true npm run build",
    "lint": "eslint --ext .js,.vue src",
    "test": "npm run lint",
    "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
```

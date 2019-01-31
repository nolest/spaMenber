/**
 * @author nolest
 * @description 2018/12 webpack + vue-router + vuex + elementUI + vue-i18n 
 * 
 */
import Vue from 'vue'

// A modern alternative to CSS resets
import 'normalize.css/normalize.css' 

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//用於覆蓋elementUI主色調，詳見elememntUI自定義主題文檔 main color
//import '@/assets/css/element-variables.scss'

//引用vue-i18n國際化組件
import i18n from './lang'

// global css
import '@/styles/index.scss' 
// 全局弹性盒布局
import '@/styles/ds-flex.scss' 

//主視圖
import App from './App'

//引入全家桶
import store from './store'
import router from './router'

import '@/icons' // icon
//兼容i18n ElementUI
Vue.use(ElementUI, { i18n: (key, value)=> i18n.t(key, value) })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})

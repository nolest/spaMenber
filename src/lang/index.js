import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en'
import zhHKLocale from './zh-HK'
//引入elementUI內部國際化文件，與i18n整合，然後在main中調用整合後的i18n
import enElement from 'element-ui/lib/locale/lang/en'
import zhHKElement from 'element-ui/lib/locale/lang/zh-TW'

Vue.use(VueI18n)

const messages = {
  'en': {
    ...enLocale,
    ...enElement
  },
  'zh-HK': {
    ...zhHKLocale,
    ...zhHKElement
  }
}

let lang = Cookies.get('language');
if(!lang) {
  lang = 'en';
  Cookies.set('language', lang);
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh-HK
  locale: lang,
  // set locale messages
  messages
})

export default i18n

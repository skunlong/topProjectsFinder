import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#008080',
    secondary: '#33cccc',
    accent: '#8c9eff',
    error: '#b71c1c',
    cardColor: '#33cccc'
  }
})

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#f04d45', // a color that is not in the material colors palette
    secondary: '#4A851F',
    dark: '#424242',
    primaryDark: '#BC453C',
    darkBlue: '#005A79',
    faded: '#6f6e6e'
  }
})

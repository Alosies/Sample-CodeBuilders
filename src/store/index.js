// import Vue from 'vue'
// import Vuex from 'vuex'
// import events from './Modules/Events'

// Vue.use(Vuex)

// const Store = new Vuex.Store({
//   modules: {
//     events
//   }
// })

// export default Store

import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

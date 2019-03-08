import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'

describe('HelloWorld.vue', () => {
  Vue.use(Vuetify)
  it('Home Component renders', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

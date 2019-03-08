import { shallowMount, createLocalVue } from '@vue/test-utils'
import BlogPost from '@/components/BlogPosts'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allPosts: []
  },
  actions: {
    fetchPosts() {
      return []
    }
  },
  getters: {
    allPosts() {
      return []
    }
  }
})

describe('HelloWorld.vue', () => {
  it('BlogPost Component renders the posts', () => {
    const wrapper = shallowMount(BlogPost, {
      store,
      localVue
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})

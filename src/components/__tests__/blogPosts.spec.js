import { shallowMount, createLocalVue } from '@vue/test-utils'
import BlogPost from '@/components/BlogPosts'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuetify)

// const localVue = createLocalVue()
// localVue.use(Vuex)

// const state = {
//   allPosts: []
// }

// const store = new Vuex.Store({
//   state,
//   actions: {
//     fetchPosts: jest.fn()
//   },
//   getters: {
//     allPosts(state) {
//       return state.allPosts
//     }
//   }
// })

// Setup - mock Store
const mockStore = {
  dispatch: jest.fn(),
  getters: { allPosts: [] }
}

const mocks = {
  $store: mockStore
}

describe('BlogPosts/index.vue', () => {
  let build
  beforeEach(() => {
    build = () => {
      const wrapper = shallowMount(BlogPost, { mocks })

      return {
        wrapper
      }
    }
  })

  it('BlogPost Component renders', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Dispatches action to the store to fetch Posts', () => {
    // expect(mockStore.dispatch).toHaveBeenCalledWith('fetchPosts')
    expect(mockStore.dispatch).toHaveBeenCalledWith('fetchPosts')
  })

  it('Fetches allPosts from Store', () => {
    // Act - mount the component
    const { wrapper } = build()
    // Assert - Check the computed property
    expect(wrapper.vm.allPosts).toBe(mockStore.getters.allPosts)
  })
})

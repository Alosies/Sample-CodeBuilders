import { shallowMount } from '@vue/test-utils'
import Events from '@/components/Events'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)

// Setup - mock Store
const mockStore = {
  dispatch: jest.fn(),
  getters: { allEvents: [] }
}

const mocks = {
  $store: mockStore
}

describe('BlogPosts/index.vue', () => {
  let build
  beforeEach(() => {
    build = () => {
      const wrapper = shallowMount(Events, { mocks })
      return {
        wrapper
      }
    }
  })

  it('Events Component renders', () => {
    // Act - mount the component
    const { wrapper } = build()
    // Assert - Check the Snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Dispatches action to the store to fetches Events', () => {
    // Assert - Check whether the correct action was disptached
    expect(mockStore.dispatch).toHaveBeenCalledWith('fetchEvents')
  })

  it('Fetches allPosts from Store', () => {
    // Act - mount the component
    const { wrapper } = build()
    // Assert - Check the computed property
    expect(wrapper.vm.allEvents).toBe(mockStore.getters.allEvents)
  })
})

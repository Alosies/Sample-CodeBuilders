import { events } from '../DataSource/eventsData'
import axios from 'axios'
export default {
  fetchEvents({ commit }) {
    commit('setEvents', events)
  },
  addEvent({ commit }, event) {
    commit('addEvent', event)
  },
  async fetchPosts({ commit }) {
    const URL = 'https://jsonplaceholder.typicode.com/posts'
    try {
      const response = await axios.get(URL)
      commit('setPosts', response.data)
    } catch (e) {
      throw Error('API Error occurred.')
    }
  }
}

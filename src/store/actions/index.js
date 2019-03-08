import { events } from '../DataSource/eventsData'
import axios from 'axios'
export default {
  fetchEvents({ commit }) {
    // const URL = "<BackEnd API URL>";
    // axios.get(URL).then(response => {
    //   commit("setEvents", payload);
    // });
    // const events = []
    commit('setEvents', events)
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

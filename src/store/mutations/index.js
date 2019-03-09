export default {
  setEvents(state, payload) {
    state.allEvents = payload
  },
  setPosts(state, payload) {
    state.allPosts = payload
  },
  addEvent(state, payload) {
    state.allEvents.push(payload)
  }
}

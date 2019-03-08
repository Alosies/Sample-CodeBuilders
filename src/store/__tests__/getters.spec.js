import getters from '@/store/getters'

// mock State
const state = {
  allEvents: [
    {
      title: 'Event Title',
      description: 'Event Description'
    }
  ],
  allPosts: [
    {
      title: 'Post Title',
      description: 'Post Description'
    }
  ]
}

describe('allEvents Getter', () => {
  it('returns allEvents', () => {
    const result = getters.allEvents(state)
    expect(result).toEqual(state.allEvents)
  })
})

describe('allPosts Getter', () => {
  it('returns allPosts', () => {
    const result = getters.allPosts(state)
    expect(result).toEqual(state.allPosts)
  })
})

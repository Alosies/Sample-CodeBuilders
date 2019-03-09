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

describe('Getters', () => {
  it('allEvents: returns allEvents', () => {
    // act
    const result = getters.allEvents(state)
    // assert
    expect(result).toEqual(state.allEvents)
  })
  it('allPosts: returns allPosts', () => {
    // act
    const result = getters.allPosts(state)
    // assert
    expect(result).toEqual(state.allPosts)
  })
})

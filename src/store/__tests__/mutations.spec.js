import mutations from '@/store/mutations'

describe('Mutations', () => {
  const state = {
    allEvents: []
  }

  const events = [
    {
      category: 'Programming',
      title: 'Code Challenge',
      description:
        'Participate in the code challenege and compete with 100s of coders',
      schedule: {
        date: 20,
        month: 'Mar'
      }
    }
  ]

  it('sets the events in the state', () => {
    mutations.setEvents(state, events)
    expect(state.allEvents).toEqual(events)
  })
})

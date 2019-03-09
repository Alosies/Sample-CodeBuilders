import mutations from '@/store/mutations'

describe('Mutations', () => {
  let state
  let events

  beforeEach(() => {
    state = {
      allEvents: []
    }
    events = [
      {
        title: 'Code Challenge',
        description: 'Participate in the code challenege'
      }
    ]
  })

  it('setEvents: sets the events in the state', () => {
    // act
    mutations.setEvents(state, events)
    // assert
    expect(state.allEvents).toEqual(events)
  })

  it('addEvent: adds an event to the state', () => {
    // setUp
    let event = {
      title: 'title',
      description: 'description'
    }
    const newEventsArray = [...state.allEvents, event]

    // act
    mutations.addEvent(state, event)

    // assert
    expect(state.allEvents).toEqual(newEventsArray)
  })
})

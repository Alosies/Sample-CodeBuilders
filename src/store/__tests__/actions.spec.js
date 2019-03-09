import actions from '@/store/actions'
import { events } from '@/store/DataSource/eventsData'

import nock from 'nock'

describe('fetchEvents', () => {
  let commit = jest.fn()

  it('fetches the events(locally) and calls the correct mutation', () => {
    actions.fetchEvents({ commit })

    expect(commit).toHaveBeenCalledWith('setEvents', events)
  })
})

describe('addEvents', () => {
  it('Receives Event and Adds to the store', () => {
    let commit = jest.fn()
    let event = {
      title: 'title',
      description: 'description'
    }
    actions.addEvent({commit}, event)
    expect(commit).toHaveBeenCalledWith('addEvent', event)
  })
})

const mockPost = {
  title: 'title',
  description: 'description'
}

describe('fetchPosts', () => {
  const postsAPI = 'https://jsonplaceholder.typicode.com'
  const endpoint = '/posts'

  let commit = jest.fn()

  it('fetches the posts(HTTP request) and calls the correct mutation', async () => {
    // nock intercepts HHTP requests and sends a custom response
    nock(postsAPI)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(endpoint)
      .reply(200, {
        mockPost
      })

    await actions.fetchPosts({ commit })

    expect(commit).toHaveBeenCalledWith('setPosts', { mockPost })
  })

  it('catches an error', async () => {
    // nock intercepts HHTP requests and sends a custom response
    nock(postsAPI)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(endpoint)
      .reply(500)

    await expect(actions.fetchPosts({ commit: jest.fn() }, {})).rejects.toThrow(
      'API Error occurred.'
    )
  })
})

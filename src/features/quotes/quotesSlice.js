// import { v4 as uuid } from "uuid";

// Action Creators
// TODO: Create action creators as defined in tests
export function addQuote(quote) {
  return {
    type: 'quotes/add', payload: {
      content: quote.content,
      author: quote.author,
      votes: quote.votes,
      id: quote.id
    }
  }
}

export function removeQuote(quoteId) {
  return { type: 'quotes/remove', payload: quoteId }
}

export function upvoteQuote(quoteId) {
  return { type: 'quotes/upvote', payload: quoteId }
}

export function downvoteQuote(quoteId) {
  return { type: 'quotes/downvote', payload: quoteId }
}
// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case 'quotes/add':
      return [...state, {
        id: action.payload.id,
        content: action.payload.content,
        author: action.payload.author,
        votes: action.payload.votes
      }]

    case 'quotes/remove':
      return state.filter(quote => action.payload !== quote.id)

    case 'quotes/upvote':
      return state.map(quote => {
        if (action.payload !== quote.id) {
          return quote
        } else {
          return { ...quote, votes: quote.votes + 1 }
        }
      })

    case 'quotes/downvote':
      return state.map(quote => {
        if (action.payload === quote.id && quote.votes > 0) {
          return { ...quote, votes: quote.votes - 1 }
        } else {
          return quote
        }
      })
    default:
      return state
  }
}

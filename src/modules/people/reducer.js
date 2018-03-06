import * as types from './constants'

export const initialState = {
  popularPeople: {}
}

export default (state = initialState, action) => {
  const type = action.type

  switch (type) {
    case types.GET_POPULAR_PEOPLE:
      return {
        ...state,
        popularPeople: action.popularPeople,
      }
    
    default:
      return state
  }
}
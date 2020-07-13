import { ADD_COORDS_POST_QUERY } from '../const/api'

export const addCoords = (body) => fetch(ADD_COORDS_POST_QUERY, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body
})
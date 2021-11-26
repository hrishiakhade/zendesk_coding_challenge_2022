import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000'
})


export function getTickets() {
  return api.get('/')
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.message
    })
}
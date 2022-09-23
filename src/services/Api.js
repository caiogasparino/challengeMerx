/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const BASE_API = 'https://test-front-end-api.herokuapp.com/api/v1'

const api = axios.create({
  baseURL: BASE_API,
})

const apiCallGet = async (url, tokenRequired) => {
  let headers = ''
  let errorObject = ''

  if (tokenRequired) {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMSIsImlzcyI6ImthZWwucm9uYWxkQG9vbGxvby5vcmciLCJpYXQiOjE1ODUxNTIzMDgsImV4cCI6MTU4NTE1NDEwOH0.HWH0YN7DgUcuHAlx0TCgeqHD9lCGEou5mfZqwVeUQ0k'

    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  } else {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }

  const req = await api
    .get(url, {
      headers,
      timeout: 100,
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        errorObject = error.response
      }

      if (error.request) {
        errorObject = {
          code: error.toJSON().code,
          message: error.toJSON().message,
        }
      } else {
        console.error('Error', error.message)
        errorObject = error.message
      }
      return errorObject
    })

  return { data: req.data, status: req.status, error: errorObject }
}

export default {
  getOrders: async () => {
    let url = `/orders`
    const response = await apiCallGet(url, true)

    return response
  },
}

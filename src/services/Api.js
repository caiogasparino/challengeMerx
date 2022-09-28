/* eslint-disable import/no-anonymous-default-export */
const url = 'https://test-front-end-api.herokuapp.com/api/v1/orders'

let fetchData = {
  credentials: 'include',
  method: 'GET',
  headers: new Headers({
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMSIsImlzcyI6ImthZWwucm9uYWxkQG9vbGxvby5vcmciLCJpYXQiOjE1ODUxNTIzMDgsImV4cCI6MTU4NTE1NDEwOH0.HWH0YN7DgUcuHAlx0TCgeqHD9lCGEou5mfZqwVeUQ0k',
    'User-Agent': 'any-name',
  }),
}

export default {
  getOrders: () => {
    fetch(url, fetchData)
      .then((response) => response.json()) // passo extra
      .then((data) => {
        console.log('getOrders', data)
      })
      .catch((error) => console.error('NAO DEU BOA', error))
  },
}

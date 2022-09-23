/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useReducer } from 'react'
import { initialState, TableReducer } from '../reducers/TableReducer'

export const TableContext = createContext()

export default ({ children }) => {
  const [state, dispatch] = useReducer(TableReducer, initialState)

  return (
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  )
}

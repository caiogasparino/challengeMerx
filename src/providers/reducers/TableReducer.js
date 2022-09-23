export const initialState = {
  status: [],
  invoice: 0,
  balance: 0,
  dueDate: 0,
  bayondTerms: 0,
}

export const TableReducer = (state, action) => {
  switch (action.type) {
    case 'getOrdersTable':
      return { ...state, table: action }
    default:
      return state
  }
}

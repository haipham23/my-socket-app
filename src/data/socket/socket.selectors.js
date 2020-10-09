export const getBooks = (state) => Object.values(state.socket).find(({ channel }) => channel === 'books');
export const getTrades = (state) => Object.values(state.socket).find(({ channel }) => channel === 'trades');
export const getTicker = (state) => Object.values(state.socket).find(({ channel }) => channel === 'ticker');

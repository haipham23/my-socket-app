export const getBook = (state) => Object.values(state.socket).find(({ channel }) => channel === 'books');
export const getTrade = (state) => Object.values(state.socket).find(({ channel }) => channel === 'trades');
export const getTicker = (state) => Object.values(state.socket).find(({ channel }) => channel === 'ticker');

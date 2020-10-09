export const bookEvent = JSON.stringify({
  event: 'subscribe',
  channel: 'book',
  symbol: 'tBTCUSD'
});

export const tradesEvent = JSON.stringify({
  event: 'subscribe',
  channel: 'trades',
  symbol: 'tBTCUSD'
});

export const tickerEvent = JSON.stringify({
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tBTCUSD',
});

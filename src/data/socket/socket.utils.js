export const findChanNameById = (state, id) => {
  const { channel } = Object.values(state).find(({ chanId }) => chanId === id) || {};
  return channel;
};


export const addItemToTop = (currentRecords = [], nextRecords, maxRecords) => {
  const newRecords = [
    nextRecords,
    ...currentRecords,
  ];

  return newRecords.slice(0, maxRecords);
};

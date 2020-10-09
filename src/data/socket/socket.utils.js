import shortid from 'shortid';

export const findChanNameById = (state, id) => {
  const { channel } = Object.values(state).find(({ chanId }) => chanId === id) || {};
  return channel;
};


export const addItemToTop = (currentRecords = [], nextRecords, maxRecords) => {
  const newRecords = [
    // generating unique id to improve performance
    { id: shortid.generate(), items: nextRecords },
    ...currentRecords,
  ];

  return newRecords.slice(0, maxRecords);
};

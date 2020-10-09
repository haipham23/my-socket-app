const formatDate = time => {
  const duration = parseInt(time, 10);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  seconds = (seconds < 10) ? '0' + seconds : seconds;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  hours = (hours < 10) ? '0' + hours : hours;

  return hours + ':' + minutes + ':' + seconds;
};

export default formatDate;

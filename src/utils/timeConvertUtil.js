export const secondsToTime = seconds => {
  var data = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  data.hours = parseInt(seconds / 3600);
  data.minutes = parseInt((seconds % 3600) / 60);
  data.seconds = seconds % 60;

  return data;
};

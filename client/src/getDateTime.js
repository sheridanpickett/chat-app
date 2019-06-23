export default () => {
  let today = new Date();

  let hour = today.getHours();
  let minute = today.getMinutes();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return {
    dateString:`${day}/${month}/${year} ${hour}:${minute}`,
    dateInt: Date.now()
  }
}

function clock() {
  const date_ob = new Date();

  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  hours = ('0' + hours).slice(-2);
  minutes = ('0' + minutes).slice(-2);
  seconds = ('0' + seconds).slice(-2);

  console.log(hours + ":" + minutes + ":" + seconds + ' ' + date_ob.toLocaleTimeString().slice(-2));
}
setInterval(clock, 1000)

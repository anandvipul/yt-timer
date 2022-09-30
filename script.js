function timeInSeconds(str) {
  let timeArr = str.split(":");
  if (timeArr.length == 1) {
    let seconds = +timeArr[0];
    return seconds;
  }
  if (timeArr.length == 2) {
    let minutes = +timeArr[0];
    let seconds = +timeArr[1];
    return minutes * 60 + seconds;
  }
  if (timeArr.length == 3) {
    let hr = +timeArr[0];
    let minutes = +timeArr[1];
    let seconds = +timeArr[2];
    return hr * 60 * 60 + minutes * 60 + seconds;
  }
}


function timeSeperator(sec) {
    let hour = Math.round(sec/60/60);
    sec = sec - hour * 3600;
    let minutes = Math.round(sec/60);
    sec = sec - minutes*60;
    return `${hour} Hours ${minutes} Minutes ${sec} Seconds`;
}


function ytTimer() {
  let jack = document.querySelectorAll("ytd-playlist-video-renderer");
  let arrTime = [];

  jack = Array.from(jack);

  for (let i = 0; i < jack.length; i++) {
    arrTime.push(
      jack[i]
        .querySelector("#content")
        .querySelector("#container")
        .querySelector("#thumbnail")
        .querySelector("a#thumbnail")
        .querySelector("div#overlays")
        .querySelector("ytd-thumbnail-overlay-time-status-renderer")
        .querySelector("span#text").innerText
    );
  }
  return arrTime;
}

// let a = [
//   "2:06:30",
//   "6:05",
//   "1:12:17",
//   "4:50",
//   "1:09:13",
//   "56:04",
//   "33:02",
//   "1:04:28",
// ];

let arr = ytTimer();
let arrA = [];
arr.forEach((elem) => arrA.push(timeInSeconds(elem)));
let sum = arrA.reduce((prev, curr) => prev+curr, 0);
alert(timeSeperator(sum));
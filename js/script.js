// let s = 0;
// setInterval(function(){
//     s++
//     console.log(s);
// },1000)
// set interval

//set timeout
// setTimeout(function(){
//     alert('Hello')
// },3000)

// let p = 0;
// let jamanak = setInterval(function(){
//     p++;
//     console.log(p);
//     if(p==5){
//         clearInterval(jamanak)
//     }
// },1000)

let mator = document.querySelector(".mator");
let minute = -90;
setInterval(() => {
  minute += 6;
  mator.style.transform = `translate(-50%, -50%) rotate(${minute}deg)`;
  // }, 1000 * 60);
}, 500);

let mator2 = document.querySelector(".mator2");
let hour = -90;
setInterval(() => {
  hour += 30;
  mator2.style.transform = `translate(-50%, -50%) rotate(${hour}deg)`;
  //   }, 1000 * 60 * 60);
}, 1000);

let mator3 = document.querySelector(".mator3");
let second = -90;
setInterval(() => {
  second += 6;
  mator3.style.transform = `translate(-50%, 50%) rotate(${second}deg)`;
}, 1000);

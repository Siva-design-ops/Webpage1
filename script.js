setInterval(showtime,1000)
function showtime(){

let  a=new Date();
let h=a.getHours();
let m=a.getMinutes();
let s=a.getSeconds();

let currenttime= h+":"+m+":"+s;

document.getElementById("clock").innerHTML=currenttime;
console.log("h");

}
showtime();
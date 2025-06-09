
const hours = document.getElementById("hours")
const menutes = document.getElementById("menutes")
const second = document.getElementById("second")
const ampm = document.getElementById("ampm")
const day = document.getElementById("Day")
const monthName = document.getElementById("month")
const year = document.getElementById("year")



const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


const formet = (n) => n < 10 ? `0${n}` : `${n}`;
const d_n = (h) => h < 12 ? "AM" : "PM"


function formet_12(realTime) {
    if (realTime === 0) {
        return 12
    } else if (realTime > 12) {
        return realTime - 12
    } else {
        return realTime;
    }

}


setInterval(() => {
    const now = new Date();

    const hoursH = now.getHours(); //for am and pm
    const formet_12_H = now.getHours(); //for 12h formet


    const ghonta = formet(now.getHours());   //1ghonta take 01 korar jonno
    const minit = formet(now.getMinutes());  //1Minutes take 01 korar jonno
    const sekent = formet(now.getSeconds()); //1Seconds take 01 korar jonno
    const din = days[now.getDay()]
    const mas = months[now.getMonth()]
    const bosor = now.getFullYear()



    hours.innerHTML = formet(formet_12(formet_12_H)); //for 12h formet
    menutes.innerHTML = minit;
    second.innerHTML = sekent;
    ampm.innerHTML = d_n(hoursH) //for am and pm

    day.innerHTML = din;
    monthName.innerHTML = mas
    year.innerHTML = bosor
    


}, 1000);



// console.log(now)
// const hours = now.getHours();// ঘন্টা (0–23)
// console.log(hours)
// const minute = now.getMinutes(); // মিনিট (0–59)
// const second = now.getSeconds(); // সেকেন্ড (0–59)
// console.log(minute)
// console.log(second)
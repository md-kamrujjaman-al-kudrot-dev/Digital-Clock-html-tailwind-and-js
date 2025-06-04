
const hours = document.getElementById("hours")
const menutes = document.getElementById("menutes")
const second = document.getElementById("second")
const ampm = document.getElementById("ampm")


const formet = (n) => n < 10 ? `0${n}` : `${n}`;
const  d_n = (h) => h < 12 ? "AM" : "PM"

setInterval(() => {
    const now = new Date();
    
    const hoursH = now.getHours;//for am and pm


    const ghonta = formet(now.getHours());
    const minit = formet(now.getMinutes());
    const sekent = formet(now.getSeconds());

    hours.innerHTML = ghonta;
    menutes.innerHTML = minit;
    second.innerHTML = sekent;

    ampm.innerHTML = d_n(hoursH)//for am and pm
}, 1000);





// console.log(now)
// const hours = now.getHours();// ঘন্টা (0–23)
// console.log(hours)
// const minute = now.getMinutes(); // মিনিট (0–59)
// const second = now.getSeconds(); // সেকেন্ড (0–59)
// console.log(minute)
// console.log(second)
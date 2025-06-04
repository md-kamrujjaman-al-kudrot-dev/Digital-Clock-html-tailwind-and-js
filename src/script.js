
const hours = document.getElementById("hours")
const menutes = document.getElementById("menutes")
const second = document.getElementById("second")
const ampm = document.getElementById("ampm")


const formet = (n) => n < 10 ? `0${n}` : `${n}`;


setInterval(() => {
    const now = new Date();

    


    const ghonta = formet(now.getHours());
    const minit = formet(now.getMinutes());
    const sekent = formet(now.getSeconds());

    hours.innerHTML = ghonta;
    menutes.innerHTML = minit;
    second.innerHTML = sekent;

    
}, 1000);





// console.log(now)
// const hours = now.getHours();// ঘন্টা (0–23)
// console.log(hours)
// const minute = now.getMinutes(); // মিনিট (0–59)
// const second = now.getSeconds(); // সেকেন্ড (0–59)
// console.log(minute)
// console.log(second)
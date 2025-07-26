// weather code

// input
const enterButton = document.getElementById("EnterButton")
const apiKey = "8de14a78891a0f2d07d27dfb63d1f271";

const temp = document.getElementById("temp")
const OutputName = document.getElementById("cityname")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const inputValue = document.getElementById("inputValue");
const errorMessage = document.getElementById("errorMessage")


enterButton.addEventListener("click", function () {
    const cityName = document.getElementById("inputValue").value.trim();

    if (cityName === "") {
        // alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                errorMessage.innerHTML = "City not found. Please enter a valid city name."
                temp.innerHTML = "";
                humidity.innerHTML = "";
                wind.innerHTML = "";
                OutputName.innerHTML = "";
                return;
            }
            else {
                console.log(data)
                errorMessage.innerHTML = ""
                temp.innerHTML = (`${data.main.temp} &deg;C`)
                humidity.innerHTML = (`${data.main.humidity} % <p>Humidity</p>`)
                wind.innerHTML = (`${data.wind.speed} km/h <p>Wind Speed</p>`)
                OutputName.innerHTML = (data.name)
            }

        })
        .catch(error => {
            console.error("Error:", error)
        })
})


inputValue.addEventListener("keydown", () => {
    const cityName = document.getElementById("inputValue").value.trim();

    if (cityName === "") {
        // alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                errorMessage.innerHTML = "City not found. Please enter a valid city name."
                temp.innerHTML = "";
                humidity.innerHTML = "";
                wind.innerHTML = "";
                OutputName.innerHTML = "";
                return;
            }
            else {
                console.log(data)
                errorMessage.innerHTML = ""
                temp.innerHTML = (`${data.main.temp} &deg;C`)
                humidity.innerHTML = (`${data.main.humidity} % <p>Humidity</p>`)
                wind.innerHTML = (`${data.wind.speed} km/h <p>Wind Speed</p>`)
                OutputName.innerHTML = (data.name)
            }

        })
        .catch(error => {
            console.error("Error:", error)
        })
})







// **************clock code************

const hours = document.getElementById("hours")
const menutes = document.getElementById("menutes")
const second = document.getElementById("second")
const ampm = document.getElementById("ampm")
const day = document.getElementById("Day")
const monthName = document.getElementById("month")
const year = document.getElementById("year")

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
    const date = now.getDate()



    hours.innerHTML = formet(formet_12(formet_12_H)); //for 12h formet
    menutes.innerHTML = minit;
    second.innerHTML = sekent;
    ampm.innerHTML = d_n(hoursH) //for am and pm

    day.innerHTML = din;
    monthName.innerHTML = ` ${date} ${mas}`
    year.innerHTML = bosor



}, 1000);







// console.log(now)
// const hours = now.getHours();// ঘন্টা (0–23)
// console.log(hours)
// const minute = now.getMinutes(); // মিনিট (0–59)
// const second = now.getSeconds(); // সেকেন্ড (0–59)
// console.log(minute)
// console.log(second)
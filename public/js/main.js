const submitBtn = document.getElementById("submitBtn");
const CityName = document.getElementById("cityName");
const City_Name = document.getElementById("city_name");
const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status")

const getingo = async(event)=>{
    event.preventDefault();
    let cityVal = CityName.value;
    if (cityVal === "") {
        City_Name.innerText = `Plz write the name before search`
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&APPID=812887d115cb95b9e4ab03f8de9af3d6`;
            const response = await fetch(url);
            const data =await response.json()
            console.log(data);

            City_Name.innerText = `${data.name},  ${data.sys.country}`;
            temp.innerText = `${data.main.temp}`
            // temp_status.innerText = data.weather[0].main;
            const tempMood = data.weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun'></i>"
            }else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain'></i>"
            }
             else {
                temp_status.innerHTML = "<i class='fas fa-cloud'></i>"
            }
        } catch (error) {
            console.log(error)
        }
    } 
}

// date and time 
const wekday = document.getElementById("day");
const today_date = document.getElementById("today_date")

const getCurrentDay = ()=>{
    var weekday = new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()]

    return day;
};
wekday.innerText = getCurrentDay();


var months = [
    "Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"
]
var now = new Date();
var month = months[now.getMonth()]
var day = now.getDate();

today_date.innerText = `${day} ${month}`

submitBtn.addEventListener("click",getingo)
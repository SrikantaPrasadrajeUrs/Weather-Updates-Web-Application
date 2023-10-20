let cityname = document.getElementById('city-name');
let countryname = document.getElementById('country-name')
let cityvalue = document.getElementById('search-bar')
let temperature = document.getElementById('properties')
let image = document.getElementById('img1')

let search = async () => {
    if (cityvalue.value.length == 0) {
        alert("Please enter city name for searching")
    } else {
        try {
            let url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityvalue.value + "&units=metric&appid=1cb6532aea3c298a830a71380eace21e"
            let response = await fetch(url)
            let result = await response.json()
            cityname.textContent = result.name
            countryname.textContent = result.sys.country
            temperature.textContent = result.main.temp
            if (result.main.temp > 35) {
                image.src = "https://geographical.co.uk/wp-content/uploads/Saharasunset-2.jpg"
                temperature.style.color='red';
            }
           if (result.main.temp < 20) {
                image.src = "https://images.unsplash.com/photo-1584395631446-e41b0fc3f68d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWFzfGVufDB8fDB8fHww"
                
            }
            if (result.main.temp >=20&&result.main.temp <=35) {
                image.src = "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"
                temperature.style.color='green';
            }
        } catch {
            alert("Please enter a valid city name")
        }
    }
}

const res = await fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=roses"
)
const data = await res.json()
    console.log(data.urls.regular);
    document.body.style.backgroundImage = `url(${data.urls.regular})`; //Remember to change to full
    document.getElementById("author").textContent = `By: ${data.user.name}`;

  // .catch(err => {
  //   document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI4MzQyNjJ8&ixlib=rb-4.0.3&q=80&w=1080)`;
  //   document.getElementById("author").textContent = `By: ${data.user.name}`;
  // });

  const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  if (!res.ok) {
    throw Error("Something went wrong");
  }
  const data = await res.json()
  
    document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
    document.getElementById("crypto").innerHTML += `
        <p>🎯:R${data.market_data.current_price.zar}</p>
        <p>⬆️:R${data.market_data.high_24h.zar}</p>
        <p>⬇️:R${data.market_data.low_24h.zar}</p>
        
        `;

  .catch((err) => console.error(err));

//Time display

function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-ZA",
    { timeStyle: "short" }
  );
}

setInterval(getCurrentTime, 1000);

//Weather

//Fetching the weather with location
navigator.geolocation.getCurrentPosition(async position => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        //Checks if the data was available
        throw Error("Weather data not available");
      }
      return res.json();
    })

    //Icon and display of temperature
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
              <img src=${iconUrl} />
              <p class="weather-temp">${Math.round(data.main.temp)}ºC</p>
              <p class="weather-city">${data.name}</p>
          `;
    })
    .catch((err) => console.error(err));
});

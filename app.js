
async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '442b5970125b9ef13d72c41952a8f074';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    const weather = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;

    document.getElementById('weather').innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>Temperature:</strong> ${temp} °C</p>
      <p><strong>Weather:</strong> ${weather}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
    `;
  } catch (error) {
    document.getElementById('weather').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

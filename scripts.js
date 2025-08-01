// Javascipt file for weather api integration
const apiKey = ''; // Replace with actual WeatherAPI key

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const errorEl = document.getElementById('error');
  const card = document.getElementById('weatherCard');

  errorEl.textContent = '';
  card.classList.add('hidden');
  card.innerHTML = '';

  if (!city) {
    errorEl.textContent = 'Please enter a city name.';
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    const { location, current } = data;

    // Printing section
    card.innerHTML = `
      <h2>${location.name}, ${location.country}</h2>
      <img src="https:${current.condition.icon}" alt="weather icon" />
      <p><strong>Condition:</strong> ${current.condition.text}</p>
      <p><strong>Temperature:</strong> ${current.temp_c}°C</p>
      <p><strong>Humidity:</strong> ${current.humidity}%</p>
      <p><strong>Wind:</strong> ${current.wind_kph} km/h</p>
      <p><strong>Last Updated:</strong> ${current.last_updated}</p>
    `;

    card.classList.remove('hidden');
  } catch (error) {
    console.error("WeatherAPI Error:", error.message);
    errorEl.textContent = error.message || 'Could not fetch weather data.';
  }
}

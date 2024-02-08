import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'b5f27c79f4ae8f6ab57afbeb539d7f35';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    APPID: API_KEY,
    units: 'metric',
  },
});

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axiosInstance.get('/weather', {
      params: {
        q: city,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Unable to fetch weather data');
  }
};

export const fetchForecastData = async (city: string) => {
  try {
    const response = await axiosInstance.get('/forecast', {
      params: {
        q: city,
      },
    });
    return response.data.list;
  } catch (error) {
    throw new Error('Unable to fetch forecast data');
  }
};

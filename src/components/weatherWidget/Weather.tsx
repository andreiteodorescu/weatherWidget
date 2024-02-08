import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from './weatherAPI';
import WeatherHeader from './WeatherHeader';
import Today from './Today';
import Values from './Values';
import LoadingComponent from '../ui/LoadingComponent';
import ErrorComponent from '../ui/ErrorComponent';

type WeatherProps = {
    location: string;
};

export default function Weather({ location }: WeatherProps) {
    const { data: weatherData, isLoading: weatherLoading, isError: weatherError } = useQuery({
        queryKey: ['weather'],
        queryFn: () => fetchWeatherData(location),
        staleTime: 1000 * 60
      });
    
      if (weatherLoading) return <LoadingComponent message="Loading today's weather..." />;
      if (weatherError) return <ErrorComponent message="An unexpected error occurred. Please refresh the page and try again." />;

    return (
        <>
            <WeatherHeader locationName={weatherData.name} description={weatherData.weather[0].description} />
            <Today 
                temperature={weatherData.main.temp} 
                minTemperature={weatherData.main.temp_min} 
                maxTemperature={weatherData.main.temp_max} 
                weatherIconUrl={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                description={weatherData.weather[0].description} />

            <Values 
                windSpeed={weatherData.wind.speed}
                windDeg={weatherData.wind.deg} 
                humidity={weatherData.main.humidity}
                sunrise={weatherData.sys.sunrise}
                sunset={weatherData.sys.sunset} />
        </>
    );
}
import { useQuery } from '@tanstack/react-query';
import { fetchForecastData } from './weatherAPI';
import ForecastList from './ForecastList';
import LoadingComponent from '../ui/LoadingComponent';
import ErrorComponent from '../ui/ErrorComponent';

interface ForecastProps {
  location: string;
}

interface ForecastData {
  dt: number;
  dt_txt: string;
  weather: { icon: string, description: string }[];
  main: {
      temp_min: number;
      temp_max: number;
  };
}

const transformForcast = (data: any) =>
    data.map((forecast: ForecastData) => ({
      time: forecast.dt,
      timeString: forecast.dt_txt,
      weatherDescription: forecast.weather[0].description,
      weatherIconUrl: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`,
      minTemperature: forecast.main.temp_min,
      maxTemperature: forecast.main.temp_max,
}));

export default function Forecast({ location }: ForecastProps) {
  const { data: forecastData, isLoading: forecastLoading, isError: forecastError } = useQuery({
    queryKey: ['forecastData'],
    queryFn: () => fetchForecastData(location),
    staleTime: 1000 * 60 * 30,
    select: transformForcast,
  });

  if (forecastLoading) return <LoadingComponent message="Loading forecast..." />;
  if (forecastError) return <ErrorComponent message="An unexpected error occurred" />;

  return (
    <ForecastList forecastData={forecastData}
    />
  );
}

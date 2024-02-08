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

export default function Forecast({ location }: ForecastProps) {
  const { data: forecastData, isLoading: forecastLoading, isError: forecastError } = useQuery({
    queryKey: ['forecastData'],
    queryFn: () => fetchForecastData(location),
    staleTime: 1000 * 60 * 30,
  });

  if (forecastLoading) return <LoadingComponent message="Loading forecast..." />;
  if (forecastError) return <ErrorComponent message="An unexpected error occurred. Please refresh the page and try again." />;

  const forecastDataFiltered = forecastData.map((data: ForecastData) => ({
    time: data.dt,
    timeString: data.dt_txt,
    weatherDescription: data.weather[0].description,
    weatherIconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    minTemperature: data.main.temp_min,
    maxTemperature: data.main.temp_max,
  }));

  return (
    <ForecastList forecastData={forecastDataFiltered}
    />
  );
}

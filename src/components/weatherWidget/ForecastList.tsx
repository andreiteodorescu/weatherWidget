import classes from './forecastList.module.scss';
import ForecastListItem from './ForecastListItem';

interface ForecastListProps {
  forecastData: {
    time: number;
    timeString: string;
    weatherIconUrl: string;
    weatherDescription: string;
    minTemperature: number;
    maxTemperature: number;
  }[];
}

interface ForecastItem {
  time: number;
  minTemperature: number;
  maxTemperature: number;
}

const processForecastData = (item: ForecastItem) => {
  const date = new Date(item.time * 1000);
  const formattedHour = date.getUTCHours() < 10 ? `0${date.getUTCHours()}` : date.getUTCHours();
  const formattedMinute = date.getUTCMinutes() < 10 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes();

  const processedItem = {
    dayOfWeek: date.toLocaleString('en-US', { weekday: 'short' }),
    formattedTime: `${formattedHour}:${formattedMinute}`,
    roundedMinTemperature: Math.trunc(item.minTemperature),
    roundedMaxTemperature: Math.trunc(item.maxTemperature)
  };

  return processedItem;
};

export default function ForecastList({ forecastData }: ForecastListProps) {
  return (
    <section className={classes.weatherWidgetForcast}>
      <ul>
        {forecastData.map((dayData) => {
          const processedItem = processForecastData(dayData);

          return <ForecastListItem 
                    key={dayData.time.toString()} 
                    timeString={dayData.timeString} 
                    weatherIconUrl={dayData.weatherIconUrl} 
                    weatherDescription={dayData.weatherDescription}
                    processedItem={processedItem} />;
        })}
      </ul>
    </section>
  );
}
import classes from './forecastList.module.scss'

interface ForecastListItemData {
    timeString: string;
    weatherIconUrl: string;
    weatherDescription: string;
    processedItem: {
      dayOfWeek: string;
      formattedTime: string;
      roundedMinTemperature: number;
      roundedMaxTemperature: number;
    };
  }

export default function ForecastListItem({ timeString, weatherIconUrl, weatherDescription, processedItem }: ForecastListItemData) {

  return (
    <li className="hightlightRounded">
        <time dateTime={timeString}>{processedItem.dayOfWeek}</time>
        <time dateTime={processedItem.formattedTime}>{processedItem.formattedTime}</time>
        <img src={weatherIconUrl} alt={`${weatherDescription} icon`} />
        <p className={classes.weatherWidgetForcastDeg}>{processedItem.roundedMinTemperature}° ~ {processedItem.roundedMaxTemperature}°</p>
    </li>
  );
}
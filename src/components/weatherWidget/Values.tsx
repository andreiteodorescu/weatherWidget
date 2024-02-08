import classes from './values.module.scss';

interface ValuesProps {
  windSpeed: number;
  windDeg: number;
  humidity: number;
  sunrise: number;
  sunset: number;
}

export default function Values({ windSpeed, windDeg, humidity, sunrise, sunset }: ValuesProps) {
  const sunriseTime = new Date(sunrise * 1000);
  const sunriseHour = sunriseTime.getHours();
  const sunriseMinute = sunriseTime.getMinutes();
  const sunsetTime = new Date(sunset * 1000);
  const sunsetHour = sunsetTime.getHours();
  const sunsetMinute = sunsetTime.getMinutes();

  return (
    <ul className={classes.weatherWidgetValues}>
      <li className="hightlightRounded"><span>Wind</span> {windSpeed} m/s {windDeg}&deg;</li>
      <li className="hightlightRounded"><span>Humidity</span> {humidity}</li>
      <li className="hightlightRounded"><span>Sunrise</span> {`${sunriseHour}:${sunriseMinute}`}</li>
      <li className="hightlightRounded"><span>Sunset</span> {`${sunsetHour}:${sunsetMinute}`}</li>
    </ul>
  );
}

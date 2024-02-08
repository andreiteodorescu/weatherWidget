import classes from './today.module.scss';

interface TodayProps {
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  weatherIconUrl: string;
  description: string;
}

export default function Today({ temperature, minTemperature, maxTemperature, weatherIconUrl, description }: TodayProps) {
  const roundedTemperature = Math.trunc(temperature);
  const roundedMinTemperature = Math.trunc(minTemperature);
  const roundedMaxTemperature = Math.trunc(maxTemperature);

  return (
    <section className={`${classes.weatherWidgetToday} hightlightRounded`}>
        <div className={classes.weatherWidgetTodayTemperature}>
          {roundedTemperature}°C
        </div>
        <img className={classes.weatherWidgetTodayIcon} src={weatherIconUrl} alt={`${description} icon`} />
        <div className={classes.weatherWidgetTodayMinmax}>
          <div>
            <p><span>Min</span> {roundedMinTemperature}°C</p>
            <p><span>Max</span> {roundedMaxTemperature}°C</p>
          </div>
        </div>
    </section>
  );
}
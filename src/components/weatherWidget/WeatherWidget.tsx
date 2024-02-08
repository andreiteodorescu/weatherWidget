import Weather from './Weather';
import Forecast from './Forecast';
import classes from './weatherWidget.module.scss';

export type WeatherWidgetProps = {
    location: string;
};

export default function WeatherWidget({ location }: WeatherWidgetProps) {
  return (
    <article className={classes.weatherWidget}>
        <Weather location={location} />
        <Forecast location={location} />
    </article>
  );
}

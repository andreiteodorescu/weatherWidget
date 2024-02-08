import classes from './weatherHeader.module.scss';

type WeatherHeaderProps = {
    locationName: string;
    description: string;
};

export default function WeatherHeader({ locationName, description }: WeatherHeaderProps) {
    return (
        <h2 className={classes.weatherWidgetHeadingLocation}>
            {locationName}
            <span>{description}</span>
        </h2>
    )
}

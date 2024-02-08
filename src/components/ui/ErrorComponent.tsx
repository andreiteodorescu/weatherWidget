import classes from './errorComponent.module.scss';

export default function ErrorComponent(props: { message: string }) {
    return (
        <div className={classes.errorContainer}>
            <p>{props.message}</p>
        </div>
    );
}
import classes from './loadingComponent.module.scss';

export default function LoadingComponent(props: { message: string }) {
    return (
        <div className={classes.loadingContainer}>
            <div className={classes.spinner}></div>
            <p>{props.message}</p>
        </div>
    );
}
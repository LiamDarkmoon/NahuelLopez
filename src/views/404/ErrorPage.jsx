import { ReactComponent as Error } from '../../assets/404.svg'

const ErrorPage = () => {
    return (
        <div className="pg text-center">
            <h1 className="tf"> ¡Sorry, we&apos;ll be right Here! </h1>
            <h2> ... </h2>
            <h3 className="tf mb-5"> Give us a minute and comeback </h3>
            <Error/>
        </div>
    );
}

export default ErrorPage;

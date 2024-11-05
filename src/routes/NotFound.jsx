import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <h3>The page is not found</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta officia error laboriosam. Ex culpa facilis vitae aspernatur in fugiat eveniet voluptates, dolore eaque ab. Veritatis aspernatur amet enim praesentium.</p>
            <p>Go to the <Link to="/">main page</Link></p>
        </div>
    );
}

export default NotFound;

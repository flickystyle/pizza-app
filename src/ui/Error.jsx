import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Что-то пошло не так 😢</h1>
            <p>%MESSAGE%</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
}

export default NotFound;

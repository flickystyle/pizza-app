import { useState } from 'react';

function CreateUser() {
    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                👋 Добро пожаловать! Пожалуйста напишите как к вам обращаться:
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== '' && (
                <div>
                    <button>Start ordering</button>
                </div>
            )}
        </form>
    );
}

export default CreateUser;

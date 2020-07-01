import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VerifyAge = () => {
    const { age, setAge } = useState(0);

    return (
        <header className="linkcont">
            <Link to = '/log-in' className="linkz">Log In</Link>
            <Link to = '/register' className="linkz">Sign Up</Link>
            <Link to = '/dashboard' className="linkz">Dashboard</Link>
            <Link to = '/strains' className="linkz">Strains</Link>
        </header>
    )
}

export default VerifyAge;
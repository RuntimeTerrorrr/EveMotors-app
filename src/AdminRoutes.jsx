import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminRoute({ children }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const checkToken = localStorage.getItem('token');

        const hasValidToken = checkToken();
        setLoading(false);

        if (!hasValidToken) {
            navigate('/login');
        }
    }, [navigate]);

    return loading ? <div>Loading...</div> : <>{children}</>;
}

export default AdminRoute;

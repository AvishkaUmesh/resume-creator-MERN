import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuthRedirectHandler = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const user = params.get('user');
		const token = params.get('token');

		if (user && token) {
			localStorage.setItem('user', user);
			localStorage.setItem('token', token);
			// Remove query parameters from URL
			window.history.replaceState({}, document.title, window.location.pathname);
			navigate('/');
		} else {
			navigate('/login');
		}
	}, [navigate]);

	return <div>Loading...</div>;
};

export default OAuthRedirectHandler;

import { Button, Form, Input, message, Spin } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/authentication.css';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [csrfToken, setCsrfToken] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const fetchCsrfToken = async () => {
			const { data } = await axios.get('/api/csrf-token');
			setCsrfToken(data.csrfToken);
		};
		fetchCsrfToken();

		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			navigate('/');
		}
	}, []);

	const onFinish = async (values) => {
		setLoading(true);
		try {
			const user = await axios.post('/api/auth/login', values, {
				headers: {
					'CSRF-Token': csrfToken,
				},
			});
			setLoading(false);
			message.success('Login successful');
			console.log(user.data);
			localStorage.setItem('user', JSON.stringify(user.data.user));
			localStorage.setItem('token', user.data.token);
			navigate('/');
		} catch (error) {
			setLoading(false);
			message.error(error.response.data.message);
		}
	};
	const onFinishFailed = (errorInfo) => {
		message.error('Please enter all data correctly');
	};

	const handleGoogleLogin = () => {
		window.location.href = '/api/auth/google';
	};

	return (
		<div className="auth-parent">
			{loading && <Spin size="large" />}
			{!loading && (
				<Form
					name="register"
					style={{
						maxWidth: 400,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					layout="vertical"
				>
					<h1>Login</h1>
					<hr />
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<div className="d-flex align-center justify-content-between">
						<Link to="/register">Click here to Register</Link>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								LOGIN
							</Button>
						</Form.Item>
					</div>
					<div className="d-flex align-center justify-content-between">
						<Form.Item>
							<GoogleButton onClick={handleGoogleLogin}>Login with Google</GoogleButton>
						</Form.Item>
					</div>
				</Form>
			)}
		</div>
	);
};
export default Login;

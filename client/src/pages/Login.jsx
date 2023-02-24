import { Button, Form, Input, message, Spin } from 'antd';
import '../assets/css/authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			navigate('/');
		}
	}, []);

	const onFinish = async (values) => {
		setLoading(true);
		try {
			const user = await axios.post('/api/auth/login', values);
			setLoading(false);
			message.success('Login successful');
			localStorage.setItem('user', JSON.stringify(user.data));
			navigate('/');
		} catch (error) {
			setLoading(false);
			message.error('Login failed');
		}
	};
	const onFinishFailed = (errorInfo) => {
		message.error('Please enter all data correctly');
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
							<Button
								type="primary"
								htmlType="submit"
							>
								LOGIN
							</Button>
						</Form.Item>
					</div>
				</Form>
			)}
		</div>
	);
};
export default Login;

import { Button, Form, Input, message } from 'antd';
import '../assets/css/authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const navigate = useNavigate();
	const onFinish = async (values) => {
		try {
			const user = await axios.post('/auth/login', values);
			message.success('Login successful');
			localStorage.setItem('user', JSON.stringify(user));
			navigate('/');
		} catch (error) {
			message.error('Login failed');
		}
	};
	const onFinishFailed = (errorInfo) => {
		message.error('Please enter all data correctly');
	};

	return (
		<div className="auth-parent">
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
		</div>
	);
};
export default Login;

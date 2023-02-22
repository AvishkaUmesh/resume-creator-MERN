import { Button, Form, Input, message } from 'antd';
import '../assets/css/authentication.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const onFinish = async (values) => {
		try {
			await axios.post('/auth/register', values);
			message.success('Registration successful');
		} catch (error) {
			message.error('Registration failed');
		}
	};
	const onFinishFailed = (errorInfo) => {
		message.error('Please enter all data correctly integrated');
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
				<h1>Register</h1>
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

				<Form.Item
					label="Confirm Password"
					name="confirmPassword"
					rules={[
						{
							required: true,
							message: 'Please confirm password!',
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<div className="d-flex align-center justify-content-between">
					<Link to="/login">Click here to Login</Link>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
						>
							REGISTER
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};
export default Register;

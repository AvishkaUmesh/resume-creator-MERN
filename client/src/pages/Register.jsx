import { Button, Form, Input, message } from 'antd';
import '../assets/css/authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Register = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [form] = Form.useForm();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			navigate('/');
		}
	}, []);

	const onFinish = async (values) => {
		try {
			await axios.post('/api/auth/register', values);
			setLoading(false);
			form.resetFields();
			navigate('/login');
			message.success('Registration successful please login');
		} catch (error) {
			setLoading(false);
			message.error(error.response.data.message);
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
					form={form}
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
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject(
										new Error('The two passwords that you entered do not match!')
									);
								},
							}),
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
			)}
		</div>
	);
};
export default Register;

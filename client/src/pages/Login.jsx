import { Button, Form, Input } from 'antd';
import '../assets/css/authentication.css';
import { Link } from 'react-router-dom';

const Login = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
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

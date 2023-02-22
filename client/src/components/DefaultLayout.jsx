import { Button, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../assets/css/default-layout.css';

const DefaultLayout = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user'));
	const navigate = useNavigate();

	const items = [
		{
			key: '1',
			label: <a href="/">Home</a>,
		},
		{
			key: '2',
			label: <a href="/profile">Profile</a>,
		},
		{
			key: '3',
			label: (
				<span
					onClick={() => {
						localStorage.removeItem('user');
						navigate('/login');
					}}
				>
					Logout
				</span>
			),
		},
	];

	return (
		<div className="layout">
			<div className="header">
				<h1>Resume Creator</h1>
				<Dropdown
					menu={{
						items,
					}}
					placement="bottomRight"
				>
					<Button>{user.data.username}</Button>
				</Dropdown>
			</div>
			<div className="content">{children}</div>
		</div>
	);
};
export default DefaultLayout;

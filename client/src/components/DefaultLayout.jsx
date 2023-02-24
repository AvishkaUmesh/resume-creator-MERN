import { Button, Dropdown } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/default-layout.css';

const DefaultLayout = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user'));
	const navigate = useNavigate();

	const items = [
		{
			key: '1',
			label: <Link to="/">Home</Link>,
		},
		{
			key: '2',
			label: <Link to="/profile">Profile</Link>,
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
					<Button>{user.username}</Button>
				</Dropdown>
			</div>
			<div
				className="content"
				style={{ overflow: 'scroll' }}
			>
				{children}
			</div>
		</div>
	);
};
export default DefaultLayout;

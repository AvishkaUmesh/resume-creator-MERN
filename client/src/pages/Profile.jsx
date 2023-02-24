import { Button, Form, message, Spin, Tabs } from 'antd';
import { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import ExperienceProjects from '../components/ExperienceProjects';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const [loading, setLoading] = useState(false);
	const userObj = JSON.parse(localStorage.getItem('user'));
	const navigate = useNavigate();

	const onFinish = async (values) => {
		setLoading(true);
		try {
			const user = await axios.post('/api/auth/update', { ...values, _id: userObj._id });
			localStorage.setItem('user', JSON.stringify(user.data));
			setLoading(false);
			navigate('/profile');
			message.success('Update successful');
		} catch (error) {
			setLoading(false);
			message.error('Update failed');
		}
	};
	const items = [
		{
			key: '1',
			label: `Personal Info`,
			children: <PersonalInfo />,
		},
		{
			key: '2',
			label: `Skills and Education`,
			children: <SkillsEducation />,
		},
		{
			key: '3',
			label: `Experience and Projects`,
			children: <ExperienceProjects />,
		},
	];

	return (
		<DefaultLayout>
			{loading && <Spin size="large" />}
			{!loading && (
				<div className="update-profile">
					<h2>Update Profile</h2>
					<hr />
					<Form
						layout="vertical"
						onFinish={onFinish}
						initialValues={{
							...userObj,
						}}
					>
						<Tabs
							defaultActiveKey="1"
							items={items}
						/>
						<Button htmlType="submit">UPDATE</Button>
					</Form>
				</div>
			)}
		</DefaultLayout>
	);
};
export default Profile;

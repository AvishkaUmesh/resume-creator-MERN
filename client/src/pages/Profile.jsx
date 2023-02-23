import { Button, Form, Tabs } from 'antd';
import DefaultLayout from '../components/DefaultLayout';
import ExperienceProjects from '../components/ExperienceProjects';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';

const Profile = () => {
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
			<div className="update-profile">
				<h2>Update Profile</h2>
				<Form
					layout="vertical"
					onFinish={(val) => {
						console.log(val);
					}}
				>
					<Tabs
						defaultActiveKey="1"
						items={items}
					/>
					<Button htmlType="submit">UPDATE</Button>
				</Form>
			</div>
		</DefaultLayout>
	);
};
export default Profile;

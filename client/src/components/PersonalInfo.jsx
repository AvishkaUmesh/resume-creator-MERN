import { Form, Input } from 'antd';

const PersonalInfo = () => {
	return (
		<div>
			<div className="row">
				<div className="col-md-4">
					<Form.Item
						name="firstName"
						label="FirstName"
						rules={[
							{
								required: true,
								message: 'Please enter FistName!',
							},
						]}
					>
						<Input />
					</Form.Item>
				</div>
				<div className="col-md-4">
					<Form.Item
						name="lastName"
						label="LastName"
						rules={[
							{
								required: true,
								message: 'Please enter LastName!',
							},
						]}
					>
						<Input />
					</Form.Item>
				</div>
				<div className="col-md-4">
					<Form.Item
						name="email"
						label="Email"
						rules={[
							{
								required: true,
								message: 'Please enter Email!',
							},
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
						]}
					>
						<Input />
					</Form.Item>
				</div>
				<div className="col-md-4">
					<Form.Item
						name="mobileNumber"
						label="Mobile Number"
						rules={[
							{
								required: true,
								message: 'Please enter Mobile Number!',
							},
							{
								pattern: /^[0-9]{10}$/,
								message: 'Please enter valid Mobile Number!',
							},
						]}
					>
						<Input />
					</Form.Item>
				</div>
				<div className="col-md-4">
					<Form.Item
						name="linkedIn"
						label="LinkedIn Link"
						rules={[
							{
								required: true,
								message: 'Please enter LinkedIn!',
							},
							{
								pattern:
									/^(https?:\/\/)?(www\.)?((linkedin\.com\/in\/)|(linkedin\.com\/pub\/)|(linkedin\.com\/in\/))([a-zA-Z0-9]+[-_]?[a-zA-Z0-9]+)(\/)?$/,

								message: 'Please enter valid LinkedIn Link!',
							},
						]}
					>
						<Input />
					</Form.Item>
				</div>

				<div className="col-md-12">
					<Form.Item
						name="address"
						label="Address"
						rules={[
							{
								required: true,
								message: 'Please enter Address!',
							},
						]}
					>
						<Input.TextArea />
					</Form.Item>
				</div>

				<div className="col-md-12">
					<Form.Item
						name="objective"
						label="Career Objective"
						rules={[
							{
								required: true,
								message: 'Please enter Career Objective!',
							},
						]}
					>
						<Input.TextArea />
					</Form.Item>
				</div>
			</div>
			{/* row ends */}
		</div>
	);
};
export default PersonalInfo;

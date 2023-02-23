import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';

const SkillsEducation = () => {
	return (
		<div>
			<h4>Education</h4>
			<br />
			<Form.List name="education">
				{(fields, { add, remove }) => (
					<>
						<div className="row">
							{fields.map(({ key, name, ...restField }) => (
								<React.Fragment key={key}>
									<div className="col-md-3">
										<Form.Item
											{...restField}
											name={[name, 'qualification']}
											rules={[
												{
													required: true,
													message: 'Missing Qualification',
												},
											]}
										>
											<Input placeholder="Qualifications" />
										</Form.Item>
									</div>
									<div className="col-md-2">
										<Form.Item
											{...restField}
											name={[name, 'percentage']}
											rules={[
												{
													required: true,
													message: 'Missing Percentage',
												},
											]}
										>
											<Input placeholder="Percentage" />
										</Form.Item>
									</div>
									<div className="col-md-3">
										<Form.Item
											{...restField}
											name={[name, 'institute']}
											rules={[
												{
													required: true,
													message: 'Missing Institute',
												},
											]}
										>
											<Input placeholder="Institute" />
										</Form.Item>
									</div>
									<div className="col-md-2">
										<Form.Item
											{...restField}
											name={[name, 'yearRange']}
											rules={[
												{
													required: true,
													message: 'Missing Year Range',
												},
											]}
										>
											<Input placeholder="Year Range" />
										</Form.Item>
									</div>
									<div className="col-md-2">
										<MinusCircleOutlined
											style={{ fontSize: 20, color: 'red' }}
											onClick={() => remove(name)}
										/>
									</div>
								</React.Fragment>
							))}
						</div>
						<Form.Item>
							<Button
								type="dashed"
								onClick={() => add()}
								block
								icon={<PlusOutlined />}
							>
								Add Education
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>

			<hr />
			{/* skills */}
			<h4>Skills</h4>
			<br />
			<Form.List name="skills">
				{(fields, { add, remove }) => (
					<>
						<div className="row">
							{fields.map(({ key, name, ...restField }) => (
								<React.Fragment key={key}>
									<div className="col-md-4">
										<Form.Item
											{...restField}
											name={[name, 'technology']}
											rules={[
												{
													required: true,
													message: 'Missing Technology',
												},
											]}
										>
											<Input placeholder="Technology" />
										</Form.Item>
									</div>

									<div className="col-md-4">
										<Form.Item
											{...restField}
											name={[name, 'rating']}
											rules={[
												{
													required: true,
													message: 'Missing Rating',
												},
											]}
										>
											<Input placeholder="Rating" />
										</Form.Item>
									</div>

									<div className="col-md-4">
										<MinusCircleOutlined
											style={{ fontSize: 20, color: 'red' }}
											onClick={() => remove(name)}
										/>
									</div>
								</React.Fragment>
							))}
						</div>
						<Form.Item>
							<Button
								type="dashed"
								onClick={() => add()}
								block
								icon={<PlusOutlined />}
							>
								Add Skill
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
		</div>
	);
};
export default SkillsEducation;

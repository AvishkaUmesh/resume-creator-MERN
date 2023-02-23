import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';

const ExperienceProjects = () => {
	return (
		<div>
			<h4>Experience</h4>
			<br />
			<Form.List name="experience">
				{(fields, { add, remove }) => (
					<>
						<div className="row">
							{fields.map(({ key, name, ...restField }) => (
								<React.Fragment key={key}>
									<div className="col-md-3">
										<Form.Item
											{...restField}
											name={[name, 'company']}
											rules={[
												{
													required: true,
													message: 'Missing Company',
												},
											]}
										>
											<Input placeholder="Company" />
										</Form.Item>
									</div>
									<div className="col-md-2">
										<Form.Item
											{...restField}
											name={[name, 'years']}
											rules={[
												{
													required: true,
													message: 'Missing Years',
												},
												{
													pattern: new RegExp(/^[0-9]*$/),
													message: 'Years must be a number',
												},
											]}
										>
											<Input placeholder="Years" />
										</Form.Item>
									</div>
									<div className="col-md-3">
										<Form.Item
											{...restField}
											name={[name, 'place']}
											rules={[
												{
													required: true,
													message: 'Missing Place',
												},
											]}
										>
											<Input placeholder="Place" />
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
								Add Experience
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>

			<hr />
			{/* skills */}
			<h4>Projects</h4>
			<br />
			<Form.List name="projects">
				{(fields, { add, remove }) => (
					<>
						<div className="row">
							{fields.map(({ key, name, ...restField }) => (
								<React.Fragment key={key}>
									<div className="col-md-4">
										<Form.Item
											{...restField}
											name={[name, 'title']}
											rules={[
												{
													required: true,
													message: 'Missing Title',
												},
											]}
										>
											<Input placeholder="Title" />
										</Form.Item>
									</div>

									<div className="col-md-4">
										<Form.Item
											{...restField}
											name={[name, 'description']}
											rules={[
												{
													required: true,
													message: 'Missing Description',
												},
											]}
										>
											<Input.TextArea placeholder="Description" />
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
								Add Project
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
		</div>
	);
};
export default ExperienceProjects;

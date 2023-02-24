import React from 'react';
import '../../assets/css/template1.css';

function Template2() {
	const user = JSON.parse(localStorage.getItem('user'));
	return (
		<div className="template1-parent">
			<div className="top d-flex flex-column">
				<h1>
					{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
				</h1>
				<div>
					<p>{user.email}</p>
					<p>{user.mobileNumber}</p>
					<p>{user.address}</p>
				</div>
			</div>

			<div className="divider mt-3"></div>
			<div className="divider mt-1"></div>
			<div className="objective mt-3">
				<h3 style={{ backgroundColor: 'gray', padding: 10 }}>Objective</h3>
				<hr />
				<p>{user.objective}</p>
			</div>
			<div className="divider mt-3"></div>

			<div className="education mt-3">
				<h3 style={{ backgroundColor: 'gray', padding: 10 }}>Education</h3>
				<hr />
				{user.education.map((education, index) => {
					return (
						<div
							className="d-flex align-items-center"
							key={index}
						>
							<h6 style={{ width: 120 }}>
								<b>{education.yearRange} : </b>
							</h6>
							<p>
								<b>{education.qualification}</b> with <b>{education.percentage}%</b> in{' '}
								{education.institution}
							</p>
						</div>
					);
				})}
			</div>

			<div className="divider mt-3"></div>

			<div className="experience mt-3">
				<h3 style={{ backgroundColor: 'gray', padding: 10 }}>Experience</h3>
				<hr />
				{user.experience.map((exp, index) => {
					return (
						<div
							className="d-flex align-items-center"
							key={index}
						>
							<h6 style={{ width: 120 }}>
								<b>{exp.yearRange} : </b>
							</h6>
							<p>
								<b>{exp.company}</b> in <b>{exp.place}</b>
							</p>
						</div>
					);
				})}
			</div>

			<div className="divider mt-3"></div>

			<div className="projects mt-3">
				<h3 style={{ backgroundColor: 'gray', padding: 10 }}>Projects</h3>
				<hr />
				{user.projects.map((project, index) => {
					return (
						<div
							className="d-flex flex-column"
							key={index}
						>
							<h6>
								<b>
									{project.title} [{project.yearRange}]{' '}
								</b>
							</h6>
							<p>{project.description}</p>
						</div>
					);
				})}
			</div>

			<div className="divider mt-3"></div>

			<div className="projects mt-3">
				<h3 style={{ backgroundColor: 'gray', padding: 10 }}>Skills</h3>
				<hr />
				{user.skills.map((skill, index) => {
					return <p key={index}>{skill.technology}</p>;
				})}
			</div>
		</div>
	);
}

export default Template2;

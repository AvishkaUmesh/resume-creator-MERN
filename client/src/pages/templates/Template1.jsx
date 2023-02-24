import '../../assets/css/template1.css';

const Template1 = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	if (user) {
		return (
			<div className="template1-parent">
				<div className="top d-flex justify-content-between">
					<h1>
						{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
					</h1>
					<div>
						<p>{user.email}</p>
						<p>{user.mobileNumber}</p>
						<p>{user.address}</p>
					</div>
				</div>
				<div className="divider mt-5"></div>

				<div className="objective mt-5">
					<h3>Objective</h3>
					<hr />
					<p>{user.objective}</p>
				</div>

				<div className="divider mt-5"></div>

				<div className="education mt-5">
					<h3>Education</h3>
					<hr />
					{user.education.map((edu, index) => {
						return (
							<div
								className="d-flex align-items-center"
								key={index}
							>
								<h6 style={{ width: 120 }}>
									<strong>{edu.yearRange} : </strong>
								</h6>
								<p>
									{edu.qualification} with {edu.percentage}% in {edu.institute}
								</p>
								<p>{edu.year}</p>
							</div>
						);
					})}
				</div>

				<div className="divider mt-5"></div>

				<div className="experience mt-5">
					<h3>Experience</h3>
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
									{exp.company} in {exp.place}
								</p>
								<p>{exp.year}</p>
							</div>
						);
					})}
				</div>

				<div className="divider mt-5"></div>

				<div className="projects mt-5">
					<h3>Projects</h3>
					<hr />
					{user.projects.map((prj, index) => {
						return (
							<div
								className="d-flex flex-column"
								key={index}
							>
								<h6>
									<b>
										{prj.title} [{prj.yearRange}]{' '}
									</b>
								</h6>
								<p>{prj.description}</p>
							</div>
						);
					})}
				</div>

				<div className="divider mt-5"></div>

				<div className="skills mt-5">
					<h3>Skills</h3>
					<hr />
					{user.skills.map((prj, index) => {
						return (
							<div
								className="d-flex flex-column"
								key={index}
							>
								<p>{prj.technology}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
	return <Navigate to="/login" />;
};
export default Template1;

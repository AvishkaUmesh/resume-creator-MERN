import DefaultLayout from '../components/DefaultLayout';

import temp1img from '../assets/templates/template1.png';
import temp2img from '../assets/templates/template2.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	const selectTemplate = (id) => {
		navigate(`/templates/${id}`);
	};
	const templates = [
		{
			id: 1,
			name: 'Template 1',
			image: temp1img,
		},
		{
			id: 2,
			name: 'Template 2',
			image: temp2img,
		},
	];
	return (
		<DefaultLayout>
			<div className="row">
				{templates.map((template, index) => {
					return (
						<div
							className="col-md-3"
							key={template.id}
						>
							<div className="card">
								<img
									src={template.image}
									className="card-img-top"
									height={400}
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{template.name}</h5>
									<button
										className="btn btn-primary"
										onClick={selectTemplate.bind(null, index + 1)}
									>
										Select
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</DefaultLayout>
	);
};
export default Home;

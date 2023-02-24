import { useParams } from 'react-router-dom';
import DefaultLayout from '../../components/DefaultLayout';
import Template1 from './Template1';
import Template2 from './Template2';

function Templates() {
	const params = useParams();

	const getTemplate = () => {
		switch (params.id) {
			case '1':
				return <Template1 />;
			case '2':
				return <Template2 />;
			default:
				return <div>Not Found</div>;
		}
	};
	return <DefaultLayout>{getTemplate()}</DefaultLayout>;
}
export default Templates;

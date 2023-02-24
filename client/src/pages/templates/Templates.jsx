import { Button } from 'antd';
import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import DefaultLayout from '../../components/DefaultLayout';
import Template1 from './Template1';
import Template2 from './Template2';

function Templates() {
	const params = useParams();
	const componentRef = useRef();
	const navigate = useNavigate();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

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
	return (
		<DefaultLayout>
			<div className="d-flex justify-content-end my-5 mx-5">
				<Button
					onClick={() => {
						navigate('/');
					}}
					className="btn-back"
				>
					Back
				</Button>
				<Button
					className="mx-5"
					onClick={handlePrint}
				>
					Print
				</Button>
			</div>
			<div ref={componentRef}>{getTemplate()}</div>
		</DefaultLayout>
	);
}
export default Templates;

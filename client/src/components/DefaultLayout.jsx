import '../assets/css/default-layout.css';

const DefaultLayout = ({ children }) => {
	return (
		<div className="layout">
			<div className="header">
				<h1>Resume Creator</h1>
			</div>
			<div className="content">{children}</div>
		</div>
	);
};
export default DefaultLayout;

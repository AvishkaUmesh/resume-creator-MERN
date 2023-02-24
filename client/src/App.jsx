import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Templates from './pages/templates/Templates';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoutes>
								<Home />
							</ProtectedRoutes>
						}
					/>
					<Route
						path="/profile"
						element={
							<ProtectedRoutes>
								<Profile />
							</ProtectedRoutes>
						}
					/>
					<Route
						path="/templates/:id"
						element={
							<ProtectedRoutes>
								<Templates />
							</ProtectedRoutes>
						}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

export function ProtectedRoutes(props) {
	const user = JSON.parse(localStorage.getItem('user'));
	if (user) {
		return props.children;
	} else {
		return <Navigate to="/login" />;
	}
}

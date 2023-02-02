import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';

function AppRoutingOne() {

  return (
		<Router>
			<Routes>
				<Route path='/' element = {<HomePage />} />


				{/* Dejo siempre al final el ERROR 404 */}
				<Route path= '*' element = { <NotFoundPage /> } />
			</Routes>
		</Router>
	);
}

export default AppRoutingOne;

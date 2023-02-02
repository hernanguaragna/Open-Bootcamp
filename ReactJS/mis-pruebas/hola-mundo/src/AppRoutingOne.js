import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';

function AppRoutingOne() {

  return (
		<Router>
			<div>
				<aside>
					<Link to="/">| HOME|</Link>
					<Link to="/about">| ABOUT|</Link>
					<Link to="/faqs">| FAQs|</Link>
				</aside>
				<main>
			<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/faqs" element={<AboutPage />} />

					<Route path="*" element={<NotFoundPage />} />
			</Routes>
				</main>

			</div>
		</Router>
	);
}

export default AppRoutingOne;

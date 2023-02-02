import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profiles/ProfilePage';
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";

function AppRoutingOne() {

  return (
		<Router>
			<div>
				<aside>
					<Link to="/">| HOME|</Link>
					<Link to="/about">| ABOUT|</Link>
					<Link to="/faqs">| FAQs|</Link>
					<Link to="/profile">| Profile|</Link>
				</aside>
				<main>
			<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/faqs" element={<AboutPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/task" element={<TaskPage />} />
					<Route path="/task/:id" element={<TaskDetailPage />} />

					<Route path="*" element={<NotFoundPage />} />
			</Routes>
				</main>

			</div>
		</Router>
	);
}

export default AppRoutingOne;

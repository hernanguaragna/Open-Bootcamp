// import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashBoard';
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from './pages/404/NotFoundPage';
import Registerformik from "./components/pures/forms/registerFormik";




function AppRoutingFinal() {
  
//TODO change to value from sessionstorage for someting more dinamic
 let loggedIn = true;
 let isRegister = false;
//  let isLogin = false;

  return (
		<div>
			<Router>
				<Switch>
					{/* Redirections to protect the routes  */}
					<Route exact path=" ">
						{loggedIn ? (
							<Redirect from="/" to="/deshboard" />
						) : (
							<Redirect from="/" to="/login/" />
						)}
					</Route>
					{/* Redirection routes */}
					<Route exact path=" ">
						{isRegister ? (
							<Redirect from="/" to="/register" />
						) : (
							<Redirect from="/" to="/login/" />
						)}
					</Route>

					{/* Login routes  */}
					<Route exact path="/login" component={LoginPage} />

					{/* Dashboard routes  */} 
					<Route exact path="/dashboard">
						{loggedIn ? (
							<DashboardPage />
						) : (
							<Redirect from="/" to="/login/" />
						)}
					</Route>
					{/* Register routes  */}
					<Route exact path="/register" component={Registerformik} />

					<Route exact path="/register">
						{isRegister ? (
							<Registerformik />
						) : (
							<Redirect from="/" to="/login/" />
						)}
					</Route>
					{/* Task Routes */}
					

					


          {/* Not found */}
					<Route component={NotFoundPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default AppRoutingFinal;


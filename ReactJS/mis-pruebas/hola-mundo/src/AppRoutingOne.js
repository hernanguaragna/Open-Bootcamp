// import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
// import Statepage from './pages/home/StatePage';

import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from './pages/profiles/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDatailPage';
import LoginPage from './pages/auth/LoginPage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My fist Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  // useEffect(() => {
  //   logged = localStorage.getItem('credentials');
  //   console.log('User Logged?', logged)
  // }, [])

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>

        <main>
          <Switch> 
            <Route exact path='/' component={ HomePage } />
            {/* <Route exact path='/online-state' component={ Statepage } /> */}
            <Route path='/login' component= { LoginPage }>
              {
                  logged ? 
                    () => {
                      alert('You are logged in. Redirecting to home...')
                      return (<Redirect to='/'/>)
                    }
                  :
                  () => {
                    return (<LoginPage></LoginPage>)
                  }
              }
            </Route>
            <Route path='/(about|faqs)' component={ AboutPage } />
            <Route path='/profile' component={ ProfilePage }>
              {
                logged ? 
                <ProfilePage />
                :
                () => {
                  alert('You must be logged in. Redirecting to login...')
                  return (<Redirect to='/login'/>)
                }
              }
            </Route>
            <Route path='/tasks' component={ TaskPage } />
            <Route 
              exact
              path='/task/:id'
              render = {
                ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]} />)
              }
              >

            </Route>
            {/* 404 - Page No Found */}
            <Route component={ NotFoundPage } />
          </Switch>
        </main>

      </div>

    </Router>
  );
}

export default AppRoutingOne;


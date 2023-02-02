import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';


const AboutPage = () => {
    
    // const location = useLocation();
    const Navigate = (path) => {
			history.push(path);
		}
    const back = () => Navigate(-1);
    
    return (
			<div>
				<h1>About | FAQs</h1>
				<div>
					<button className="btn btn-primary" onClick ={()=>Navigate("/home")}>Go to Home</button>
					<button className="btn btn-primary" onClick={back}>
						Go Back
					</button>
				</div>
			</div>
		);
}

export default AboutPage;

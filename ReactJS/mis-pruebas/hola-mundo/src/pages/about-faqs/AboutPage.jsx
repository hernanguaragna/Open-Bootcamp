import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';


const AboutPage = () => {
    
    // const location = useLocation();
    const navigate = (path) => useNavigate.push(path);
    const back = () => navigate(-1);
    
    return (
			<div>
				<h1>About | FAQs</h1>
				<div>
					<button className="btn btn-primary">Go to Home</button>
					<button className="btn btn-primary" onClick={back}>
						Go Back
					</button>
				</div>
			</div>
		);
}

export default AboutPage;

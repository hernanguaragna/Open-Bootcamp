import React from 'react';
import {useNavigate} from 'react-router-dom';


const AboutPage = () => {
    
    // const location = useLocation();
    const navigate = useNavigate()
    const foward = (path) => {
			navigate.push(path)
		}
    const back = () => foward(-1);
    
    return (
			<div>
				<h1>About | FAQs</h1>
				<div>
					<button className="btn btn-primary" onClick ={()=>foward("/home")}>Go to Home</button>
					<button className="btn btn-primary" onClick={back}>
						Go Back
					</button>
				</div>
			</div>
		);
}

export default AboutPage;

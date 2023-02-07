import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';



const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
    }
);


const Loginformik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

   
    ////
	//?Function for when on clik in the button Register Account redirect to /login
	const history = useHistory();

    const isLogin = () => {
        history.push('/login');
    }
    const notRegister = () => {
        history.push('/register');
    }
/////

    return (
			<div>
				<h4>Login Formik</h4>
				<Formik
					// *** Initial values that the form will take
					initialValues={initialCredentials}
					// *** Yup Validation Schema ***
					validationSchema={loginSchema}
					// ** onSubmit Event
					onSubmit={async (values, { resetForm }) => {
						await new Promise((r) => setTimeout(r, 1000));
						alert(JSON.stringify(values, null, 2));
						// We save the data in the localstorage
						await localStorage.setItem("credentials", values);
						// history.push('/profile');
						// Reset the form values
						resetForm({ values: initialCredentials });
					}}>
					{/* We obtain props from Formik */}

					{({
						values,
						touched,
						errors,
						isSubmitting,
						handleChange,
						handleBlur,
					}) => (
						<Form>
							<div className="form-group mb-3">
								<label htmlFor="email">Email</label>
								<Field
									id="email"
									type="email"
									name="email"
									placeholder="example@email.com"
								/>

								{/* Email Errors */}
								{errors.email && touched.email && (
									<ErrorMessage name="email" component="div"></ErrorMessage>
								)}
							</div>

							<div className="form-group mb-3">
								<label htmlFor="password">Password</label>
								<Field
									id="password"
									name="password"
									placeholder="password"
									type="password"
								/>
								{/* Password Errors */}
								{errors.password && touched.password && (
									<ErrorMessage name="password" component="div"></ErrorMessage>
								)}
							</div>
							<div>
								<Link color="inherit" onClick={notRegister} >
									Create your account
								</Link>{" "}
							</div>

							<button
								type="submit"
								onClick={isLogin}
								className="btn btn-primary mt-2">
								Login
							</button>
							{isSubmitting ? <p>Login your credentials...</p> : null}
						</Form>
					)}
				</Formik>
			</div>
		);
}

export default Loginformik;



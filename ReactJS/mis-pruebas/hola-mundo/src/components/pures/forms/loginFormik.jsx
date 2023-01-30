import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.email("Invalid email address")
		.required("Required"),
});

const LoginFormik = () => {
	const initialCredentials = {
		email: "",
		password: "",
	};
	return (
		<div>
			<h4>Login Formik</h4>
			<Formik
				//*Initial values that the form required
				initialValues={initialCredentials}
				//*Yup validation schema
				validationSchema={loginSchema}
				//*On submit Event
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}>
				{/* we obtain props from Formik  */}
				{(props) => {
					const { values, touched, errors, isSubmitting } = props;

					return (
						<Form>
							<label htmlFor="email">E-mail</label>
							<Field
								id="email"
								name="email"
								placeholder="ejample@email.com"
								type="email"
							/>
                            {/* Email Errors */}
							{errors.email && touched.email && (
								<div className="error">
									<p> {errors.email} </p>
								</div>
							)}
							<label htmlFor="password">Password</label>
							<Field
								id="password"
								name="password"
								placeholder="Your password"
								type="password"
							/>

							<button type="submit">Submit</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default LoginFormik;

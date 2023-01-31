import React from 'react';
import { User } from '../../../models/user.class';
import {Formik, Form, Field, ErrorMessage} from 'Formik';
import * as Yup from "yup";
import { ROLES } from '../../../models/roles.enum';



const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape({
			username: Yup.string(),
		});
        

    const submit = (values) => {
        alert('Register user')
    }
    return (
        <div>
            
        </div>
    );
}

export default RegisterFormik;

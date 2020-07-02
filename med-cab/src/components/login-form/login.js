import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup } from 'reactstrap';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { SignIn, RegisterLink, Errors, Heading, FormLinks } from './logInStyles';
import { HeadingContainer, FormContainer } from '../sign-up-form/signUpStyles';
import { MainContainer } from '../../AppStyles';

// { values, errors, touched, status }

const LogIn = ({ values, errors, touched, status, handleSubmit }) => {
    // const [user, setUser] = useState([]);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
        // setUser({email:'', password:''});
    // }

    return (
        
        <SignIn>

            <HeadingContainer>
                <Heading>Welcome back!</Heading>
            </HeadingContainer>
            <FormContainer>
                <Form onSubmit={handleSubmit} className="formcont">
                    <FormGroup>
                    {/* E-Mail */}
                    <label htmlFor = 'email' className="labels">E-Mail:</label>
                    <Field type = 'text' name = 'email' className="logfield"/>
                    </FormGroup>
                    {touched.email && errors.email && (<Errors>{errors.email} </Errors>)}

                    <FormGroup>
                    {/* Password */}
                    <label htmlFor = 'password' className="labels">Password:</label>
                    <Field type = 'password' name = 'password' className="logfield1"/>
                    </FormGroup>
                    {touched.password && errors.password && (<Errors>{errors.password} </Errors>)}

                    <FormGroup className="buttons">
                        <Field type = 'submit' name = 'submit' value ='Log-In' />
                    </FormGroup>

                </Form>
                
            </FormContainer>     
            <FormLinks>
                <RegisterLink>
                    <p>Don't have an account? <Link class = 'links' to='/register'>Click here to register.</Link></p>
                </RegisterLink>

                <RegisterLink>
                    <p>Forgot password? <a href = '#'>Click here.</a></p>
                </RegisterLink>

            </FormLinks> 

            
 
        </SignIn>
    )
};

const LogInValidation = withFormik ({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Not a vaild email; Ex: MyEmail@aol.com').required('E-mail is required.'),
        password: Yup.string().min(6, 'Password must be more than 6 characters.').required('Please enter a password')
    }),
    handleSubmit(values, { setStatus, props }) {
        console.log('Submitting', values);
        const URL = '#/api/auth/login';

        axios
            .post(`${URL}`, values)
            .then(res => {
                console.log("error", res.data);
                setStatus(res.data);
                localStorage.setItem("token", res.data.credentials.token);
                props.history.push('/dashboard');
            })
            .catch(err => console.log(err.response));
    }
})(LogIn);

export default LogInValidation;
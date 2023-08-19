import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const initialValues = {
    username : '',
    email : '',
    password : ''
  };
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // console.log(values);
    // alert(`username: ${values.username} \nemail: ${values.email} \npassword: ${values.password}`);
    // Perform your login logic here
    let username = values.username;
    let email = values.email;
    let password = values.password;
    axios.post('http://localhost:9000/user/register', { username, email, password })
      .then( (response) => {
        if ( response.status === 200 ) {
          navigate('/Login');
        }
      })
      .catch ( (error) => {
        if ( error.response.status === 400 ) {
          alert(error.response.data);
        }
      })
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    if (!values.username) {
        errors.username = 'username is required';
      }

    return errors;
  };

  return (
    <div className="form-div">
      <div className='page-heading'>
        <h1>Registeration of the User</h1>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          <Form>
          <div className='form-element'>
              <label htmlFor="username">Username</label>
              <Field
                className="inputStyle"
                type="text"
                id="umername"
                name="username"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            
            <div className='form-element'>
              <label htmlFor="email">Email</label>
              <Field
                className="inputStyle emailMargin"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className='form-element'>
              <label htmlFor="password">Password</label>
              <Field
                className="inputStyle passMargin"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button className="appButton" type="submit">Sign Up</button>
          </Form>
        </Formik>
        </div>
    </div>
  );
};

export default RegisterForm;

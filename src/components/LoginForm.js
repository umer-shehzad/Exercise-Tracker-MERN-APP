import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();

  //if user is loged-in, it should not redirect to login
  useEffect(() => {
    const auth = localStorage.getItem('user-login');
    if (auth) {
      navigate("/Profile");
    }
  }, [])

  const handleSubmit = async (values) => {
    // console.log(values);

    // Perform your login logic here
    const result = await axios.post('http://localhost:9000/user/login', values)
    // console.log(result.data);
    if (result.data.username) {
      localStorage.setItem('user-login', JSON.stringify(result.data));
      navigate("/Profile");
    } else {
      alert('Please Enter correct details.')
    }

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

    return errors;
  };

  return (
    <div className="form-div">
      <div className='page-heading'>
        <h3>
          Login
        </h3>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          <Form>
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

            <button className="appButton" type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;

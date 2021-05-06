import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { login } from '../actions/login';

import { allReducers } from '../reducers';

import store from '../Components/store';

async function validateLoginEmail(value) {
    let error;

    if(!value) {
        error = 'Must provide an email address'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }

    return error
}

async function validateLoginPassword(value) {
    let error;

    if(!value) {
        error = 'Must provide a password'
    }

    return error
}

function FlipState() {
    const dispatch = useDispatch();
    console.log('here');
    return(
        (()=> dispatch({type:'LOG_IN'}))
    )
}

function stateLogin() {
    return {
        type: 'LOG_IN'
    }
}

async function loginUser(values) {

    const email = values.email;
    const password = values.password;

    const user = await axios.get('http://localhost:9000/getuserbyemail?email=' + email);

    if(user.data !== "User not found") {
        const validated = await axios.get('http://localhost:9000/passwordcompare?password=' + password + '&hash=' + user.data.password);
        console.log(validated);
        if(validated.data === true) {
            await axios.get('http://localhost:9000/loginuser?idusers=' + user.data.idusers);
            store.dispatch(stateLogin());
        } else {
            alert("Email or password invalid");
        }
    } else {
        alert("Email or password invalid");
    }
}

function checkRememberState() {
    if(localStorage.getItem("email")) {
        return true;
    } else {
        return false;
    }
}

const initialValues = {
  email: localStorage.getItem("email") || "",
  password: "",
  remember: checkRememberState()
};



const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);

        if(values.remember === true) {
            localStorage.setItem("email", values.email);
        } else {
            localStorage.removeItem("email");
        }

        loginUser(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <Form>
              <div className="form-row">
                <label htmlFor="email">Email: </label>
                <Field
                  type="email"
                  name="email"
                  id="loginEmail"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                  validate={validateLoginEmail}
                />
                <br />
                <ErrorMessage name="email" component="span" className="error" />
              </div>
                  <br />
              <div className="form-row">
                <label htmlFor="password">Password: </label>
                <Field
                  type="password"
                  name="password"
                  id="loginPassword"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                  validate={validateLoginPassword}
                />
                <br />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>
                  <br />
            
                <label>
                    Remember my email: 
                    <Field type="checkbox" name="remember" />
                </label>

                <br />

              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export { LoginForm }

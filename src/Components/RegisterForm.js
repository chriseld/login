import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';

async function validateEmail(value) {
    let error;
    if(!value) {
        error = 'Email required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    } else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        const registered = await axios.get('http://localhost:9000/emailcheck?email=' + value);
        console.log(registered);
        if(registered.data === true) {
            error = 'email already in use';
        }
    }
    console.log(error);
    return error;
}

const initialValues = {
  email: "",
  username: "",
  password: ""
};

const RegisterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
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
                  id="regEmail"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                  validate={validateEmail}
                />
                <br />
                <ErrorMessage name="email" component="span" className="error" />
              </div>
                  <br />
                <div className="form-row">
                <label htmlFor="username">Username: </label>
                <Field
                  name="username"
                  id="regUsername"
                  className={
                    errors.username && touched.username ? "input-error" : null
                  }
                />
                <br />
                <ErrorMessage
                  name="username"
                  component="span"
                  className="error"
                />
              </div>
                  <br />
              <div className="form-row">
                <label htmlFor="password">Password: </label>
                <Field
                  type="password"
                  name="password"
                  id="regPassword"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <br />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>
                  <br />
              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Register
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export { RegisterForm }
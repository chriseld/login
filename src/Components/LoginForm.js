import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  email: "",
  password: ""
};

const LoginForm = () => {
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
                  id="loginEmail"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
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

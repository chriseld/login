import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  username: Yup.string()
  .required("Username is required")
  .min(4, "Username is too short - should be 4 chars min")
  .max(20, 'Must be 20 characters or fewer'),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min")
});

const initialValues = {
  email: "",
  username: "",
  password: ""
};

const RegisterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
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
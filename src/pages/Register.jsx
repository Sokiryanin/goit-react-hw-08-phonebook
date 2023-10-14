import { Formik, Form } from 'formik';

export const Register = () => {
  return (
    <Formik
      initialValues={{ userName: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          User name:
          <input name="userName" type="text" />
        </label>
        <label>
          Email:
          <input name="email" type="email" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>

        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

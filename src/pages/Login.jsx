import { Formik, Form } from 'formik';

export const Login = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          User name:
          <input name="name" type="text" />
        </label>

        <label>
          Password:
          <input name="password" type="password" />
        </label>

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

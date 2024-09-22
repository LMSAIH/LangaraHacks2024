import { Formik, Form, Field } from "formik";

export const IncomeForm = (props) => {
  return (
    <div>
      <h1>Enter your incomes</h1>
      <Formik
        initialValues={{ income: 0 }}
        onSubmit={(values, actions) => {
          props.setSavings((s) => s = values.income);
        }}
      >
        {(props) => (
          <Form>
            <Field name="income" type="number"></Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

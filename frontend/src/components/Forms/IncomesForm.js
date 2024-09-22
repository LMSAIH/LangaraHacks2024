import { Formik, Form, Field } from "formik";

export const IncomeForm = (props) => {
  return (
    <div className = "incomeform">
      <h2>Let's get you <span className = "started">started</span></h2>
      <h3> Savings to allocate </h3>
      <Formik
        initialValues={{ income: 0 }}
        onSubmit={(values, actions) => {
          props.setSavings((s) => s = values.income);
        }}
      >
        {(props) => (
          <Form>
            <div >
            $<Field name="income" type="number" placeholder= "1000"></Field>
            </div>
            <button type="submit">Go</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

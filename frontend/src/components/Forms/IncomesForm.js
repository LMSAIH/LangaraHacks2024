import { Formik, Form, Field } from "formik";

export const IncomeForm = (props) => {

  const validateIncome = (income) => {
    if (income < 0) {
      return "Income can not be negative";
    }
  }

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
        {({ errors, touched }) => (
          <Form>
            <div>
            $<Field name="income" type="number" validate={validateIncome} placeholder={1000}></Field>
            </div>
            <div className="incomeError">{errors.income}</div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

import { Formik, Form, Field } from "formik";

export const IncomeForm = (props) => {

  const validateIncome = (income) => {
    if (income < 0) {
      return "Income can not be negative";
    }
  }

  return (
    <div>
      <h1>Enter your incomes</h1>
      <Formik
        initialValues={{ income: 0 }}
        onSubmit={(values, actions) => {
          props.setSavings((s) => s = values.income);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="income" type="number" validate={validateIncome}></Field>
            <div className="incomeError">{errors.income}</div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

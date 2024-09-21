import { Formik, Form, Field } from "formik";
import axios from 'axios';
import { useAuthContext } from "../hooks/useAuthContext";


export const SignUpPage = () => {

    const { dispatch } = useAuthContext();

    const login = async (login, password) => {
        const response = await axios.post("https://localhost:4000/api/signup", {
            login,
            password,
        });

        //add some kind of validation for response
        dispatch({
            type: "LOGIN", payload: {
                login,
                password
            }
        })
    }


    return (
        <div>
            <h2>Sign up</h2>
            <Formik
                initialValues={{ login: "", password: "" }}
                onSubmit={(values, actions) => {
                    login(values.login, values.password)
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="login" type="textarea" />
                        <Field name="password" type="textarea" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
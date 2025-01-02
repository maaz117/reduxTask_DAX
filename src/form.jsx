import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

    age: Yup.number()
        .required("Age is required")
        .min(18, "Age must be at least 18"),

    gender: Yup.string()
        .required("Gender is required"),

    profilePicture: Yup.mixed()
        .required("Profile picture is required"),
    
});

const MyForm = () => {
    return(
        <div style={{ maxWidth: '500px', margin: '50px auto' }}>
            <h1>Form Using Fromik</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    age: '',
                    gender: '',
                    profilePicture: null,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Form Submitted: ',values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    setFieldValue
                }) => (
                    <Form>
                        {/* Name */}
                        <div>
                            <label htmlFor="name">Name: </label>
                            <Field
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleChange}   
                                onBlur={handleBlur} 
                                value={values.name} 
                            />
                            <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                        </div>

                        <br />

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email">Email: </label>
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                        </div>

                        <br />

                        {/* age */}
                        <div>
                            <label htmlFor="age">Age: </label>
                            <Field
                                type="number"
                                name="age"
                                id="age"
                                onChange={handleChange}   
                                onBlur={handleBlur} 
                                value={values.age} 
                            />
                            <ErrorMessage name="age" component="div" style={{ color: "red" }} />
                        </div>

                        <br />

                        {/* gender */}
                        <div>
                            <label htmlFor="gender">Gender: </label>
                            <select
                                name="gender"
                                id="gender"
                                onChange={handleChange}   
                                onBlur={handleBlur} 
                                value={values.gender} 
                            >
                                <option value="" label="Select Gender" />
                                <option value="male" label="Male" />
                                <option value="female" label="Female" />
                            </select>
                            <ErrorMessage name="gender" component="div" style={{ color: "red" }} />
                        </div>

                        <br />

                        {/* Profile Picture */}
                        <div>
                            <label htmlFor="profilePicture">Profile Picture: </label>
                            <input
                                type="file"
                                id="profilePicture"
                                onChange={(event) => {
                                    setFieldValue('profilePicture', event.currentTarget.files[0]);
                                }}   
                            />
                            <ErrorMessage name="profilePicture" component="div" style={{ color: "red" }} />
                        </div>

                        <br />

                        {/* Submit */}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MyForm;
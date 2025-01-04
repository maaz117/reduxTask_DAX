import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../Validations/simpleValidations";

const initialValues = {
    email: '',
    password: '',
    age: ''
};

const BasicFormExample = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return(
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign Up</h2>
            <p className="text-gray-600 mb-6">Enter your details to create your account</p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter Your Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter Your Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter Your Age"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formik.touched.age && formik.errors.age ? (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.age}</p>
                    ) : null}
                </div>

                <button 
                    type="submit" 
                    disabled={formik.isSubmitting}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {formik.isSubmitting ? 'Submitting...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default BasicFormExample;




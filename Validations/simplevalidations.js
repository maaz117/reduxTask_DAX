import * as Yup from 'yup';

export const validationSchema = Yup.object({
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

    password: Yup.string()
        .required('Password is required'),
    
});
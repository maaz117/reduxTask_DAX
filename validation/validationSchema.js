import * as yup from 'yup';

export const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("First Name is required")
        .min(3, "First Name must be at least 3 characters long"),

    lastName: yup
        .string()
        .required("Last name is required")
        .min(3, "Last name must be at least 3 characters long"),
});
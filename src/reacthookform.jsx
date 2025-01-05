import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../validation/validationSchema";

export const ReactHookFormExample = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        },
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className="form-control" placeholder="First Name" />
                            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                        </>
                    )}
                />
            </div>
            
            <div>
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className="form-control" placeholder="Last Name" />
                            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
                        </>
                    )}
                />
            </div>

            <input type="submit" />

        </form>
    )
}

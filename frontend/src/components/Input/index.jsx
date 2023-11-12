import { useFormContext } from "react-hook-form"
// import { formValidation } from "./formValidation";

export const Input = ({
    name,
    label = '',
    type,
    value,
    disabled = false,
    required = false,
    min  ,
    max ,
    step ,
    className
}) => {

    const {register, formState : {errors} } = useFormContext();

    return (

            <input
                className={className}
                size="lg"
                variant="bordered"
                radius="sm"
                label={label}
                // labelPlacement={"inside"}
                placeholder={label}
                // isRequired={required}
                required={required}
                disabled={disabled}
                type={type}
                id={name}
                {...register(name)}
                min={min}
                max={max}
                step={step}
                value={value}
                // errorMessage={formValidation(errors, name)}
            />
    );
};

export default Input;
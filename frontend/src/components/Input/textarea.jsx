import { useFormContext } from "react-hook-form"

export const TextArea = ({
    cols="30", 
    rows="10",
    className,
    name,
    label = '',
    type,
    value,
    disabled = false,
    required = false,
    min  ,
    max ,
    step ,
}) => {

    const {register, formState : {errors} } = useFormContext();

    return (

            <textarea
                cols={cols} 
                rows={rows}
                className={className}
                size="lg"
                variant="bordered"
                radius="sm"
                label={label}
                labelPlacement={"inside"}
                placeholder={label}
                isRequired={required}
                required={required}
                disabled={disabled}
                type={type}
                id={name}
                {...register(name)}
                min={min}
                max={max}
                step={step}
                value={value}
                
            >
            </textarea>
    );
};

export default TextArea;
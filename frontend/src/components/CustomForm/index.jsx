
import { useForm, FormProvider } from 'react-hook-form'


export const CustomForm = ({defaultValues, onSubmit, className, children}) => {

    // const navigate = useNavigate();

    const formMethods  = useForm({
        defaultValues: defaultValues,
        mode: "onChange",
        // resolver: yupResolver(schema)
    })

    const {
        register, 
        handleSubmit, 
        // watch, 
        formState : {isDirty, isValid},//,errors}, 
        reset
    } = formMethods;


    // const onSubmit = async (data) => {

    //     if (data) {
    //         const {dni, cellPhone} = data

    //         dni && setDni(data.dni)
    //         cellPhone && setCellphone(data.cellPhone)
            
    //     }
    //     if (navigateTo) {
    //         navigate(navigateTo);
    //     }
    //     reset();
    // }
 

    return (
        <>
            <div className='flex flex-col py-4 gap-6'>
                
                <FormProvider { ...formMethods} >
                    <form onSubmit={handleSubmit(onSubmit)} className={className} >

                        {children}

                        {/* <Input name='dni'  label='DNI' required={true} type='number' />
                        
                        <Input name='cellPhone'  label='Celular' required={true} type='number'/>

                        <Checkbox  color="primary"    radius="sm" isRequired {...register('acceptTerms')} >
                            <Typography.Small>Acepto la Política de Privacidad</Typography.Small>
                        </Checkbox>

                        <Checkbox  color="primary"  radius="sm" isRequired {...register('acceptPolitic')}>
                            <Typography.Small>Acepto la Política Comunicaciones Comerciales</Typography.Small>
                        </Checkbox>

                        <Typography.Xs className='underline font-semibold'>Aplican Términos y Condiciones.</Typography.Xs>

                        <Button type="submit" isDirty={isDirty} isValid={isValid} className='rounded-3xl'> COTÍZALO </Button> */}

                    </form>
                </FormProvider>
            </div>

        </>
    )
}

import {useForm} from 'react-hook-form';
import axios from "axios"


const Register = () =>{
    const {handleSubmit,register, watch, formState: {errors}} = useForm()    
    const onSubmit = (data) =>{
        axios.post(`${import.meta.env.VITE_API_URL}/users`,data).then(resp => {
            if(resp.status == 201){
                location.href = "/login"
            }else{
                console.log(resp.data);
            }
        })
    }

    return (
        <>
        <div className='flex justify-center bg-blue-400 h-[100vh]'>
            <form onSubmit={handleSubmit(onSubmit)} id='form' className='border-2 border-pink-400 w-[90%] '>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center gap-3'>
                        <label htmlFor="" className='mt-2'>Nombre: </label> 
                        <input className='border-2 border-black rounded-md' type="text" {...register("name", 
                        {
                            required:{
                                value: true,
                                message:"Nombre requerido"
                            }
                        })}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <label htmlFor="" className='mt-2'>Apellido: </label> 
                        <input className='border-2 border-black rounded-md' type="text" {...register("lastname", 
                        {
                            required:{
                                value: true,
                                message:"Apellido requerido"
                            }
                        })}
                        />
                        
                        {errors.lastname && <span>{errors.lastname.message}</span>}
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <label htmlFor="" className='mt-2'>Email: </label> 
                        <input className='border-2 border-black rounded-md' type="email" {...register("email", 
                        {
                            required:{
                                value: true,
                                message:"Correo requerido"
                            },
                            pattern:{
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message:"Correo no valido"
                            }
                        })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>

                    <div className='flex flex-col items-center gap-3'>
                        <label htmlFor="" className='mt-2'>Password: </label> 
                        <input className='border-2 border-black rounded-md' type="password" {...register("password",
                        {
                            required:{
                                value: true,
                                message:"Ingrese su contraseña por favor"
                            }
                        }
                        )}/>
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <label htmlFor="" className='mt-2'>Confirmar Password: </label> 
                        <input className='border-2 border-black rounded-md' type="password" {...register("confirm_password",
                        {
                            required:{
                                value: true,
                                message:"Confirme su contraseña por favor"
                            },
                            validate: (val) => {
                                if (watch('password') != val) {
                                    console.log(watch('password'));
                                    return "Las contraseñas no coinciden";
                                }
                            },
                        }
                        )}/>
                        {errors.confirm_password && <span>{errors.confirm_password.message}</span>}
                    </div>
                    <div className='flex flex-col items-center mt-2.5'>
                        <div className='flex flex-wrap'>
                            <input type='submit' className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800' value="Registrase"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Register
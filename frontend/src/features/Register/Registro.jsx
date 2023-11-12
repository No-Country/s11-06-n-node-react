import {useForm} from 'react-hook-form';
import logo from '../../components/img/logo-1.png'
import logoGoogle from '../../components/img/Google-Sign-In.png'
import axios from "axios"
import Swal from "sweetalert2";
import fondo from '../../../public/fondo2.gif'
import logomov from '../../../public/logomov.gif'
import { getAuth } from '../../utils/checkAuth';
import { useState } from 'react';


const Register = () =>{
    const {handleSubmit,register, watch, formState: {errors}} = useForm()  
    const [loading, setLoading] = useState(false);  
    const onSubmit = (data) =>{
        setLoading(true)
        const config = getAuth();
        axios.post(`${import.meta.env.VITE_API_URL}/users`, config, data).then(resp => {
            console.log(resp);
            if(resp.status == 201){
                Swal.fire({
                    icon: "success",
                    title: "Registro Exitoso",
                    text: `¡${resp.data.message}!`,
                  }).then((r) => {
                    // console.log(r);
                    if (r.isConfirmed) {
                     location.href = "/login"
                    }
                  });
                
            }else{
                console.log(resp.data);
            }
        })
        setLoading(false)
    }
    // console.log(formState);
    console.log(errors);
    console.log(Object.keys(errors).length);
    
    return (
        <>
            <div >
                <div className='h-[100%] h-full flex flex-row'>
                <div className='min-w-[130px]  '>
                <img src={fondo} className="object-cover w-full h-full" alt="fondo" />    
</div>  
                    <div className='mt-[100px] ml-[5%] mb-[100px]'>
                         <div>
                            {loading? <div className=''>
                                    <img src={logomov} alt="logo" className=' w-[80%] sm:w-[70%]' />
                                </div> : <div className=''>
                                    <img src={logo} alt="logo" className=' w-[80%] sm:w-[70%] ' />
                                </div>
                                }
                                
                                <div className='w-full ml-[5%]'>
                                    <p className='text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl'>
                                        <span className='text-greenSecundary'>Queremos saber más de ti...</span>
                                        
                                    </p>
                                </div>
                            </div>
                        <div className='pl-3  w-full mt-8'>
                            <form action="#" onSubmit={handleSubmit(onSubmit)} id='form' className=''>

                                <div className='flex gap-1 w-[90%] sm:w-[80%] flex-col'>
                                    <div className="mb-3 ">
                                        <label for="name" className="block mb-1 text-sm sm:text-xl text-greenPrimary dark:text-white">Nombre</label>
                                        <input type="text" id="name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none border-2 min-w-[200px] focus-visible:ring-greenSecundary focus:border-greenSecundary block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 

                                            {...register("name", 
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Nombre requerido"
                                                    }
                                                })
                                            }
                                        />
                                        {errors.name && <span className='sm:w-[100%] flex text-red-800 text-xs  sm:text-sm'>{errors.name.message}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label for="lastname" className="block mb-1 text-sm sm:text-xl text-greenPrimary dark:text-white">Apellido</label>
                                        <input type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none border-2 min-w-[200px] focus-visible:ring-greenSecundary focus:border-greenSecundary block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            {
                                                ...register("lastname", 
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Apellido requerido"
                                                    }
                                                })
                                            }
                                        />
                                        {errors.lastname && <span className='sm:w-[100%] flex text-red-800 text-xs  sm:text-sm'>{errors.lastname.message}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label for="password" className="block mb-1 text-sm sm:text-xl text-greenPrimary dark:text-white">Email</label>
                                        <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none border-2 min-w-[200px] focus-visible:ring-greenSecundary focus:border-greenSecundary block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                            {...register("email", 
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Correo requerido"
                                                    },
                                                    pattern:{
                                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                                        message:"Correo no valido"
                                                    }
                                                })
                                            }
                                        />
                                        {errors.email && <span className='sm:w-[100%] flex text-red-800 text-xs  sm:text-sm'>{errors.email.message}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label for="password" className="block mb-1 text-sm sm:text-xl text-greenPrimary dark:text-white">Contraseña</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none border-2 min-w-[200px] focus-visible:ring-greenSecundary focus:border-greenSecundary block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            {...register("password",
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Ingrese su contraseña por favor"
                                                    }
                                                }
                                            )}
                                        />
                                        {errors.password && <span className='sm:w-[100%] flex text-red-800 text-xs  sm:text-sm'>{errors.password.message}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label for="confirm_password" className="block mb-1 text-sm sm:text-xl text-greenPrimary dark:text-white">Confirmar Contraseña</label>
                                        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none border-2 min-w-[200px] focus-visible:ring-greenSecundary focus:border-greenSecundary block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                            {...register("confirm_password",
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
                                            )}
                                        />
                                        {errors.confirm_password && <span className='sm:w-[100%] flex text-red-800 text-xs  sm:text-sm'>{errors.confirm_password.message}</span>}
                                    </div>
                                    <div className='w-[100%] flex flex-col items-center'>
                                        <div className='w-full'>
                                            <p className='text-md sm:text-2xl text-greenSecundary mb-[15px] text-center'>Hoy empieza una aventura!</p>
                                        </div>
                                        <button type='submit' disabled={Object.keys(errors).length > 0} className={Object.keys(errors).length
      ? 'bg-[#97CAC5] border-2 rounded-md h-10 w-[60%] sm:w-[80%] text-white transition-all duration-300'
      : 'bg-[#11aa9e] rounded-md h-10 w-[60%] sm:w-[80%] text-white hover:bg-[#098D82] transition-all duration-300 hover:shadow-xl'}>Comenzar</button>
                                    </div>
                               </div>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
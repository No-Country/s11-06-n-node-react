import {useForm} from 'react-hook-form';
import logo from '../../components/img/logo-1.png'
import logoGoogle from '../../components/img/Google-Sign-In.png'
import axios from "axios"
import Swal from "sweetalert2";
import { getAuth } from '../../utils/checkAuth';

const Register = () =>{
    const {handleSubmit,register, watch, formState: {errors}} = useForm()    
    const onSubmit = (data) =>{
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
    }
    return (
        <>
            <div className='w-[1366px] h-[1493px]'>
                <div className='relative '>
                    <div className='absolute'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="320" height="1493" viewBox="0 0 320 1493" fill="none">
                        <path d="M-121 1493H266C266 1493 319.5 1320.5 295 1187C270.5 1053.5 215.159 1033.11 164 934.5C91.1069 794 18 597 98.5 372.5C179 148 319.5 0 319.5 0H-121V1493Z" fill="#01363A"/>
                        </svg>
                    </div>
                    <div className='z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="387" height="1493" viewBox="0 0 387 1493" fill="none">
                        <path d="M-53.5 0H333.5C333.5 0 387 172.5 362.5 306C338 439.5 282.659 459.893 231.5 558.5C158.607 699 85.5 896 166 1120.5C246.5 1345 387 1493 387 1493H-53.5V0Z" fill="#098D82"/>
                        </svg>
                    </div>
                    <div className='absolute top-[100px] right-[178px] '>
                        <div>
                            <div className=''>
                                <img src={logo} alt="" className=''/>
                            </div>
                            <div className=''>
                                <p className='text-3xl'>Queremos saber más de ti</p>
                            </div>
                        </div>
                        <div className='pl-20 w-full mt-8'>
                            <form action="#" onSubmit={handleSubmit(onSubmit)} id='form' className=''>
                                <div className='flex gap-3 flex-col'>
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Nombre</label>
                                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            {...register("name", 
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Nombre requerido"
                                                    }
                                                })
                                            }
                                        />
                                        {errors.name && <span>{errors.name.message}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="lastname" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Apellido</label>
                                        <input type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        {errors.lastname && <span>{errors.lastname.message}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        {errors.email && <span>{errors.email.message}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Contraseña</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            {...register("password",
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Ingrese su contraseña por favor"
                                                    }
                                                }
                                            )}
                                        />
                                        {errors.password && <span>{errors.password.message}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="confirm_password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
                                        <input type="confirm_password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        {errors.confirm_password && <span>{errors.confirm_password.message}</span>}
                                    </div>
                                    <div className='text-center w-full'>
                                        <div className='m-8'>
                                            <p className='text-2xl'>Hoy empieza una aventura</p>
                                        </div>
                                        <button type='submit' className={(errors.password) ? 'bg-[#97CAC5] border-2 border-[#098D82] rounded-md h-12 w-80 text-white' : 'bg-[#098D82] border-2 border-[#098D82] rounded-md h-12 w-80 text-white'}>Comenzar</button>
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
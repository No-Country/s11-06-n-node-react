import {useForm} from 'react-hook-form';
import logo from '../../components/img/logo-1.png'
import logoGoogle from '../../components/img/Google-Sign-In.png'
import axios from "axios"
import Swal from "sweetalert2";
import fondo from '../../../public/fondo.mp4'

const Register = () =>{
    const {handleSubmit,register, watch, formState: {errors}} = useForm()    
    const onSubmit = (data) =>{
        axios.post(`${import.meta.env.VITE_API_URL}/users`,data).then(resp => {
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
            <div >
                <div className='h-[100%] h-full flex flex-row'>
                <div className='min-w-[110px] min-w-[85px] '>
    <video src={fondo} className="object-cover w-full h-full"  autoPlay loop muted></video>
</div>  
                    <div className='mt-[100px]'>
                         <div>
                                <div className=''>
                                    <img src={logo} alt="logo" className='ml-[5%] w-[70%] ' />
                                </div>

                                <div className='w-full'>
                                    <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
                                        <span className='text-greenSecundary'>Queremos saber más de ti...</span>
                                        
                                    </p>
                                </div>
                            </div>
                        <div className='pl-20 w-full mt-8'>
                            <form action="#" onSubmit={handleSubmit(onSubmit)} id='form' className=''>
                                <div className='flex gap-3 flex-col'>
                                    <div className="mb-6">
                                        <label for="name" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Nombre</label>
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
                                        <label for="lastname" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Apellido</label>
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
                                        <label for="password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        <label for="password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Contraseña</label>
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
                                        <label for="confirm_password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
                                        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
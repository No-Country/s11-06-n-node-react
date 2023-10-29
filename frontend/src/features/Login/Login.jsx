import {useForm} from 'react-hook-form';
import axios from "axios"
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () =>{
    const {handleSubmit,register,formState: {errors}} = useForm()    
    const onSubmit = (data) =>{
        axios.post("https://s11-06-n-node-react-back.onrender.com/users/login",data).then(resp => {
            Cookies.set('data', JSON.stringify(resp.data), { expires: 3 });
            location.href = "/"
        })
    }

    return (
        <>
        <div className='flex justify-center bg-blue-400 h-[100vh]'>
            <form onSubmit={handleSubmit(onSubmit)} id='form' className='border-2 border-pink-400 w-[90%] '>
                <div className='flex flex-col'>
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
                    <div className='flex flex-col items-center mt-2.5'>
                        <div className='flex flex-wrap'>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                            <Link to="/register" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Register</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login
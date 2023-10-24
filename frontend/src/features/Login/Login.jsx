import {useForm} from 'react-hook-form';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    
    const {handleSubmit,register,formState: {errors}} = useForm()
    const navigate = useNavigate();

    console.log("error",errors)

    const onSubmit = (data) =>{
        console.log(data)
        axios.post("https://s11-06-n-node-react-back.onrender.com/users/login",data).then(resp => {
            console.log("resp: ",resp)
            navigate('/dashboard');
        })
    }

    return (
        <>
        <div className='flex justify-center bg-blue-400 h-[100vh]'>
            <form action="#" onSubmit={handleSubmit(onSubmit)} id='form' className='border-2 border-pink-400 w-[90%] '>
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
                        <input className='border-2 border-black rounded-md' type="text" {...register("password",
                        {
                            required:{
                                value: true,
                                message:"Ingresar contraseña por favor"
                            }
                            }
                            )}/>
                        {errors.password && <span>{errors.password.message}</span>}
                    <button type='submit' className='border-2 border-black rounded-md pl-10 pr-10'>Login</button>

                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login
import {useForm} from 'react-hook-form';
import axios from "axios"

const Login = () =>{
    
    const {handleSubmit,register,formState: {errors}} = useForm()

    console.log("error",errors)

    const onSubmit = (data) =>{
        console.log(data)
        axios.post("https://s11-06-n-node-react-back.onrender.com/users/login",data).then(resp => {
            console.log(resp)
        })
    }

    return (
        <>
            <form action="#" onSubmit={handleSubmit(onSubmit)} id='form'>
                <div>
                    <label htmlFor="">Email: </label> 
                    <input type="email" {...register("email", 
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

                <div>
                    <label htmlFor="">Password: </label> 
                    <input type="text" {...register("password",
                    {
                        required:{
                            value: true,
                            message:"Ingresar contraseña por favor"
                        }
                        }
                        )}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button type='submit'>Login</button>

                <p className='warnings' id='warnings'></p>

            </form>
        </>
    )
}

export default Login
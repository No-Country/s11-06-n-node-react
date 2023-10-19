import {useForm} from 'react-hook-form';
import axios from "axios"

const Login = () =>{
    
    const {handleSubmit,register} = useForm()

    const onSubmit = (data) =>{
        console.log(data)
        axios.post("https://s11-06-n-node-react-back.onrender.com/usuarios/login",data).then(resp => {
            console.log(resp)
        })
    }

    return (
        <>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Nombre: </label> 
                    <input type="text" {...register("nombre")}/>
                </div>
                <div>
                    <label htmlFor="">Apellido: </label> 
                    <input type="text" {...register("apellido")}/>
                </div>
                <div>
                    <label htmlFor="">Email: </label> 
                    <input type="text" {...register("email")}/>
                </div>
                <div>
                    <label htmlFor="">Password: </label> 
                    <input type="text" {...register("password")}/>
                </div>

                <button type='submit'>Login</button>

            </form>
        </>
    )
}

export default Login
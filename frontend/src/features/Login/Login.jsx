import {useForm} from 'react-hook-form';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Sidebar from '../../components/Sidebar/Sidebar';
import logo from '../../../src/components/img/logo.png'
// C:\Users\Javier\Desktop\PROYECTOS\NoCountry- seleccionado\s11-06-n-node-react\frontend\src\components\img\logo.png
const Login = () =>{
    const {handleSubmit,register,formState: {errors}} = useForm()    
    const onSubmit = (data) =>{
        axios.post("https://s11-06-n-node-react-back.onrender.com/users/login",data).then(resp => {
            Cookies.set('data', JSON.stringify(resp.data), { expires: 3 });
            location.href = "/"
        })
    }

    return (
        <div className="lg:flex">
            <div className='hidden lg:block'><Sidebar/></div>
        <div className="hidden lg:block w-1/3 bg-gray-100 p-8" style={{ backgroundColor: '#f9f4f4' }}>
        
        </div>
        
        <div className="flex flex-col justify-top items-center min-h-screen w-full lg:w-2/3 bg-gray-100 "style={{ backgroundColor: '#f9f4f4' }}>
            
        <div className="flex flex-col items-center justify-center bg-graySecundary ">
          <img
      src={logo} // Reemplaza con la ruta correcta de tu imagen
      alt="Descripción de la imagen"
      className="h-100 mb-[-150px]" 
      style={{ backgroundColor: '#f9f4f4' }}
    />  
    <p className="text-center text-[25px] text-gray-700 mb-4">
      Conoce lugares,
    </p>
    <p className="text-center text-customhover text-[28px] mb-4">
      descubre personas en diferentes
    </p>
    </div>
          <form onSubmit={handleSubmit(onSubmit)} id="form" className="w-11/12 max-w-md bg-transparent rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center space-y-4">
              <label htmlFor="email" className="font-semibold">Email:</label>
              <input
                type="email"
                id="email"
                className="border-2 border-black rounded-md p-2 w-full"
                {...register("email", {
                  required: "Correo requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Correo no válido",
                  },
                })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              <label htmlFor="password" className="font-semibold">Password:</label>
              <input
                type="password"
                id="password"
                className="border-2 border-black rounded-md p-2 w-full"
                {...register("password", {
                  required: "Ingresa la contraseña por favor",
                })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              <input
                type="submit"
                className="bg-custombg hover:bg-customhover text-white font-semibold rounded-md p-2 w-full"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    );
        // <>
        // <div className='hidden lg:block'><Sidebar/></div>
        // <div className='flex justify-center bg-blue-400 h-[100vh]'>
        //     <form onSubmit={handleSubmit(onSubmit)} id='form' className='border-2 border-pink-400 w-[90%] '>
        //         <div className='flex flex-col'>
        //             <div className='flex flex-col items-center gap-3'>
        //                 <label htmlFor="" className='mt-2'>Email: </label> 
        //                 <input className='border-2 border-black rounded-md' type="email" {...register("email", 
        //                 {
        //                     required:{
        //                         value: true,
        //                         message:"Correo requerido"
        //                     },
        //                     pattern:{
        //                         value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        //                         message:"Correo no valido"
        //                     }
        //                 })}
        //                 />
                        
        //                 {errors.email && <span>{errors.email.message}</span>}
        //             </div>

        //             <div className='flex flex-col items-center gap-3'>
        //                 <label htmlFor="" className='mt-2'>Password: </label> 
        //                 <input className='border-2 border-black rounded-md' type="text" {...register("password",
        //                 {
        //                     required:{
        //                         value: true,
        //                         message:"Ingresar contraseña por favor"
        //                     }
        //                     }
        //                     )}/>
        //                 {errors.password && <span>{errors.password.message}</span>}
        //                 <input type='submit' className='border-2 border-black rounded-md pl-10 pr-10' value="Login"/>

        //             </div>
        //         </div>
        //     </form>
        // </div>
        // </>
    // )
}

export default Login
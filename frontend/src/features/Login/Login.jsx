import {useForm} from 'react-hook-form';
import axios from "axios"
import logo from '../../components/img/logo-1.png'
import logoGoogle from '../../components/img/Google-Sign-In.png'
import fondo from '../../../public/fondo.mp4'

// import passwordIcon from '../../components/img/Vpn key.png'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Swal from "sweetalert2";

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_API_URL}/users/login`, data)
      .then(resp => {
        Cookies.set('data', JSON.stringify(resp.data), { expires: 3 });
    console.log(resp);
        Toast.fire({
            icon: 'success',
            title: `Bienvenido ${resp.data.user.name}`
          }).then(() => {
          location.href = "/";
        });
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Usuario o contraseña incorrectos`,
          width: "20rem",
          padding: "0.5rem"
        }).then(() => {
          location.href = "/login";
        });
      });
  }

    return (
        <>
        <div className='h-[100%] h-screen flex flex-row'>
        <div className='min-w-[110px] min-w-[85px] '>
    <video src={fondo} className="object-cover w-full h-full"  autoPlay loop muted></video>
         

</div>    
            <div className='flex flex-row ml-[5%]'>
            <div className='mt-[100px]  flex flex-col '>
            
         <div className='flex flex-col w-[100%] '>
            <div>
                <div className=''>
                    <img src={logo} alt="logo"  className='w-[80%] '/>
                </div>

                <div className='w-full'>
                <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
    <span className='text-greenSecundary'>Conoce lugares,</span>
    <br />
    <span className='text-greenPrimary'>descubrí personas</span>
  </p>
</div>
            </div>


                            <div className='flex flex-col sm:w-[70%]  '>
                                <div className="justify-center mt-20 w-[100%] flex items-center flex dark:bg-gray-800">
                                    <button className="px-4 w-[60%] min-w-[200px] py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 justify-center">
                                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                                        <span>Login with Google</span>
                                    </button>

                                </div>


                            </div> 
                <form action="#" onSubmit={handleSubmit(onSubmit)} id='form' className='w-[100%] flex '>
                    <div className='flex items-center gap-3 flex-col text-center w-[100%] sm:w-[70%] '>
                        

                        <div className='flex flex-col justify-center gap-3 sm:flex sm:items-center sm:w-[60%] '>
                            <div className='flex w-[100%] sm:w-[100%] items-center gap-3 mt-6 mb-3'>
                <hr className='border-1 w-full h-[1px]'/> <p> Or </p> 
                <hr className='border-1 w-full h-[1px]'/>
            </div>
                            <div className='flex flex-col justify-center w-[100%] sm:w-[100%] '>
                            
                            <input className='p-[10px] focus:outline-none border-2 min-w-[200px] border-[#E5E7EB]  w-[100%] rounded-md h-12 focus-visible:ring-greenSecundary focus:border-greenSecundary' type="email" 
                            placeholder=' Correo Eléctronico'
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
                            })}
                            />
                            
                            {errors.email && <span className='mb-[3%] sm:w-[100%] flex text-red-800 text-sm'>{errors.email.message}</span>}
                        </div>  
                        <div className='flex flex-col justify-center w-[100%] sm:w-[100%] '>
                            <input type="password" className='p-[10px] focus:outline-none focus-visible:ring-greenSecundary focus:border-greenSecundary border-2  min-w-[200px] w-[50%] sm:w-[100%]  border-[#E5E7EB] rounded-md h-12'
                            placeholder=' Contraseña'
                            {...register("password",
                            {
                                required:{
                                    value: true,
                                    message:"Ingresar contraseña por favor"
                                }
                                }
                                )}/>
                            {errors.password && <span className='sm:w-[100%] flex text-red-800 text-sm  sm:text-sm'>{errors.password.message}</span>}
                          </div>
                        <button className='min-w-[200px] flex justify-start w-[50%]'>¿Olvidaste tu contraseña?</button>
                        <button type='submit' className={(errors.password) ? 'bg-[#97CAC5] w-[80%] active:false min-w-[200px] rounded-md px-5 py-2.5 text-white ' : 'min-w-[200px] bg-[#11aa9e] w-[80%] text-sm sm:text-base rounded-md px-5 py-2.5 text-white hover:bg-[#098D82]'}>Continuar</button>

                        <Link to="/register" className='min-w-[200px] text-white w-[80%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm sm:text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Crear Cuenta</Link>
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

export default Login
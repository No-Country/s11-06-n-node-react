import {useForm} from 'react-hook-form';
import axios from "axios"
import logo from '../../components/img/logo-1.png'
import logoGoogle from '../../components/img/Google-Sign-In.png'
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



            <div className='absolute top-[212px] right-[178px] '>
            
        
            <div>
                <div className=''>
                    <img src={logo} alt="" className=''/>
                </div>

                <div className=''>
                    <p className='text-6xl'>Conoce lugares, <br /> descubrí personas</p>
                </div>
            </div>


            <div className='pl-20 w-[50%]'>
                <div className='w-[281px] h-12 mt-[78px] mb-[68px] '>
                    <button >
                        <img src={logoGoogle} alt="" />
                    </button>
                </div>

            <div className='flex items-center gap-3 mb-6'>
                <hr className='border-2 w-full h-full'/> <p> Or </p> 
                <hr className='border-2 w-full h-full'/>
            </div>

                <form action="#" onSubmit={handleSubmit(onSubmit)} id='form' className=''>
                    <div className='flex gap-3 flex-col text-center'>
                        <div className='flex flex-col justify-center '>
                            
                            <input className='border-2 border-[#E5E7EB] rounded-md h-12' type="email" 
                            placeholder='Correo Eléctronico'
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
                            
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div className='flex flex-col justify-center gap-3'>
                            
                            <input type="password" className='border-2 border-[#E5E7EB] rounded-md h-12'
                            placeholder='Contraseña'
                            {...register("password",
                            {
                                required:{
                                    value: true,
                                    message:"Ingresar contraseña por favor"
                                }
                                }
                                )}/>
                            {errors.password && <span>{errors.password.message}</span>}
                        <button className='flex justify-start'>¿Olvidaste tu contraseña?</button>
                        <button type='submit' className={(errors.password) ? 'bg-[#97CAC5] border-2 border-[#098D82] rounded-md h-12 text-white' : 'bg-[#098D82] border-2 border-[#098D82] rounded-md h-12 text-white'}>Continuar</button>
                        <Link to="/register" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Crear Cuenta</Link>
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
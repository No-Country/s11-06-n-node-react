import user1 from '../../../public/user1.jpeg'
import { BsChevronDown } from 'react-icons/bs';
import { ImageProfileUserLarge, ImageProfileUserMedium, ImageProfileUserSmall } from '../Images/ImageProfileUser';
import LinksMenu from './LinksMenu';
import user4 from '../../../public/person4.png'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { getUserDetail } from '../../Redux/Actions/UserGet';
import { Link } from 'react-router-dom';
import { GrLogin } from 'react-icons/gr';

   

export default function Sidebar() {

 const cookieData = Cookies.get('data');
    const [actualUser, setactualUser] = useState();
    const userDetail = useSelector((state) => state.user.userDetail);
    const dispatch = useDispatch();
    
      useEffect(() => {
     if (cookieData && !actualUser) {
      const userData = JSON.parse(cookieData);
      if(userData){
        setactualUser(userData)
        // console.log(userData);
      }
    } else {
      console.log("Usuario cargado");
    }
        }, [cookieData, actualUser, dispatch]);
      
        useEffect(() => {
          if (actualUser) {
            dispatch(getUserDetail(actualUser));
          }
        }, [actualUser, dispatch]);

// console.log(userDetail);
    return (
        <div className="w-60 text-white z-10">
          <div className='fixed bg-greenPrimary h-screen w-60 px-4'>
            <div className="flex items-center gap-x-3 py-10">
            {Object.keys(userDetail).length && userDetail.avatar && Object.keys(userDetail.avatar).length ? (
  <>
    <ImageProfileUserSmall imagen={userDetail.avatar} />
    <p className='font-bold'>{`${userDetail.name} ${userDetail.lastname}`}</p>
  </>
) : (
    <Link to={'/perfil'} className='flex items-center'> 
      <ImageProfileUserSmall imagen='https://res.cloudinary.com/dbwmesg3e/image/upload/v1698886031/GlobalMate/pngegg_21_pm25ge.png'/>
      <p className='font-bold ml-2'>{`${userDetail.name} ${userDetail.lastname}`}</p>
    </Link>
 
)}
            </div>
            
            <LinksMenu user={userDetail}/>

          </div>
        </div>
    )
}

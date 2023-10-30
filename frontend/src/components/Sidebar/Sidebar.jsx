import user1 from '../../../public/user1.jpeg'
import { BsChevronDown } from 'react-icons/bs';
import { ImageProfileUserSmall } from '../Images/ImageProfileUser';
import LinksMenu from './LinksMenu';
import user4 from '../../../public/person4.png'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { getUserDetail } from '../../Redux/Actions/UserGet';
import { Link } from 'react-router-dom';

   

export default function Sidebar() {

 const cookieData = Cookies.get('data');
    const [actualUser, setactualUser] = useState();
    const userDetail = useSelector((state) => state.user.userDetail);
    const userGroups = useSelector((state) => state.user.userGroups);
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


    return (
        <div className="w-56 bg-greenPrimary text-white h-screen fixed px-4">
            <div className="flex items-center gap-x-3 py-10">
              {userDetail?(
              <><ImageProfileUserSmall imagen = {userDetail.avatar}/>
                <p className='font-bold'>{`${userDetail.name}`}</p>
              </>
              ):(
                  <div>
                    <ImageProfileUserSmall imagen = {"https://res.cloudinary.com/dbwmesg3e/image/upload/v1698627185/GlobalMate/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue-thumbnail_nm1glh.png"}/>
                    <Link to={'/login'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineTags/></span>Login</Link>

                  </div>
                )

              }
                
                {/* <BsChevronDown/> */}
            </div>
            
            <LinksMenu/>
        </div>
    )
}

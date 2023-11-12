import { useEffect } from "react";
import CardGrupo from "../../../components/Cards/CardGrupo/CardGrupo";
import Typography from "../../../components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroups } from "../../../Redux/Actions/GroupGet";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

export default function Grupos() {
    const dispatch = useDispatch()
    const groups = useSelector((state) => state.group.groups)
    const groupData = groups.slice(0,4)
    
      useEffect(() => {
        dispatch(getAllGroups())
    },[dispatch])

    return (
        <div className="h-96">
          <Typography.TitleContainer>Grupos</Typography.TitleContainer>
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
           {groups && groupData.map((group) => {
              return (
                <CardGrupo
                  key={group._id}
                  _id={group._id}
                  image={group.image}
                  name={group.name}
                />
              ); 
            })}
          </div>
          <div className="my-10 border-b-2 border-gray-300 pb-2">
                <Link to={'/grupos'} className="w-full flex justify-end items-center cursor-pointer">Más grupos <span className="ml-2 text-xl"><BsChevronDown/></span></Link>
            </div>
        </div>
    )
}

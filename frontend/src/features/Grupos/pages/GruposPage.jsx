import SearchBar from "../../../components/SearchBar/SearchBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ListCardFirends from "../../../components/ListCardFriends";
import CardGrupoPage from "../components/CardGrupoPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllGroups } from "../../../Redux/Actions/GroupGet";

export default function GruposPage() {
  const dispatch = useDispatch()
    const groups = useSelector((state) => state.group.groups)
      useEffect(() => {
        dispatch(getAllGroups())
    },[dispatch])
  return (
    <div>
          <SearchBar />

          <p>Grupo</p>
          <hr />
    
    
          {groups.map((grupoData) => {
             return (
              <CardGrupoPage
                key={grupoData._id}
                _id={grupoData._id}
                imagePlace={grupoData.image}
                imageUser={grupoData.users_admin[0].avatar}
                name={grupoData.users_admin[0].name}
                title={grupoData.name}
                description={grupoData.description}
                date={grupoData.date}
                location={grupoData.users_admin[0].location}
              />
            ); 
          })}
          

    </div>
  );
}

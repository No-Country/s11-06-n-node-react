import SearchBar from "../../../components/SearchBar/SearchBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ListCardFirends from "../../../components/ListCardFriends";
import CardGrupoPage from "../components/CardGrupoPage";

export default function GruposPage() {
    const gruposData = [
        {
          _id: 1,
          description: "Argentinos en Punta Cana",
          image:
            "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
          users_common: [
            {
              _id: "653d0f88fa241077e51c4910",
              name: "bot 1",
              imageUser:
                "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
            },
            {
              _id: "653d0f88fa241077e51c4910",
              name: "bot 1",
              imageUser:
                "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
            },
            {
              _id: "653d0f88fa241077e51c4910",
              name: "bot 1",
              imageUser:
                "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
            },
          ],
          users_admin: [
            {
              _id: "653d0f88fa241077e51c4910",
              location: "Punta Cana",
              name: "bot 1",
              imageUser:
                "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
            },
          ],
          date: "12/10/2023",
        },
        {
            _id: 1,
            description: "Argentinos en Italia",
            image:
              "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
            users_common: [
              {
                _id: "653d0f88fa241077e51c4910",
                name: "bot 1",
                imageUser:
                  "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
              },
              {
                _id: "653d0f88fa241077e51c4910",
                name: "bot 1",
                imageUser:
                  "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
              },
              {
                _id: "653d0f88fa241077e51c4910",
                name: "bot 1",
                imageUser:
                  "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
              },
            ],
            users_admin: [
              {
                _id: "653d0f88fa241077e51c4910",
                location: "Italia",
                name: "bot 1",
                imageUser:
                  "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
              },
            ],
            date: "12/10/2023",
          },
      ];

  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="mb-20 ml-0 lg:ml-64 px-5 md:px-10 mx-auto w-full">
        <div className="max-w-7xl mx-auto">
          <SearchBar />

          <p>Grupo</p>
          <hr />
          {gruposData.map((grupoData) => {
             return (
              <CardGrupoPage
                key={grupoData._id}
                _id={grupoData._id}
                imagePlace={grupoData.image}
                imageUser={grupoData.users_admin[0].imageUser}
                name={grupoData.users_admin[0].name}
                description={grupoData.description}
                date={grupoData.date}
                location={grupoData.users_admin[0].location}
              />
            ); 
          })}
        </div>
        
      </div>

      <div className="hidden lg:block">
        <ListCardFirends />
      </div>
    </div>
  );
}
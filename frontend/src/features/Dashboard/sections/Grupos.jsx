import CardGrupo from "../../../components/Cards/CardGrupo/CardGrupo";
import Typography from "../../../components/Typography";


export default function Grupos() {

    const gruposData = [
        {
          _id: 1,
          description: "Argentinos en Punta Cana",
          image:
            "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
          
        },
        {
            _id: 1,
            description: "Argentinos en Italia",
            image:
              "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
        }
      ];

    return (
        <div className="h-96">
            <Typography.TitleContainer>Grupos</Typography.TitleContainer>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {gruposData.map((grupoData) => {
             return (
              <CardGrupo
                key={grupoData._id}
                _id={grupoData._id}
                image={grupoData.image}
                description={grupoData.description}
              />
            ); 
          })}
        </div>
        </div>
    )
}

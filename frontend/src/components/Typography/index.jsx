const TitlePage = ({ className, children }) => 
    <h1  className={`${className} text-greenPrimary text-4xl font-bold `}> {children} </h1>

const TitleContainer = ({ className, children }) =>
    <h2  className={`${className} text-greenPrimary text-2xl font-bold mb-10`}> {children} </h2>

const SubtitleContainer = ({ className, children }) => 
    <h3  className={`${className} text-greenPrimary text-xl font-bold `}> {children} </h3>

const SubtitleSmall = ({ className, children }) => 
    <h3  className={`${className} text-greenPrimary text-lg font-bold mb-7`}> {children} </h3>

export const Base = ({ className, children }) => 
    <p  className={`${className} text-greenPrimary text text-lg font-normal `}> {children} </p>

const Small = ({ className, children }) => 
    <p  className={`${className} text-greenPrimary text-base `}>  {children} </p>

const Xs = ({ className, children }) => 
    <span className={`${className} text-greenPrimary text-sm font-normal`}> {children} </span>


const Typography = ({ className, children, direction = "vertical" }) => {


    const directionStyle =  (direction === "horizontal")  ? "flex flex-row" : " flex flex-col"

    return (
        <div className={`${className} ${directionStyle} gap-2 `}> 
            {children}
        </div>
    )
}


Typography.TitlePage = TitlePage;
Typography.TitleContainer = TitleContainer;
Typography.SubtitleContainer = SubtitleContainer;
Typography.SubtitleSmall = SubtitleSmall;
Typography.Base = Base;
Typography.Small = Small;
Typography.Xs = Xs;

export default Typography
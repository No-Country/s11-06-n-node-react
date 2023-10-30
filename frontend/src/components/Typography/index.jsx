const TitlePage = ({ className, children }) => 
    <h1  className={`${className} text-gray-950 text-4xl font-bold `}> {children} </h1>

const TitleContainer = ({ className, children }) =>
    <h2  className={`${className} text-slate-900 text-2xl font-black`}> {children} </h2>

const SubtitleContainer = ({ className, children }) => 
    <h3  className={`${className} text-slate-900 text-xl font-bold `}> {children} </h3>

export const Base = ({ className, children }) => 
    <p  className={`${className} text-slate-900 text text-lg font-normal `}> {children} </p>

const Small = ({ className, children }) => 
    <p  className={`${className} text-gray-950 text-base `}>  {children} </p>

const Xs = ({ className, children }) => 
    <span className={`${className} text-slate-950 text-sm font-normal`}> {children} </span>


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
Typography.Base = Base;
Typography.Small = Small;
Typography.Xs = Xs;

export default Typography
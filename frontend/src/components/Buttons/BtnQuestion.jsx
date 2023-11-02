import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";


export default function BtnQuestion({question, answer}) {


    const handleToggleText = () => {
        setShowText(!showText);
    };
    const [showText, setShowText] = useState(false);

    return (
        <div className=''>
            <button onClick={handleToggleText} className='flex justify-between items-center w-full py-4 border-b border-gray-300'>
                <p className="text-start">{question}</p>
                <span className='text-greenSecundary'>{showText ? <BsChevronUp/> : <BsChevronDown/>} </span>
            </button>
            {showText && 
                <div className="mb-6 bg-graySecundary p-5 rounded-b-md">
                    <p className="text-greenSecundary">{answer}</p>
                </div>
            }
        </div>
    )
}

function ImageProfileUserSmall({imagen}) {
    return (
            <div 
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{backgroundImage: `url(${imagen})`}}
            >
            </div> 
    )
}
function ImageProfileUserMedium({imagen}) {
    return (
            <div 
                className="w-20 h-20 rounded-full bg-cover bg-center"
                style={{backgroundImage: `url(${imagen})`}}
            >
            </div> 
    )
}
function ImagenBg({imagen}) {
    return (
            <div 
                className="h-full rounded-md bg-cover bg-center"
                style={{backgroundImage: `url(${imagen})`}}
            >
            </div> 
    )
}

export {
    ImageProfileUserMedium,
    ImageProfileUserSmall,
    ImagenBg
} 

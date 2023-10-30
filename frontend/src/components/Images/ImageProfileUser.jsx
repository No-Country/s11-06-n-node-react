function ImageProfileUserSmall({imagen}) {
    return (imagen?
            <div 
                className="w-12 h-12 rounded-full bg-cover bg-center border-2"
                style={{backgroundImage: `url(${imagen})`}}
            >
            </div> : 
            <div>Cargando...</div>
    )
}
function ImageProfileUserMedium({imagen}) {
    return (
        imagen?
            <div 
                className="w-20 h-20 rounded-full bg-cover bg-center"
                style={{backgroundImage: `url(${imagen})`}}
            >
            </div> : 
            <div>Cargando...</div>
    )
}
function ImageProfileUserLarge({imagen}) {
    
    return (imagen?
            <div 
                className="w-40 h-40 rounded-full bg-cover bg-center"
                style={{backgroundImage: `url(${imagen})`}}
            >
            </div> : 
            <div>Cargando...</div>
    )
}
function ImageBg({imagen,className}) {
    return (
            <div 
                className={`h-full rounded-t-lg bg-cover bg-center ${className}`}
                style={{backgroundImage: `url(${imagen})`}}
            >
            </div> 
    )
}

export {
    ImageProfileUserLarge,
    ImageProfileUserMedium,
    ImageProfileUserSmall,
    ImageBg
} 

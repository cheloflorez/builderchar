    return (
        <div 
            className="p-2 flex flex-col relative overflow-visible"
            style={{
                backgroundImage: 'url(/3rd/Tree4002.webp)',
                backgroundSize: '100% 100%', // Ajusta exactamente al contenedor
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // Dimensiones fijas basadas en tu imagen (ajusta estos valores)
                width: '300px',  // Ancho real de tu imagen
                height: '600px', // Alto real de tu imagen
                minWidth: '300px',
                minHeight: '600px',
                // Alternativa: usar aspect-ratio si conoces la proporción
                // aspectRatio: '1/2', // Por ejemplo, si es 1:2 (ancho:alto)
            }}
        >   
            {/* Contenido del árbol - con z-index para estar encima del background */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header del árbol */}
                <div className="text-center mb-2 flex-shrink-0">
                    <div className="text-xs text-gray-200 drop-shadow">Puntos: {spentPoints}</div>
                </div>

                {/* Grid de skills - ocupa el espacio restante */}
                <div className="grid grid-cols-4 grid-rows-9 gap-2 flex-1 min-h-0">
                    {skillGrid}
                </div>
            </div>
        </div>
    );

        return (
        <div 
            className=" p-2 flex flex-col relative overflow-visible"
            style={{
                backgroundImage: 'url(/3rd/Tree4003.webp)',
                backgroundSize: '100% 100%', // Ajusta exactamente al contenedor
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // Dimensiones fijas basadas en tu imagen (ajusta estos valores)
                width: '300px',  // Ancho real de tu imagen
                height: '600px', // Alto real de tu imagen
                minWidth: '300px',
                minHeight: '600px',
                // Alternativa: usar aspect-ratio si conoces la proporción
                // aspectRatio: '1/2', // Por ejemplo, si es 1:2 (ancho:alto)
            }}
        >   
            {/* Contenido del árbol - con z-index para estar encima del background */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header del árbol */}
                <div className="text-center mb-2 flex-shrink-0">
                    <div className="text-xs text-gray-200 drop-shadow">Puntos: {spentPoints}</div>            
                </div>

                {/* Grid de skills - ocupa el espacio restante */}
                <div className="grid grid-cols-4 grid-rows-9 gap-2 flex-1 min-h-0">
                    {skillGrid}
                </div>
            </div>
        </div>
    );
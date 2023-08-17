import { useState } from 'react'
import "../styles/Loader.css"

import castformNormal from "/Castform.webp"
import castformWater from "/Castform-Rainy.webp"
import castformIce from "/Castform-Snowy.webp"
import castformFire from "/Castform-Sunny.webp"

const Loader = () => {
    const [castform, setCastform] = useState();

    if (!castform) {
        const random = Math.floor(Math.random() * 4);

        switch (random) {
            case 0:
                return setCastform(castformNormal);
            case 1:
                return setCastform(castformWater);
            case 2:
                return setCastform(castformIce);
            case 3:
                return setCastform(castformFire);
        }

    }

    return (
        <div id="pokecity__loader">
            <img src={castform} alt="castform" />
            <h2>Cargando...</h2>
            <h5>Castform está recopilando los datos meteorológicos de la ciudad introducida...</h5>
        </div>
    )
}

export default Loader

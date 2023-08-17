import { useState } from 'react'
import castform from "/Castform.webp"
import "../styles/Bienvenida.css"
import cities from "cities.json"
import { toast } from 'sonner'
import { useGlobalStore } from '../store/useGlobalStore'

const Bienvenida = () => {
    const [ciudad, setCiudad] = useState<string>("");
    const [cambiarCiudad] = useGlobalStore(state => [state.cambiarCiudad]);

    const handleForm = (e: Event) => {
        e.preventDefault();

        // Si la ciudad se encuentra en la lista del cities.json, se cambiará la
        // ciudad en el estado global y acto seguido pasará a la interfaz principal.
        if (cities.find((city: any) => city.name === ciudad)) {
            cambiarCiudad(ciudad);
        } else {
            toast.error("La ciudad no está en la lista");
            setCiudad("");
        }
    }

    return (
        <>
            <div id="pokeweather__main">
                <img src={castform} alt="logo" />
                <h1>PokeWeather</h1>
                <h3>Tu aplicación del tiempo</h3>

                <div id="pokeweather__mainform">
                    <form onSubmit={(e) => handleForm(e)}>
                        <h4>Introduce la ciudad que deseas consultar</h4>
                        <input type="text" value={ciudad} placeholder='Introduce aquí el nombre de la ciudad' required onChange={(event) => setCiudad(event.target.value)} />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Bienvenida

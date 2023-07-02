import { useState } from 'react'
import castform from "/Castform.webp"
import "../styles/Bienvenida.css"
import cities from "cities.json"
import { Toaster, toast } from 'sonner'
import { useGlobalStore } from '../store/useGlobalStore'
import PokeCity from './PokeCity'

const Bienvenida = () => {
    const [ciudad, setCiudad] = useState<string>("");
    const [ciudadActual, cambiarCiudad] = useGlobalStore(state => [state.ciudad, state.cambiarCiudad]);

    const handleForm = (e: Event) => {
        e.preventDefault();

        if (cities.find(city => city.name === ciudad)) {
            cambiarCiudad(ciudad);
        } else {
            toast.error("La ciudad no está en la lista");
        }

        setCiudad("");
    }

    return (
        <>
            {ciudadActual === "" ? (
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
                <Toaster richColors />
            </div>
            ) : (<PokeCity />)
            }
        </>
    )
}

export default Bienvenida

import { useEffect, useState } from 'react';
import "../styles/PokeCity.css";
import { TiempoCiudad } from '../types/TiempoCiudad.d';
import { Weather } from '../types/Weather.d';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';
import devolverFondo from '../utils/devolverFondo';
import devolverColor from '../utils/devolverColor';
import { useGlobalStore } from '../store/useGlobalStore';
import datos from "../mock/datos.json"
import devolverTiempo from '../utils/devolverTiempo';

const PokeCity = () => {
    // Se recupera la variable de la ciudad en el estado global
    const ciudad: any = useGlobalStore((state: unknown) => state.ciudad);

    // Se recuperan los datos de la ciudad y su función del estado global
    const [datosCiudad, cambiarDatosCiudad] = useGlobalStore((state: unknown) => [state.datosCiudad, state.cambiarDatosCiudad]);

    const [fondo, setFondo] = useState<string>();
    const [tiempoCiudad, setTiempoCiudad] = useState<TiempoCiudad>(datos[0]);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${import.meta.env.VITE_APIKEY}&units=metric`

    //useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${import.meta.env.VITE_APIKEY}&units=metric`).then(res => cambiarDatosCiudad(res));
    //const datos = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${import.meta.env.VITE_APIKEY}&units=metric`);

    useEffect(() => {
        const fetchData = async () => {
            const url_datos = await fetch(url).then(res => res.json());
            if (url_datos) {
                cambiarDatosCiudad(url_datos);
            }

        }

        fetchData();

    }, [cambiarDatosCiudad])

    useEffect(() => {
        if (datosCiudad) {
            setFondo(devolverFondo(datosCiudad.main.temp));
            setTiempoCiudad({
                nombre: datosCiudad.name,
                temp_actual: datosCiudad.main.temp,
                temp_max: datosCiudad.main.temp_max,
                temp_min: datosCiudad.main.temp_min,
                weather: devolverTiempo(datosCiudad.weather[0].main),
                vel_viento: datosCiudad.wind.speed,
                dir_viento: datosCiudad.wind.deg,
            })
        }
    }, [datosCiudad])

    return (
        <>
            {!datosCiudad ? (<Loader />) : (
                <div id="pokecity__container"
                    style={{
                        backgroundImage: `url(${fondo})`,
                    }}
                >
                    <div id="pokecity__cabecera">
                        <h2 id="pokecity__ciudad">{tiempoCiudad.nombre}</h2>
                        <h3 id="pokecity__currtemp"
                            style={{
                                textShadow: `0 0 .35em ${devolverColor(tiempoCiudad.temp_actual)}`
                            }}
                        >{`${(tiempoCiudad.temp_actual).toFixed(0)} ºC`}</h3>
                        <h3 id="pokecity__weather">{tiempoCiudad.weather}</h3>
                    </div>
                    <div id="pokecity__minmaxtemp">
                        <h4 id="pokecity__mintemp">{`${(tiempoCiudad.temp_min).toFixed(0)} ºC`}</h4>
                        <h4 id="pokecity__maxtemp">{`${(tiempoCiudad.temp_max).toFixed(0)} ºC`}</h4>
                    </div>
                </div>
            )}
        </>
    )
}

export default PokeCity

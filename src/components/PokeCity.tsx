import { useEffect, useState } from 'react';
import "../styles/PokeCity.css";
import { TiempoCiudad } from '../types/TiempoCiudad.d';
import { Weather } from '../types/Weather.d';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';
import devolverFondo from '../utils/devolverFondo';
import devolverColor from '../utils/devolverColor';

const PokeCity = () => {
    const [datos, setDatos] = useState<object>();
    const [fondo, setFondo] = useState();
    useFetch(`https://api.openweathermap.org/data/2.5/forecast?q=Ciudad+Real&appid=${import.meta.env.VITE_APIKEY}&units=metric`).then(res => setDatos(res.datosRef.current));

    const [tiempoCiudad, setTiempoCiudad] = useState<TiempoCiudad>({
        nombre: "Ciudad Real",
        temp_actual: 35.0,
        temp_max: 31.0,
        temp_min: 18.0,
        weather: Weather.Clear,
        vel_viento: 2.5,
        dir_viento: 12
    });

    useEffect(() => {

        if (datos) { 
            setTiempoCiudad({
                nombre: datos.city.name,
                temp_actual: datos.list[0].main.temp,
                temp_max: datos.list[0].main.temp_max,
                temp_min: datos.list[0].main.temp_min,
                weather: Weather.Clear,
                vel_viento: datos.list[0].wind.speed,
                dir_viento: datos.list[0].wind.deg,
            })
            setFondo(devolverFondo(tiempoCiudad.temp_actual));
        }
    }, [datos])

    return (
        <>
            {!datos ? (<Loader />) : (
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

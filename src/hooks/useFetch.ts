import { useEffect, useState, useRef } from "react";

const useFetch = async (url: string) => {
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const datosRef = useRef();
    let datos: object;

    useEffect(() => {
        const obtenerDatos = async () => {

            setIsLoading(true);

            try {
                const resultados = await fetch(url)
                datos = await resultados.json();
            } catch {
                setError("Error al obtener los datos")
            } finally {
                setIsLoading(false);

                if(!datosRef.current) {
                    datosRef.current = datos;
                }
            }
        }

        obtenerDatos();
    }, []);

    return { datosRef, error, isLoading };
}

export default useFetch;

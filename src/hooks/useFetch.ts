import { useEffect, useState, useRef } from "react";

const useFetch = (url: string) => {
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const datosRef = useRef();
    let datos: object = {};

    const fetchData = async () => {
        try {
            const respuesta: any | undefined = await fetch(url);
            datos = await respuesta.json();
            if (!datosRef.current) {
                datosRef.current = datos;
            }
        } catch {
            setError("Error al obtener los datos")
        } finally {
            setIsLoading(false);
        }
    }

    fetchData();

    //return { datosRef, error, isLoading };
    return datosRef.current;
}

export default useFetch;

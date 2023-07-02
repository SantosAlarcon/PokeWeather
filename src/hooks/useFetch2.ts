import { useCallback, useEffect, useReducer, useState } from "react";
import cityReducer from "../reducers/cityReducer";

interface Results {
    estado: object,
    error?: string,
    isLoading: boolean
}

const useFetch = async (url: string): Promise<Results> => {
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [estado, dispatch] = useReducer(cityReducer, {
        ciudad: {}
    })


    const obtenerDatos = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                setError("No se han podido recuperar los datos");
            } else {
                const responseJson = await response.json();
                dispatch({tipo: "CAMBIAR_CIUDAD", payload: responseJson});
            }
        } catch {
            setError("Error al obtener los datos")
        } finally {
            setIsLoading(false);
        }

    }, [url])

    useEffect(() => { 
        obtenerDatos();
    }, [obtenerDatos]);

    return {estado, error, isLoading};
}

export default useFetch;

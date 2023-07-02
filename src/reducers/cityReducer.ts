const cityReducer = (estado: object, accion: {tipo: string; payload?: object}) => {
    switch (accion.tipo) {
        // Acción para cambiar la ciudad.
        case "CAMBIAR_CIUDAD":
            return {
                ciudad: accion.payload
            };

        default:
            return estado;
    }
}

export default cityReducer;

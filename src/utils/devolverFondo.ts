/**
 * Función que devuelve una imágen de fondo en función de la temperatura
 * pasada por parámetro.
 * @param temp Temperatura en grados Celcius
 */

const devolverFondo = (temp: number) => {
    if (temp >= 40) {
        return "/Groudon.webp"
    } else if (temp >= 30) {
        return "/Typhlosion.webp"
    } else if (temp >= 15) {
        return "/Kangaskhan.webp"
    } else if (temp >= 0) {
        return "/Articuno.webp"
    }
}

export default devolverFondo

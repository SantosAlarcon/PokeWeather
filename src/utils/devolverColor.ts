const devolverColor = (temp: number) => {
    if (temp >= 40) {
        return "#ff6600"
    } else if (temp >= 30) {
        return "#ffaa00"
    } else if (temp >= 15) {
        return "#ffffff66"
    } else if (temp >= 0) {
        return "#6666ff"
    }
}

export default devolverColor

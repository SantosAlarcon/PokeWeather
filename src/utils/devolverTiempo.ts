import { Weather } from "../types/Weather.d";

const devolverTiempo = (wthr: string) => {
    switch (wthr) {
        case "Clear":
            return Weather.Clear;
        case "Rain":
            return Weather.Rain;
        case "Cloud":
            return Weather.Cloud;
        case "Storm":
            return Weather.Storm;
        case "Snow":
            return Weather.Snow;
        case "Extreme":
            return Weather.Extreme;
    }
}

export default devolverTiempo;

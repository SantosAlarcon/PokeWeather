import {describe, expect, test} from "@jest/globals"
import devolverColor from "./devolverColor";

describe("Pruebas de DevolverColor", () => {
    test("Temperatura >= 40 ºC - Color rojizo", () => {
        const temp = 42.0;
        expect(devolverColor(temp)).toBe("#ff6600");
    })
    test("Fondo de Articuno cuando la temperatura es menor de 5 ºC", () => {
        const temp = 4.0;
        expect(devolverColor(temp)).toBe("#6666ff");
    })
    test("Fondo de Typhlosion cuando la temperatura es mayor o igual a 30 ºC", () => {
        const temp = 35.0;
        expect(devolverColor(temp)).toBe("#ffaa00");
    })
    test("Fondo de Kangaskhan cuando la temperatura es mayor o igual a 20 ºC", () => {
        const temp = 22.0;
        expect(devolverColor(temp)).toBe("#ffffff66");
    })
});

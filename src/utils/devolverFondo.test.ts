import {describe, expect, test} from "@jest/globals"
import devolverFondo from "./devolverFondo";

describe("Pruebas de DevolverFondo", () => {
    test("Fondo de Groudon cuando la temperatura es mayor de 40 ºC", () => {
        const temp = 42.0;
        expect(devolverFondo(temp)).toBe("/Groudon.webp");
    })
    test("Fondo de Articuno cuando la temperatura es menor de 5 ºC", () => {
        const temp = 4.0;
        expect(devolverFondo(temp)).toBe("/Articuno.webp");
    })
    test("Fondo de Typhlosion cuando la temperatura es mayor o igual a 30 ºC", () => {
        const temp = 35.0;
        expect(devolverFondo(temp)).toBe("/Typhlosion.webp");
    })
    test("Fondo de Kangaskhan cuando la temperatura es mayor o igual a 20 ºC", () => {
        const temp = 22.0;
        expect(devolverFondo(temp)).toBe("/Kangaskhan.webp");
    })
});

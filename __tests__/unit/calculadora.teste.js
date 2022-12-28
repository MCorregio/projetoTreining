const calculadora = require("../../src/calculadora");

const massaSomarJSON = require("../../vendors/somar");
const massaSubtrairJSON = require("../../vendors/subtrair");
const massaMultiplicarJSON = require("../../vendors/multiplicar");
const massaDividirJSON = require("../../vendors/dividir");

test.each(massaSomarJSON.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))("Somar %f / %f",(num1, num2, resultadoEsperado) => {
    expect(calculadora.somarDoisNumeros(num1, num2)).toBe(resultadoEsperado);
});

test.each(massaSubtrairJSON.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))("Subtrair %f / %f",(num1, num2, resultadoEsperado) => {
    expect(calculadora.subtrairDoisNumeros(num1, num2)).toBe(resultadoEsperado);
});

test.each(massaMultiplicarJSON.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))("Multiplicar %f / %f",(num1, num2, resultadoEsperado) => {
    expect(calculadora.multiplicarDoisNumeros(num1, num2)).toBe(resultadoEsperado);
});

test.each(massaDividirJSON.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))("Dividir %f / %f",(num1, num2, resultadoEsperado) => {
    expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
});
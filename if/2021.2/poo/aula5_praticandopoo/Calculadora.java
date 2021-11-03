package aula5_praticandopoo;

        /*Implemente uma classe que represente uma calculadora com as 4 operações básicas (soma, subtração,
        multiplicação e divisão) sobre números reais (ponto flutuante). Com base nesta classe, crie uma pequena
        aplicação onde um usuário escolhe uma operação, passa dois operandos e recebe o resultado da
        operação impresso na tela.*/

public class Calculadora {

    public double soma(double num1, double num2){
        return num1 + num2;
    }
    public double subtracao(double num1, double num2){
        return num1 - num2;
    }
    public double mult(double num1, double num2){
        return num1 * num2;
    }
    public double divi(double num1, double num2){
        return num1 / num2;
    }
}

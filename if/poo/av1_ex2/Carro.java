package av1_ex2;

public class Carro {

        private int potencia;
        private int torque;
        private int estabilidade;
        private int aerodinamica;
        private int velocidadeFinal;

        public Carro(int potencia, int torque, int estabilidade, int aerodinamica, int velocidadeFinal) {
                this.potencia = potencia;
                this.torque = torque;
                this.estabilidade = estabilidade;
                this.aerodinamica = aerodinamica;
                this.velocidadeFinal = velocidadeFinal;
        }

        public int getPotencia() {
                return potencia;
        }

        public int getTorque() {
                return torque;
        }

        public int getEstabilidade() {
                return estabilidade;
        }

        public int getAerodinamica() {
                return aerodinamica;
        }

        public int getVelocidadeFinal() {
                return velocidadeFinal;
        }
}

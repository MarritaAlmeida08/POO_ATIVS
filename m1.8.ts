// Questão 8

class Circulo {
    raio: number = 0;

    area(): number {
        return Math.PI * this.raio * this.raio;
    }

    perimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

class TestaCirculo {
    testar(): void {
        const c = new Circulo();
        c.raio = 5;
        console.log("Raio:\t" + c.raio);
        console.log("Área:\t" + c.area());
        console.log("Perímetro:\t" + c.perimetro());
    }
}

const teste = new TestaCirculo();
teste.testar();
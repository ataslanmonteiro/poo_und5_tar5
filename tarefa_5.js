// Classe Aparelho
class Aparelho {
  ligar() {
    throw new Error("Implementar 'ligar'.");
  }
  desligar() {
    throw new Error("Implementar 'desligar'.");
  }
  exibir() {
    console.log("Exibir informações do aparelho.");
  }

// Subclasse Televisão
class Televisão extends Aparelho {
  ligar() {
    console.log("Televisão ligada.");
  }
  desligar() {
    console.log("Televisão desligada.");
  }
  exibir() {
    console.log("Isso é uma Televisão.");
  }
}

// Subclasse Microondas
class Microondas extends Aparelho {
  ligar() {
    console.log("Microondas ligado.");
  }
  desligar() {
    console.log("Microondas desligado.");
  }
  exibir() {
    console.log("Isso é um Microondas.");
  }
}

// Programa de teste
class testeAparelhos = () => {
  const tv = new Televisão();
  const microondas = new Microondas();

  tv.ligar();
  tv.exibir();
  tv.desligar();
  
  microondas.ligar();
  microondas.exibir();
  microondas.desligar();
};

}
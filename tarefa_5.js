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
}

// Subclasse Televisão
class Televisao extends Aparelho {
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

// Função de teste
const testeAparelhos = () => {
  const tv = new Televisao();
  const microondas = new Microondas();

  tv.ligar();
  tv.exibir();
  tv.desligar();

  microondas.ligar();
  microondas.exibir();
  microondas.desligar();
};

// Executa o teste
testeAparelhos();

//Aqui um herói é criado, adicionando um nome e seu xp
let heroi = {
    nome: "Ronaldo",
    xp: 4050,
    nivel: ""
};

//Aqui é uma estrutura de testes para descobrir o nível do herói
heroi.xp < 1000 ? heroi.nivel="Ferro" :
heroi.xp <= 2000 ? heroi.nivel="Bronze" :
heroi.xp <= 5000 ? heroi.nivel="Prata" :
heroi.xp <= 7000 ? heroi.nivel="Ouro" :
heroi.xp <= 8000 ? heroi.nivel="Platina" :
heroi.xp <= 9000 ? heroi.nivel="Ascendente" :
heroi.xp <= 10000 ? heroi.nivel="Imortal" :
heroi.nivel="Radiante";

console.log("O Herói de nome " + heroi.nome + " está no nível de " + heroi.nivel)

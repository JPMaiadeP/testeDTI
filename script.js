// console.log(melhorPetShop("09/06/2024 3 5"));
/* Informações dos PetShops
* Meu Canino Feliz:
- 2 km de distância
- meio de semana:
	- pq = R$ 20,00
	- gd = R$ 40,00
- fim de semana:
	- pq = R$ 24,00
	- gd = R$ 48,00

* Vai Rex:
- 1,7 km de distância
- meio de semana:
	- pq = R$ 15,00
	- gd = R$ 50,00
- fim de semana:
	- pq = R$ 20,00
	- gd = R$ 55,00

* ChowChawgas:
- 800m de distância
- todos os dias:
	- pq = R$ 30,00
	- gd = R$ 45,00
*/

//Função calcula o preço total de cada Pet Shop e retorna 
//o nome do melhor canil e o preço total
function melhorPetShop(input) {
    //early return -1 caso o input esteja vazio
    if (input.length == 0) {
        return -1;
    }

    //trata e converte o input em arrays
    let arrInput = input.split(" ");
    let arrData = arrInput[0].split("/");

    //define a data e checa se é fim de semana
    let diaData = new Date();
    diaData.setDate(arrData[0]);
    diaData.setMonth(arrData[1] - 1);
    diaData.setFullYear(arrData[2]);
    let diaSem = 1;
    if (diaData.getDay() == 6 || diaData.getDay() == 0) {
        diaSem = 0;
    }

    let petShops = [
        {
            nome: "Meu Canino Feliz",
            dist: 2,
            precoUtil: { caoPq: 20, caoGd: 40 },
            precoFds: { caoPq: 24, caoGd: 48 },
            precoTotal: 0
        },
        {
            nome: "Vai Rex",
            dist: 1.7,
            precoUtil: { caoPq: 15, caoGd: 50 },
            precoFds: { caoPq: 20, caoGd: 55 },
            precoTotal: 0
        },
        {
            nome: "ChowChawgas",
            dist: 0.8,
            precoUtil: { caoPq: 30, caoGd: 45 },
            precoFds: { caoPq: 30, caoGd: 45 },
            precoTotal: 0
        }
    ];

    //Função para calcular o custo total baseado no dia da semana
    let calcCusto = (petShop) => {
        let precoDia;
        if (diaSem == 1) {
            precoDia = petShop.precoUtil;
        } else {
            precoDia = petShop.precoFds;
        }

        return (precoDia.caoPq * arrInput[1]) + (precoDia.caoGd * arrInput[2]);
    }

    //Meu Canino Feliz 
    let meuCan = calcCusto(petShops[0]);
    petShops[0].precoTotal = meuCan;

    //Vai Rex  
    let vaiRex = calcCusto(petShops[1]);
    petShops[1].precoTotal = vaiRex;

    //ChowChawgas
    let chowCh = calcCusto(petShops[2]);
    petShops[2].precoTotal = chowCh;

    let melhorPet;
    let menorPreco = Infinity;
    //Função calcula qual o melhor PetShop baseado no preço e em caso de empate por distância
    petShops.forEach((petShop) => {
        if (petShop.precoTotal < menorPreco) {
            melhorPet = petShop;
            menorPreco = petShop.precoTotal;
        } else if (petShop.precoTotal == menorPreco && petShop.dist < melhorPet.dist) {
            melhorPet = petShop;
            menorPreco = petShop.precoTotal;
        }
    });

    //cria e retorna a string baseada na saída desejada
    let strPet = `${melhorPet.nome} ${melhorPet.precoTotal}`;
    return strPet;
}

function getBestPetShop() {
    let input = document.getElementById('input').value;
    let result = melhorPetShop(input);
    document.getElementById('result').textContent = result;
}

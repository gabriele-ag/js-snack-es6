// Snack 1

// Dichiaro le variabili
let bici1 = {
    nome: "Mountain Bike",
    peso: 15
};
  
let bici2 = {
    nome: "Bici da Corsa",
    peso: 10
};
  
let bici3 = {
    nome: "Bici da Città",
    peso: 12
};
  
let bici4 = {
    nome: "E-Bike",
    peso: 20
};


// Creo Array delle bici
const totBici = []

totBici.push(bici1, bici2, bici3, bici4)
console.log(totBici)

// Cerco solo la bici con il peso minore
let biciPesoMinore = totBici[0]

for (let i = 0; i < totBici.length; i++) {
    const curBici = totBici[i]
    console.log(curBici)
    if (curBici.peso < biciPesoMinore.peso ) {
        biciPesoMinore = curBici
        
    }
}

// Stampo il risultato
console.log(`La bici con peso minore è:`, biciPesoMinore)


// Fine Snack 1


console.log(`--------------------------------`)



// Snack 2

// Dichiaro le variabili
let squadra1 = {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
  };
  
let squadra2 = {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  };
  
let squadra3 = {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  };
  
let squadra4 = {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  };


// Creo array delle squadre e dei soli falli subiti
const totSquadre = []
const falliAttuali = []

totSquadre.push(squadra1, squadra2, squadra3, squadra4);


// Creo dei punteggi da inserire nelle relative key
let puntiCasuali = 0;
let falliCasuali = 0;
  
for (let i = 0; i < totSquadre.length; i++) {
    puntiCasuali = Math.floor(Math.random() * 100);
    falliCasuali = Math.floor(Math.random() * 100)
    totSquadre[i].puntiFatti = puntiCasuali;
    totSquadre[i].falliSubiti = falliCasuali;
}


// Pusho un array di soli falli subiti da ogni squadra
for (let i = 0; i < totSquadre.length; i++) {
    delete totSquadre[i].puntiFatti
    falliAttuali.push(totSquadre[i])
}


// Stampo i risultati
console.log(totSquadre)
console.log(falliAttuali);
  
// Fine snack 2
  

// Snack 3




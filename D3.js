const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '277',  
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]





/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/

let characters = []

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters". 
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "starWarsCharacters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0 ; i < starWarsCharacters.length; i++) {
  console.log(starWarsCharacters[i].name)
}

let starWarsNames = []

for (let i=0; i< starWarsCharacters.length; i++) {
  starWarsNames.push(starWarsCharacters[i].name)

}
console.log("starWarsNames", starWarsNames)

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno
  tutti gli oggetto femminili, CON QUESTA STRUTTURA: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/


let femaleCharacters =[]

for (let i=0; i < starWarsCharacters.length; i++) {
  if ( starWarsCharacters[i].gender === "female")
  {
femaleCharacters.push(starWarsCharacters[i])}
}

console.log("female characters", femaleCharacters)


//???????????????????????????????????????????? come rimuovo le voci che non mi interessano? 


/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/




const eyeColorArrays = {
  blue: [],
  yellow: [],
  red: [],
  bluegray: [],
  brown: [],
};

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/







for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];
  const eyeColor = character.eye_color;

  switch (eyeColor) {
    case 'blue':
      eyeColorArrays.blue.push(character);
      break;
    case 'yellow':
      eyeColorArrays.yellow.push(character);
      break;
    case 'red':
      eyeColorArrays.red.push(character);
      break;
    case 'blue-gray':
      eyeColorArrays.bluegray.push(character);
      break;
    case 'brown':
      eyeColorArrays.brown.push(character);
      break;
    default:
      break;
  }
}

console.log(eyeColorArrays);


/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let crewMass = 0;
let i = 0;

while (i < starWarsCharacters.length) {
  const character = starWarsCharacters[i];
  const characterMass = parseInt(character.mass);

  if (!isNaN(characterMass)) {
    crewMass += characterMass;
  }

  i++;
}

console.log("Total crew mass: " + crewMass);

/* ESERCIZIO 7
  Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
  (sei in difficoltà? cerca su un motore di ricerca switch case e conditionals)

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è uguale a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/



let totalMass = 0;

for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];
  const characterMass = parseInt(character.mass);

  if (!isNaN(characterMass)) {
    totalMass += characterMass;
  }
}

switch (true) {
  case totalMass < 500:
    console.log("Ship is under loaded");
    break;
  case totalMass === 500:
    console.log("Ship is half loaded");
    break;
  case totalMass > 700 && totalMass <= 900:
    console.log("Warning: Load is over 700");
    break;
  case totalMass > 900 && totalMass <= 1000:
    console.log("Critical Load: Over 900");
    break;
  case totalMass > 1000:
    console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
    break;
  default:
    console.log("Unknown load condition");
    break;
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/


const newGenderCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];
  
  if (character.gender === 'n/a') {
    const newGenderCharacter = { ...character, gender: 'robot' };
    newGenderCharacters.push(newGenderCharacter);
  } else {
    newGenderCharacters.push(character);
  }
}

console.log(newGenderCharacters);


/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Usa uno più for loop per raggiungere il risultato

  (tip: cerca un metodo degli array per rimuovere un elemento)

  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
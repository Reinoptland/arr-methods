// Gebruik array methoden voor alle onderstaande opdrachten

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Thomas", last: "Edison", year: 1847, passed: 1931 },
];

// Ik wil een uitvinder vinden met de achterNaam "Meitner"
// - for loop!
// - find?
// Q: Waarom Array methoden (waarom geen for loop?)
// - Korter!
// - Descriptief -> for loop kan alles, find doet iets specifieks
// - Declarative

// - [x] De naam opslaan van de uitvinder die ik wil vinden: variabele
// - [x] Loopen door de array van uitvinders
// - [x] Ik kan stoppen met loopen wanneer: De naam de uitvinder hetzelfde is als de naam die ik zoek
//  - [x] Vergelijken: de naam die ik zoek met de naam van de uitvinder
//  - [x] De loop stoppen
//  - [x] De uitkomst loggen (of opslaan)

const lastNameToFind = "Meitner";

function findInventorByLastName(lastName) {
  // Imperative: serie stappen die we gaan doorlopen
  for (let index = 0; index < inventors.length; index++) {
    const inventor = inventors[index];
    if (inventor.last === lastName) {
      return inventor;
    }
  }
}

// Declarative
// - Ik wil iets "find"en
// - en een conditie
const foundInventor2 = inventors.find((inventor) => {
  return inventor.last === lastNameToFind;
}); // true of fals

const result = inventors.find((inventor) => {
  console.log("EEN UITVINDER:", inventor.last);
  return inventor.last === lastNameToFind;
});
console.log("RESULT", result);

const foundInventor = findInventorByLastName(lastNameToFind);
// console.log("GEVONDEN?", foundInventor);

// Hoe werkt find:
// - Je geeft een functie mee aan find (als argument)
// - Find gaat de function aanroepen, met elk element van de array als argument
//  - Als false returned uit de functie -> ga door met zoeken
//  - Als je true returned uit de functie -> we hebben hem gevonden! (find stop dan)

console.log(foundInventor2);

// 1. Filter de lijst op uitvinders die geboren zijn in de 16e eeuw
// Verwachte uitkomst:
// [{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }]
const inventorsFrom16thCentury = inventors.filter((inventor) => {
  // console.log("INSIDE FILTER", 1500, inventor.year, 1600);
  // console.log("KEEP:", inventor.year >= 1500 && inventor.year < 1600); // true or false
  return inventor.year >= 1500 && inventor.year < 1600;
  // return true -> Houden
  // rturn false -> Worden ze niet toegevoegd aan het array wat je terugkrijgt
});

console.log(inventorsFrom16thCentury);

// 2. Maak een array met daarin alle geboortejaren van de uitvinders
// Verwachte uitkomst: [1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847];

const birthYears = inventors.map((inventor) => inventor.year);

console.log(birthYears);

// 3. Maak een array met daarin alle volledige namen van de uitvinders (dus voor- en achternaam als één string)
// Verwachte uitkomst: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']

// 4. Sorteer de uitvinders op geboortejaar, oplopend van oudste naar jongste uitvinder
// Verwachte uitkomst:
// [
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
// ]

const sorted = inventors.sort((inventorA, inventorB) => {
  console.log("WHAT IS A?", inventorA.year, "WHAT IS B?", inventorB.year);
  // what moeten we returnen?
  // 1754 - 1987 => negatief getal
  // 1910 - 1647 => positief getal
  // 1900 - 1900 => 0
  return inventorA.year - inventorB.year;
  // if (inventorA.year > inventorB.year) {
  //   return 1;
  // }

  // if (inventorA.year < inventorB.year) {
  //   return -1;
  // }

  // if (inventorA.year === inventorB.year) {
  //   return 0;
  // }
  // OF een positief getal: 1 of 10, 278 -> schuift op naar rechts in de array
  // OF een negatief getal: -1 of -10 of -9864 -> schuift op naar links
  // OF 0 -> blijft op dezelfde plek
});

console.log(sorted);

// 5. Sorteer de uitvinders op hoeveel jaren ze geleefd hebben, van langste leven naar kortste leven
// Verwachte uitkomst:
// [
// { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
// { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
// { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
// { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
// { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
// { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
// { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
// { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
// ]

// 6. Vind de gegevens over de uitvinder wiens achternaam 'Edison' is.
// Verwachte uitkomst: { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }

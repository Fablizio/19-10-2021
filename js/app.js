let animal = prompt("Animale preferito: \n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda");


/*sistema switch*/

/*switch (animal){
    case "1":
        animal = "Chose the Dog";
    break;
    case "2":
        animal = "Chose the Cat";
    break;
    case "3":
        animal = "Chose the Goldfish";
    break;
    case "4":
        animal = "Chose the Monkey";
    break;
    case "5":
        animal = "Chose the Panda";
    break;
    default:
        animal = "Animal Not Found";
}

console.log (animal); */

/*sistema if*/

/*
if (animal == 1) {
    console.log("Chose the Dog");
}
 else if (animal == 2) {
    console.log("Chose the Cat");
}
else if (animal == 3) {
    console.log("Chose the Goldfish");
}
else if (animal == 4) {
    console.log("Chose the Monkey");
}
else if (animal == 5) {
    console.log("Chose the Panda");
}
else  {
    console.log ("Animal not Found");
}
*/

/*sistema ternario*/

    animalFound = animal == 1
    ? "Chose the Dog"
    : (animal == 2
        ? "Chose the Cat"
        : (animal == 3
            ? "Chose the Goldfish"
            : (animal == 4
                ? "Chose the Monkey"
                : (animal == 5
                    ? "Chose the Panda"
                    : "Animal not found"))));

console.log (animalFound);
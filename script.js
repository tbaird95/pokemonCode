let startPokemon = 'Ivysaur';
let pokemonLevel = 76
if (startPokemon === 'Charmander' && pokemonLevel >= 16 && pokemonLevel < 32){
  console.log("Your pokemon has evolved into a Charmeleon!");
} else if (startPokemon === 'Charmeleon' && pokemonLevel >= 32){
  console.log('Your pokemon has evolved into a Charizard!');
} else if (startPokemon === 'Squirtle' && pokemonLevel >= 16 && pokemonLevel < 32){
  console.log("Your pokemon has evolved into a Wartortle!");
} else if (startPokemon === 'Wartortle' && pokemonLevel >= 32){
  console.log('Your pokemon has evolved into a Blastoise!');
} else if (startPokemon === 'Bulbasaur' && pokemonLevel >= 16 && pokemonLevel < 32){
  console.log("Your pokemon has evolved into a Ivysaur!");
} else if (startPokemon === 'Ivysaur' && pokemonLevel >= 32){
  console.log('Your pokemon has evolved into a Venosaur!');
} else {
  console.log(`Your pokemon is ${startPokemon}.`);}

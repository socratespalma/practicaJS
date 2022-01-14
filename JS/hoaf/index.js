const getPokemons = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  let data = await res.json();
  let pokemonNames = data.results;
  console.log(pokemonNames);

  // * For loop
  // for (let i = 0; i < data.results.length; i++) {
  //   const element = data.results[i];
  //   console.log(element);
  // }

  // * For each
  // data.results.forEach((pokemon) => {
  //   console.log(pokemon.name);
  // });

  // * Filter method
  // const filteredNames = data.results.name.filter((name) => {
  //   name.startsWith("B");
  // });

  // let newArr = [];

  // data.results.map((pokemon) => {
  //   newArr.push(pokemon.name);
  // });
  // console.log(newArr);
};

getPokemons();

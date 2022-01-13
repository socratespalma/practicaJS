const getPokemons = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  let data = await res.json();
  let newArr = [];

  data.results.map((pokemon) => {
    newArr.push(pokemon.name);
  });
  console.log(newArr);
};

getPokemons();

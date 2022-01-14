const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

const getProducts = async () => {
  const [data, error] = await fetchData("https://fakestoreapi.com/products");
  !error ? console.log(data) : alert(error);
};

const getShoppingCart = async () => {
  const [data, error] = await fetchData("https://fakestoreapi.com/carts");
  !error ? console.log(data) : alert(error);
};

const getPokemons = async () => {
  const [data, error] = await fetchData(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  let pokemonNames = data.results;
  !error ? console.log(pokemonNames) : alert(error);

  // * For loop
  // for (let i = 0; i < data.results.length; i++) {
  //   const element = data.results[i];
  //   console.log(element);
  // }

  // * For each
  // data.results.forEach((pokemon) => {
  //   console.log(pokemon.name);
  // });

  // * Map method
  let newArr = [];

  pokemonNames.map((pokemon) => {
    newArr.push(pokemon.name);
  });
  console.log(`These are some pokemons: ${newArr}`);

  // * Filter method
  const filteredNames = newArr.filter((name) => {
    return name.startsWith("c");
  });
  console.log(`Pokemons that start with "c": ${filteredNames}`);
};

export { getProducts, getShoppingCart, getPokemons };

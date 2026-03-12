import { useEffect, useState } from "react";
import PokemonData from "./PokemonData";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const url = "https://pokeapi.co/api/v2/pokemon?limit=25";

  const fetchPokemon = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();

      const finalRes = data.results.map(async (currElem) => {
        let res = await fetch(currElem.url);
        let data = await res.json();
        return data;
      });

      const finalData = await Promise.all(finalRes);
      setPokemon(finalData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPokemon();
  }, []);

  // search functionality
  const pokemonSearch = pokemon.filter((currPoke) =>
    currPoke.name.toLowerCase().includes(search.toLowerCase()),
  );

  // for loading
  if (loading)
    return (
      <div className="flex gap-3 text-2xl items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        loading...{" "}
      </div>
    );

  // for error after loading
  if (error)
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );

  return (
    <div className="font-poppins bg-gray-200 min-h-screen px-6 py-10">
      {/* Header & Search */}
      <div className="flex flex-col items-center gap-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Let's Catch Pokémon
        </h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Pokémon"
          className="
          
             sm:w-1/2 md:w-1/3
            border-b-2 border-gray-400
            focus:border-blue-500
            outline-none
            py-2
            text-lg
            placeholder-gray-500
            transition-colors duration-200
          "
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonSearch.map((currElem) => (
          <PokemonData key={currElem.id} data={currElem} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;

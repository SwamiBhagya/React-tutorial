// using loading state and error state

import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
      const data = await res.json();
      setPokemon(data);
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

  if (loading)
    return (
      <div className="flex gap-3 text-2xl items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        loading...{" "}
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 pt-20">
      <h1 className="text-4xl font-semibold mb-6">Lets Catch Pokemon</h1>
      <div className="w-[90%] sm:w-[50%] md:w-[20%] h-100 rounded-2xl shadow-2xl bg-white p-4 flex flex-col items-center">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="mb-4 max-h-50 object-contain"
        />
        <h2 className=" text-2xl font-medium text-center">{pokemon.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-center">
          {" "}
          <span>speed : </span> <span>power : </span> <span>stats : </span>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

//
//
//
// This is the proper way to call an api
//  using fetch and then catch with loading
//
//
//
// import { useEffect, useState } from "react";
//
// const Pokemon = () => {
//   const [pokemon, setPokemon] = useState(null);
//
//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//       .then((res) => res.json())
//       .then((data) => {
//         setPokemon(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//
//   if (!pokemon) {
//     return (
//       <div className="flex gap-3 text-2xl items-center justify-center h-screen">
//         <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//         loading...{" "}
//       </div>
//     );
//   }
//
//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-200 pt-20">
//       <h1 className="text-4xl font-semibold mb-6">Lets Catch Pokemon</h1>
//       <div className="w-[90%] sm:w-[50%] md:w-[20%] h-100 rounded-2xl shadow-2xl bg-white p-4 flex flex-col items-center">
//         <img
//           src={pokemon.sprites.other.dream_world.front_default}
//           alt={pokemon.name}
//           className="mb-4 max-h-50 object-contain"
//         />
//         <h2 className=" text-2xl font-medium text-center">{pokemon.name}</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-center">
//           {" "}
//           <span>speed : </span> <span>power : </span> <span>stats : </span>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Pokemon;

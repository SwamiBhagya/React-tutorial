const PokemonData = ({ data }) => {
  return (
    <li
      className="
        bg-white
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        p-6
        flex
        flex-col
        items-center
        gap-4
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-105
        border
        border-gray-100
      "
    >
      <img
        src={data.sprites.other.dream_world.front_default}
        alt={data.name}
        className="h-32 w-32 object-contain drop-shadow-md"
      />

      <h2 className="text-xl font-semibold capitalize text-gray-800 tracking-wide">
        {data.name}
      </h2>

      <div className="flex justify-between w-full text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
        <span className="text-blue-500">Speed: 45 </span>
        <span className="text-red-500">Power: 60</span>
        <span className="text-green-500">
          Stats: {data.stats[0].base_stat}{" "}
        </span>
      </div>
    </li>
  );
};

export default PokemonData;

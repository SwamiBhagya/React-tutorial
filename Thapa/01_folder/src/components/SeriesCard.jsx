const SeriesCard = ({ data: { name, img_url, rating } }) => {
  return (
    <li className="m-5 w-90 shadow-xl">
      <div className="h-[40%] block w-full">
        <img src={img_url} alt={name} />
      </div>
      <div className="gap-1 my-10 p-3">
        <h1 className="text-2xl font-bold pl-0.5">Name: {name}</h1>
        <h5
          className={`text-xl text-gray-900 pl-1.5 ${rating > 8 ? "bg-green-400 " : "bg-red-400"}`}
        >
          Rating: {rating}
        </h5> 
        <button className="text-l border-2 p-1 m-3">Watch Now</button>
      </div>
    </li> 
  );
};

export default SeriesCard;

// const SeriesCard = ({ data }) => {

//   const { name, id, img_url, rating, description, cast, genre, watch_url } =
//     data;

//   return (
//     <li>
//       <div>
//         <img
//           src={img_url}
//           alt="qot"
//           style={{ width: "40%", height: "40%", display: "block" }}
//         />
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating: {rating}</h3>
//       <p>Summary: This is a good movie</p>
//       <button className="border-2 p-2 m-2">Watch me</button>
//     </li>
//   );
// };

// export default SeriesCard;
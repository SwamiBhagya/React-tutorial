import SeriesCard from "./SeriesCard";
import seriesData from "../api/seriesData.json";
const NetflixSeries = () => {
  return (
    <ul className="flex flex-wrap gap-10 justify-center">
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;

// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard";
// const NetflixSeries = () => {
//   return (
//     <ul>
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };
// export default NetflixSeries;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Card = ({ movies, i }) => {
  const [pic, setPic] = useState();
  useEffect(() => {
    setPic(`https://picsum.photos/300/40${i}`);
  }, []);

  return (
    <Link
      to={`/movie/${movies.id}`}
      className="cursor-pointer flex flex-col items-center"
    >
      <div className="relative mb-4">
        {!pic ? (
          <Loader />
        ) : (
          <img className="rounded-md h-[300px]" src={pic} alt={movies.title} />
        )}
        <span
          style={{
            background:
              movies.rating > 8
                ? "green"
                : movies.rating > 6
                ? "orange"
                : "red",
          }}
          className="absolute text-white p-1 ring-1 ring-white rounded-full bottom-[-10px] font-semibold left-1"
        >
          {movies.rating}
        </span>

        <span className="absolute bg-orange-200 rounded-lg p-1 ring-1 ring-white bottom-[-10px] font-semibold left-[170px] text-center w-12">
          {movies.year}
        </span>
      </div>

      <h3 className="font-bold text-lg">{movies.title}</h3>
      <p className="text-xs text-gray-500">{movies.genre}</p>
    </Link>
  );
};

export default Card;

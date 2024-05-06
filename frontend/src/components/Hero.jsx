import React from "react";

const Hero = () => {
  return (
    <div className="p-10 py-20 bg-[url('mortal-combat.jpeg')] bg-cover text-white shadow-xl mb-5">
      <h1 className=" text-4xl md:text-5xl font-bold">Hoş Geldin</h1>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Milyonlarca film,dizi ve aktörü keşfet..
      </h2>

      <div className="flex mt-5 relative rounded-full overflow-hidden shadow-2xl shadow-black">
        <input
          className="w-full px-5"
          type="text"
          placeholder="Film,Dizi,Aktor"
        />
        <button className="absolute bg-red-600 end-0 h-full px-10 shadow-md">
          Ara
        </button>
      </div>
    </div>
  );
};

export default Hero;

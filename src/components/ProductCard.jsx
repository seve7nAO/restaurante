import { useState } from "react";
import { Heart, Clock } from "lucide-react";

export default function ProductCard({ image, name, time, description, price }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-64 text-center hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 object-cover mx-auto rounded-full"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 text-gray-400 hover:scale-110 transition cursor-pointer"
        >
          <Heart
            size={20}
            fill={liked ? "red" : "transparent"} // 👈 muda o preenchimento
            color={liked ? "red" : "gray"} // 👈 muda a cor da borda
          />
        </button>
      </div>

      <h3 className="font-semibold text-lg mt-3">{name}</h3>

      <div className="flex items-center justify-center text-gray-500 text-sm mt-1">
        <Clock size={14} className="mr-1" />
        {time}
      </div>

      <p className="text-gray-600 text-sm mt-2 px-2">{description}</p>

      <div className="mt-4">
        <p className="text-[#d4af37] font-semibold text-lg">${price}</p>
      </div>
    </div>
  );
}

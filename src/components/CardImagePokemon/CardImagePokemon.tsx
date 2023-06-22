import { FC } from "react";

interface ICardImagePokemon {
  image: string;
  title: string;
}

const CardImagePokemon: FC<ICardImagePokemon> = ({ image, title }) => {
  return (
    <div className="bg-green-D9D9 h-full mt-6 border rounded-lg flex flex-col justify-center items-center w-1/3">
      <img src={image || ""} alt={title} className="w-48 h-48" />
      <p className="bg-orange-FFA0 w-full font-bold text-xl text-center h-8 rounded-lg">
        {title}
      </p>
    </div>
  );
};

export default CardImagePokemon;

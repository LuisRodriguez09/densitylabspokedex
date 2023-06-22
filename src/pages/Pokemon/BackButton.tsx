import { FC } from "react";
import { useNavigate } from "react-router-dom";

const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="text-black font-bold bg-gray-7878 cursor-pointer absolute top-10 left-10 rounded-full w-20 h-20 text-3xl flex justify-center"
    >{`<`}</button>
  );
};

export default BackButton;

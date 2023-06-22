import { FC } from "react";

const CenterBarPokedex: FC = () => {
    const CLASSES_SEPARATORS = "bg-red w-full h-8 border rounded-t-xl rounded-b-xl"
  return (
    <div className="h-full w-6 mx-5 rounded-xl flex justify-between flex-col" style={{ border: "4px solid black" }} >
        <div className={CLASSES_SEPARATORS}></div>
        <div className={CLASSES_SEPARATORS}></div>
        <div className={CLASSES_SEPARATORS}></div>
        <div className={CLASSES_SEPARATORS}></div>
    </div>
  );
};

export default CenterBarPokedex;

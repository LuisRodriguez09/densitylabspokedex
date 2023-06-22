import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-50">
      <ReactLoading type="spin" color="red" width={"10%"} />
    </div>
  );
};

export default Loading;

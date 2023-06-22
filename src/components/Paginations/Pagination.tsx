import { FC, useState } from "react";
import { BG_IMAGE_PAGINATION, ITEMS_PER_PAGE } from "../../constants";

interface IPagination {
  setItems: React.Dispatch<any>;
  items: any;
}

const Pagination: FC<IPagination> = ({ setItems, items }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    const index = 5 * nextPage;
    if (index === items.results.length) return;

    setItems([...items.results].splice(index, ITEMS_PER_PAGE));

    setCurrentPage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    const index = 5 * prevPage;
    if (index < 0) return;
    setItems([...items.results].splice(index, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };

  return (
    <div className="flex justify-around items-center mt-4 w-full h-24 mb-4">
      <button onClick={() => handlePrevPage()} className="bg-gray-7878">
        &lt;
      </button>
      <div
        className="bg-red-FA80 w-4/5 h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${BG_IMAGE_PAGINATION})`,
        }}
      >
        <h4 className="text-6xl font-bold">CAJA {currentPage}</h4>
      </div>
      <button onClick={() => handleNextPage()} className="bg-gray-7878">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

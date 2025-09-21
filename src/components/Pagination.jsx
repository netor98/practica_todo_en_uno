import { ChevronLeft, ChevronRight, SkipBackIcon, SkipForwardIcon } from 'lucide-react';

export function Pagination({ itemsPerPage, setCurrentPage, currentPage, totalPages }) {
  const getPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      // Current page highlight
      if (i === currentPage) {
        pages.push(
          <p key={i} className="px-2 py-2 bg-blue-500 text-white ">
            {i}
          </p>,
        );
        continue;
      }

      // The remaining pages
      pages.push(
        <p
          className="px-2 py-2 hover:bg-blue-300 cursor-pointer"
          onClick={() => handlePageChange(i)}
        >
          {i}
        </p>,
      );
    }
    return pages;
  };

  const handlePageChange = (newPage) => {
    // Unnecessary state update
    if (newPage == currentPage) return;
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center bg-gray-200 w-fit px-4 rounded-full gap-1 my-5">
        <div className="flex items-center gap-1">
          <button
            className="h-full cursor-pointer disabled:cursor-not-allowed"
            disabled={currentPage === 1 ? true : false}
            onClick={() => handlePageChange(1)}
          >
            <SkipBackIcon
              className={` ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}
              size={22}
            />
          </button>

          <button
            className="h-full cursor-pointer disabled:cursor-not-allowed"
            disabled={currentPage === 1 ? true : false}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ChevronLeft
              className={` ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}
            />
          </button>
        </div>

        <div className="flex items-center justify-center">{getPageNumbers()}</div>

        <div className="flex items-center gap-1">
          <button
            className="h-full cursor-pointer disabled:cursor-not-allowed"
            disabled={currentPage === totalPages ? true : false}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ChevronRight
              className={`${currentPage === totalPages ? 'text-gray-400' : 'text-black'}`}
            />
          </button>

          <button
            className="h-full cursor-pointer disabled:cursor-not-allowed"
            disabled={currentPage === totalPages ? true : false}
            onClick={() => handlePageChange(totalPages)}
          >
            <SkipForwardIcon
              className={`${currentPage === totalPages ? 'text-gray-400' : 'text-black'}`}
              size={22}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <select
          onChange={(e) => itemsPerPage(+e.target.value)}
          className="bg-white border border-gray-300 rounded-2xl px-4 py-2"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}

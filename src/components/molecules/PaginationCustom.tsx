import { Link } from "react-router-dom";

export default function PaginationCustom({ current = 1, totalPages = 0 }) {
  let items = [];
  const totalPage = Number(totalPages);

  for (let page = 1; page <= totalPage; page++) {
    items.push(
      <Link
        to={`?page=${page}`}
        aria-current="page"
        className={`${
          current === page
            ? "bg-[#2F80ED] text-white"
            : "bg-white text-[#333] border-[#F1F1F1] border hover:bg-gray-50"
        } relative z-10 inline-flex items-center justify-center rounded-[8px] h-[32px] aspect-square text-[13px] font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        {page}
      </Link>
    );
  }

  return (
    <div className="flex items-center justify-between bg-white px-4 sm:px-0 my-[40px]">
      {/* mobile */}
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>

      {/* large screen */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="flex space-x-[5px]" aria-label="Pagination">
            <Link
              to={`?page=1`}
              className={`relative inline-flex border-[#F1F1F1] items-center rounded-[8px] px-2 py-2 text-gray-400 border focus:z-20 focus:outline-offset-0 ${
                current <= 1
                  ? "bg-gray-100 cursor-not-allowed"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="sr-only">First</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.7267 12L12.6667 11.06L9.61332 8L12.6667 4.94L11.7267 4L7.72666 8L11.7267 12Z"
                  fill="#333333"
                />
                <path
                  d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z"
                  fill="#333333"
                />
              </svg>
            </Link>
            <Link
              to={`?page=${current <= 1 ? current : current - 1}`}
              className={`relative inline-flex border-[#F1F1F1] items-center rounded-[8px] px-2 py-2 text-gray-400 border focus:z-20 focus:outline-offset-0 ${
                current <= 1
                  ? "bg-gray-100 cursor-not-allowed"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
                  fill="black"
                />
              </svg>
            </Link>

            {items}

            <Link
              to={`?page=${current >= totalPage ? current : current + 1}`}
              className={`relative inline-flex border-[#F1F1F1] items-center rounded-[8px] px-2 py-2 text-gray-400 border focus:z-20 focus:outline-offset-0 ${
                current >= totalPage
                  ? "bg-gray-100 cursor-not-allowed"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
                  fill="black"
                />
              </svg>
            </Link>
            <Link
              to={`?page=${totalPage}`}
              className={`relative inline-flex border-[#F1F1F1] items-center rounded-[8px] px-2 py-2 text-gray-400 border focus:z-20 focus:outline-offset-0 ${
                current >= totalPage
                  ? "bg-gray-100 cursor-not-allowed"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="sr-only">Last</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4.27331 4L3.33331 4.94L6.38665 8L3.33331 11.06L4.27331 12L8.27331 8L4.27331 4Z"
                  fill="black"
                />
                <path
                  d="M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z"
                  fill="black"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

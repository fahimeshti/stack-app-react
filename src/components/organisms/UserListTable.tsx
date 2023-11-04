type userDataT = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const UserListTable = ({
  data,
  isLoading,
}: {
  data: userDataT[];
  isLoading: boolean;
}) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#4E5D78] uppercase bg-[#FAFBFC] dark:bg-gray-700 dark:text-gray-400 rounded-xl overflow-hidden">
          <tr>
            <th scope="col" className="px-6 py-3">
              #ID
            </th>
            <th scope="col" className="px-6 py-3">
              USER
            </th>
            <th scope="col" className="px-6 py-3">
              EMAIL
            </th>
            <th scope="col" className="px-6 py-3">
              OPTIONS
            </th>
          </tr>
        </thead>

        <tbody>
          {isLoading && <tr className="w-full text-center">Loading...</tr>}
          {data?.map((item) => (
            <tr
              key={item.id}
              className="bg-white text-[#4E5D78] text-sm font-semibold"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td className="px-6 py-4 flex items-center gap-[20px]">
                <img
                  src={item.avatar}
                  alt={item.first_name + item.last_name}
                  className="w-[60px] aspect-square rounded-[15px] overflow-hidden"
                />
                {item.first_name + " " + item.last_name}
              </td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4 pl-12">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2.40002 14.4C3.72551 14.4 4.80003 13.3255 4.80003 12C4.80003 10.6745 3.72551 9.59998 2.40002 9.59998C1.07452 9.59998 0 10.6745 0 12C0 13.3255 1.07452 14.4 2.40002 14.4Z"
                      fill="#B0B7C3"
                    />
                    <path
                      d="M12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.59998 12 9.59998C10.6745 9.59998 9.59998 10.6745 9.59998 12C9.59998 13.3255 10.6745 14.4 12 14.4Z"
                      fill="#B0B7C3"
                    />
                    <path
                      d="M21.6 14.4C22.9255 14.4 24 13.3255 24 12C24 10.6745 22.9255 9.59998 21.6 9.59998C20.2745 9.59998 19.2 10.6745 19.2 12C19.2 13.3255 20.2745 14.4 21.6 14.4Z"
                      fill="#B0B7C3"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;

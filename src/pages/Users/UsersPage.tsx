import { useState, useEffect } from "react";
import PaginationCustom from "../../components/molecules/PaginationCustom";
import UserListTable from "../../components/organisms/UserListTable";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../features/users/usersApiSlice";

const UsersPage = () => {
  const [page, setPage] = useState("1");
  const location = useLocation();
  const navigateTo = useNavigate();
  const { data: usersList, error, isLoading } = useGetUsersQuery(page);

  // set page state from query
  useEffect(() => {
    const page = location.search?.split("page=")[1];
    setPage(page);
  }, [location]);

  // set initial page query
  useEffect(() => {
    if (location?.search?.length > 0) {
      return;
    } else {
      navigateTo("?page=1");
    }
  }, [location]);

  return (
    <div className="min-h-screen pr-[35px]">
      <h4 className="text-[#323B4B] text-[23px] font-semibold tracking-normal my-[40px]">
        Users List
      </h4>

      {error && (
        <p className="text-red-500 bg-red-100 rounded-md w-full text-base text-center py-4 my-2">
          Something went wrong!
        </p>
      )}

      <UserListTable data={usersList?.data} isLoading={isLoading} />
      <PaginationCustom
        totalPages={usersList?.total_pages}
        current={Number(page)}
      />
    </div>
  );
};

export default UsersPage;

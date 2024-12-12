import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import { getAllUsers } from "../services/user";
import UserRow from "../components/UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-lg font-semibold text-gray-600'>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-lg font-semibold text-red-600'>
          Failed to load users. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto py-6'>
        <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>
          User List
        </h1>
        <div className='overflow-x-auto bg-white shadow-md rounded-lg'>
          <table className='min-w-full text-sm text-left text-gray-500'>
            <thead className='bg-gray-200 text-gray-700 uppercase'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Username
                </th>
                <th scope='col' className='px-6 py-3'>
                  Email
                </th>
                <th scope='col' className='px-6 py-3'>
                  Role
                </th>
                <th scope='col' className='px-6 py-3'>
                  Role Options
                </th>
                <th scope='col' className='px-6 py-3'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item) => (
                <UserRow key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

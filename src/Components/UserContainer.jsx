import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Redux/User/userAction';

const UserContainer = () => {
  const userData = useSelector((state) => state.users);
  const { users, error, loading } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <p>Users</p>
    // <div>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : error ? (
    //     <p>{error}</p>
    //   ) : (
    //     userData &&
    //     userData.length && (
    //       <div className='flex flex-col items-center'>
    //         <h2>Users List</h2>
    //         {users.map((user) => {
    //           return (
    //             <div key={user.id} className='flex flex-col items-center'>
    //               <p>{user.name}</p>;{/* <p>{user.email}</p>; */}
    //             </div>
    //           );
    //         })}
    //       </div>
    //     )
    //   )}
    // </div>
  );
};

export default UserContainer;

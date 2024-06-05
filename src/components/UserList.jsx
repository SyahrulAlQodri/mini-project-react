import React, { useState, useEffect } from 'react';
import { getUsers } from '../Api';
import { Link } from 'react-router-dom';
import Pagination from '../pages/Pagination';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState('1');

  const fetchUsers = async () => {
    const response = await getUsers(page);
    // console.log(response.data)
    setUsers(response.data.data);
  };

  useEffect(() => {
    
    fetchUsers();
  }, [page]);

  return (
<div className="max-w-md mx-auto bg-gradient-to-r from-red-400 via-blue-500 to-green-500 animate-gradient">
      <div className="grid grid-cols-3 gap-4">
        {users.slice(0, 3).map(user => (
          <div key={user.id} className="p-4 bg-white rounded shadow-md">
            <Link to={`/users/${user.id}`} className="block mb-2 text-blue-500">
              {user.first_name} {user.last_name}
            </Link>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-full mb-4" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {users.slice(3, 6).map(user => (
          <div key={user.id} className="p-4 bg-white rounded shadow-md">
            <Link to={`/users/${user.id}`} className="block mb-2 text-blue-500">
              {user.first_name} {user.last_name}
            </Link>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-full mb-4" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {users.slice(6).map(user => (
          <div key={user.id} className="p-4 bg-white rounded shadow-md">
            <Link to={`/users/${user.id}`} className="block mb-2 text-blue-500">
              {user.first_name} {user.last_name}
            </Link>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
export default UserList;
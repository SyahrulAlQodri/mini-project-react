import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../Api';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    const response = await getUser(id);
    setUser(response.data.data);
  };

  
  useEffect(() => {

    fetchUser();
  }, [id]);

  return (
    <div>
      {user ? (
        <div className='grid justify-center text-center'>
          <h2 className="block mb-2 text-blue-500">{user.first_name} {user.last_name}</h2>
          <p className="block mb-2 text-purple-500">Email: {user.email}</p>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className='mx-auto rounded-full' />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
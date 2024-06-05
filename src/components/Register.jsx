import React, { useState } from 'react';
import { register } from '../Api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ email, password });
      setMessage(`Registration successful: ${response.data.token}`);
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="mb-4 text-2xl font-bold">Register</h2>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Register
      </button>
      <p className="mt-4 text-red-500">{message}</p>
    </form>
  );
};

export default Register;
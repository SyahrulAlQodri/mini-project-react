import React from 'react';
import UserDetail from '../components/UserDetail';

const HomePage = () => {
  return (
    <body>
    <div>
      <nav class="p-4 bg-gray-800">
        <div class="container flex items-center justify-between mx-auto">
            <a href="Home" class="text-lg font-bold text-white">Welcome Sob</a>
            <ul class="flex space-x-4">
                <li><a href="login" class="text-white">Login</a></li>
                <li><a href="register" class="text-white">Register</a></li>
            </ul>
        </div>
    </nav> 
    <section className="p-40 bg-gradient-to-r from-red-400 via-blue-500 to-green-500 animate-gradient">:)

    </section>
    </div>
    <footer class="py-8 text-white bg-gray-800">
        <div class="container mx-auto text-center">
            <p>&copy; 2024</p>
        </div>
    </footer>
    </body>
  );
};

export default HomePage;
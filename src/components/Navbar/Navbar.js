import React, { useState } from 'react';
import Logo from '../../assets/istockphoto-1312665318-612x612-removebg-preview.png'; // Adjust the path to your logo
import { Link } from 'react-router-dom';
import RegistrationForm from '../Form/RegistrationForm'; // Adjust the import path based on your project structure

const Navbar = () => {
  const [show, setShow] = useState(false);

  // Toggle the registration form modal
  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <img src={Logo} alt="logo" className="h-12 w-12" />
      </div>

      {/* Links and buttons aligned to the right */}
      <div className="flex items-center space-x-4">
        <div className="navbar-links space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
        </div>
        <div className="navbar-buttons space-x-4">
          <button className="signin-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
          <button
            className="signup-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleClick}
          >
            Register
          </button>
        </div>
      </div>

      {/* Conditionally render the RegistrationForm in a modal */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md max-w-lg w-full relative">
            {/* Close button for the modal */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            {/* Registration Form */}
            <RegistrationForm />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

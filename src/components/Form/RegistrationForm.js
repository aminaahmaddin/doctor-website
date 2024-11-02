import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User registered:", user.uid); // Log the user's UID

      // Create user in "users" collection
      console.log("Saving user data to Firestore...");
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        userType,
        specialization: userType === 'doctor' ? specialization : null,
      });

      console.log("User data saved to Firestore");

      // Create doctor in "doctors" collection if the user is a doctor
      if (userType === 'doctor') {
        console.log("Saving doctor data to Firestore...");
        await setDoc(doc(db, "doctors", user.uid), {
          name,
          email,
          specialization,
        });
        console.log("Doctor data saved to Firestore");
      }

      setFormSubmitted(true);
      navigate('/doctors');
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  if (formSubmitted && userType === 'doctor') {
    return <Doctor name={name} specialization={specialization} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>User Type:</label>
        <button type="button" onClick={() => handleUserTypeSelection('doctor')}>
          Doctor
        </button>
        <button type="button" onClick={() => handleUserTypeSelection('patient')}>
          Patient
        </button>
      </div>
      {userType === 'doctor' && (
        <div>
          <label htmlFor="specialization">Specialization:</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            required
          />
        </div>
      )}
      <button type="submit">Register</button>
    </form>
  );
};

// Dummy Doctor component to show after registration
const Doctor = ({ name, specialization }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-2">Welcome, Dr. {name}!</h2>
      <p className="text-gray-700">Specialization: {specialization}</p>
    </div>
  );
};

export default RegistrationForm;

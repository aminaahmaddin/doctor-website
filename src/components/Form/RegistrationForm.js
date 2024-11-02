import React, { useState } from 'react';
import { auth, db } from '../../Firebase'; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const RegistrationForm = () => {
  const [role, setRole] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  // Function to handle the Doctor Registration
  const handleDoctorRegistration = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save doctor information to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        role: 'doctor',
        specialization,
      });

      // Reset form
      setName('');
      setEmail('');
      setPassword('');
      setSpecialization('');
      setError('');

      alert('Doctor registered successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to handle the Patient Registration
  const handlePatientRegistration = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save patient information to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        role: 'patient',
        age,
      });

      // Reset form
      setName('');
      setEmail('');
      setPassword('');
      setAge('');
      setError('');

      alert('Patient registered successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!role && (
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Register as</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setRole('doctor')}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Register as Doctor
            </button>
            <button
              onClick={() => setRole('patient')}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
            >
              Register as Patient
            </button>
          </div>
        </div>
      )}

      {role === 'doctor' && (
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Doctor Registration</h2>
          <form onSubmit={handleDoctorRegistration}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      )}

      {role === 'patient' && (
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Patient Registration</h2>
          <form onSubmit={handlePatientRegistration}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;

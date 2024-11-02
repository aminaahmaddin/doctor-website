// DoctorList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Firestore functions
import { db } from '../Firebase'; // Make sure this path is correct

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const doctorsData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.userType === 'doctor') {
            doctorsData.push({ id: doc.id, ...data });
          }
        });
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Doctor List</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id} className="p-4 mb-4 bg-white shadow-md rounded">
            <h3 className="text-xl font-bold">{doctor.name}</h3>
            <p className="text-gray-700">Specialization: {doctor.specialization}</p>
            <p className="text-gray-700">Email: {doctor.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;

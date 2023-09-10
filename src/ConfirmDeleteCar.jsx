import React from 'react';
import axios from 'axios';

const DeleteCar = ({ carId, onCancel, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/cars/${carId}`);
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className='flex flex-col space-y-5'>
        <p className='text-white'>Are you sure you want to delete this car?</p>
        <button onClick={handleDelete} className='inline-block shrink-0 bg-[#1E1E1E] hover:bg-prime border-none rounded-[12px]  border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:text-orange-red focus:outline-none focus:ring active:text-orange-red'>Delete the car</button>
        <button onClick={onCancel} className='inline-block shrink-0 bg-[#1E1E1E] hover:bg-prime border-none rounded-[12px]  border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:text-orange-red focus:outline-none focus:ring active:text-orange-red'>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteCar;

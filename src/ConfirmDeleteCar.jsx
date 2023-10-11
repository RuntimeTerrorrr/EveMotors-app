import React from 'react';
import axios from 'axios';
import { useParams , Link} from 'react-router-dom';

const DeleteCar = ({ onCancel, onDelete }) => {
  const { carId } = useParams();

  const handleDelete = async () => {
    try {
      await axios.delete(`https://eve-motors-server.vercel.app//admin/api/cars/${carId}`);
      onDelete();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className='flex flex-col space-y-5'>
        <p className='text-white'>Are you sure you want to delete this car?</p>
        <button onClick={handleDelete} className='inline-block shrink-0 bg-[#1E1E1E] hover:bg-prime border-none rounded-[12px]  border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:text-orange-red focus:outline-none focus:ring active:text-orange-red'>Delete the car</button>
        <Link to='/carlisting' className='inline-block shrink-0 bg-[#1E1E1E]  hover:bg-prime border-none rounded-[12px]  border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:text-orange-red focus:outline-none focus:ring active:text-orange-red text-center'>
       Cancel
        </Link>
      </div>
    </div>
  );
};

export default DeleteCar;

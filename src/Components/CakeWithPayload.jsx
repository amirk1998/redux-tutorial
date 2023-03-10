import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../Redux/Cake/CakeActions';

const CakeWithPayload = () => {
  const [numbers, setNumbers] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center border-2 py-4 px-8 rounded-lg border-gray-300 w-[400px]'>
      <h2 className='text-2xl mb-4 font-medium text-slate-700'>
        Number of Cakes : {numOfCakes}
      </h2>
      <input
        type='text'
        onChange={(e) => setNumbers(e.target.value)}
        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-1/2 p-2.5 mb-4'
      />
      <button
        onClick={() => dispatch(buyCake(numbers))}
        className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 '
      >
        Buy {numbers} Cake
      </button>
    </div>
  );
};

export default CakeWithPayload;

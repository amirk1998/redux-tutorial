import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../Redux/Cake/CakeActions';

const HookCakeContainer = (props) => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center border-2 py-4 px-8 rounded-lg border-gray-300 w-[400px]'>
      <h2 className='text-2xl mb-4 font-medium text-slate-700'>
        Number of Cakes : {numOfCakes}
      </h2>
      <button
        onClick={() => dispatch(buyCake())}
        className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 '
      >
        Buy Cake
      </button>
    </div>
  );
};

export default HookCakeContainer;

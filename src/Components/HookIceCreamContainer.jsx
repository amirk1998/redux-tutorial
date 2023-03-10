import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../Redux/Icecream/IceCreamActions';

const HookIceCreamContainer = (props) => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center border-2 py-4 px-8 rounded-lg border-gray-300 w-[400px]'>
      <h2 className='text-2xl mb-4 font-medium text-slate-700'>
        Number of iceCreams : {numOfIceCreams}
      </h2>
      <button
        onClick={() => dispatch(buyIceCream())}
        className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 '
      >
        Buy IceCream
      </button>
    </div>
  );
};

export default HookIceCreamContainer;

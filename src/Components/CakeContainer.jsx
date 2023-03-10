import { connect } from 'react-redux';
import { buyCake } from '../Redux/Cake/CakeActions';

const CakeContainer = (props) => {
  return (
    <div className='flex flex-col items-center border-2 py-4 px-8 rounded-lg border-gray-300'>
      <h2 className='text-2xl mb-4 font-medium text-slate-700'>
        Number of Cakes : {props.numOfCakes}
      </h2>
      <button
        onClick={props.buyCake}
        className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 '
      >
        Buy Cake
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

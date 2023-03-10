import { Provider } from 'react-redux';
import CakeContainer from './Components/CakeContainer';
import CakeWithPayload from './Components/CakeWithPayload';
import HookCakeContainer from './Components/HookCakeContainer';
import HookIceCreamContainer from './Components/HookIceCreamContainer';
import UserContainer from './Components/UserContainer';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className='App bg-gray-100 flex flex-col items-center justify-center gap-y-8 w-full h-screen'>
        {/* <CakeContainer /> */}
        {/* <CakeWithPayload />
        <HookCakeContainer />
        <HookIceCreamContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;

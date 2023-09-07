import { Provider } from 'react-redux';
import './App.css';
import Products from './components/Products';
import store from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Products />
      </Provider>
    </>
  );
}

export default App;

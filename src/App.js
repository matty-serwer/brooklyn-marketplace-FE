import './App.css';
import { Provider } from "react-redux";

import store from './redux/store'

// components
import Items from './components/general/Items'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>App Component</h1>
        <Items />
      </div>
    </Provider>
  );
}

export default App;

import './App.css';
import { Provider } from "react-redux";

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>App Component</h1>
      </div>
    </Provider>
  );
}

export default App;

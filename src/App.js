import "./App.css";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import store from "./redux/store";

// components
import Homepage from "./components/general/Homepage"

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>  
    </Provider>
  );
}

export default App;

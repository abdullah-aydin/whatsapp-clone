//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Sidebar from "./Sidebar";
import Chat from "./Chat";
//styles
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

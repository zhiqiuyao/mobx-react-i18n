
import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import {Language} from "../src";

class App extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <div className="container">
            <p><Language resource="greeting"/></p>
            <Button type="confirm"><Language resource="btn.confirm"/></Button>
            <Button type="cancel"><Language resource="btn.cancel"/></Button>
          </div>
        </div>
    );
  }
}

export default App;

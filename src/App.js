import React from "react";
import Content from "./Components/content";
import Header from "./Components/header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default App;

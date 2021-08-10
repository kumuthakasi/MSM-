import React from "react";
import Content from "./Components/content";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RequestDemo from "./Components/RequestDemo/requestdemo";
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Content />
        <Footer /> */}
        <Router>
          <Route path="/requestdemo" component={RequestDemo} /></Router>
      </div>
    )
  }
}

export default App;

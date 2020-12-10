import React, { Component, Suspense } from "react";
import logo from "./image/logo.png";
import "./css/style.css";

const App = React.lazy(() => import("./App"));

class Wrapper extends Component {
  state = {
    load: false,
  };

  render() {
    return (
      <>
        <Suspense
          fallback={
            <div className="loading">
              <img alt="" src={logo} />
            </div>
          }
        >
          <App />
        </Suspense>
      </>
    );
  }
}

export default Wrapper;

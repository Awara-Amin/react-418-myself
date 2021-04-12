import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    // if (userIsRegistered === true) {
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

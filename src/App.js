import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { validToken } from "./helpers/isValidToken";
import { useRoutes } from "./helpers/routes";

function App() {
  const [userId, setUserId] = useState(validToken());
  const verify = () => {
    setUserId(validToken());
  };

  return (
    <>
      <Router>
        <div className="App">{useRoutes(userId, verify)}</div>
      </Router>
    </>
  );
}

export default App;

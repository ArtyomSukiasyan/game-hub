import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "./components/loading/loading";
import { validToken } from "./helpers/isValidToken";
import { useRoutes } from "./helpers/routes";
import { useHttp } from "./hooks/useHttp";

const App = () => {
  const { request } = useHttp();

  const [userId, setUserId] = useState(false);
  const [loading, setLoading] = useState(true);

  const verify = async () => {
    const userData = await validToken(request);
    setUserId(userData.owner);
    setLoading(false);
  };

  useEffect(() => {
    verify();
  }, []);

  const router = useRoutes(userId, verify);
  return (
    <>
      {loading ? (
        <div style={{ marginTop: "20%", marginLeft: "24%" }}>
          <Loading />
        </div>
      ) : (
        <Router>
          <div className="App">{router}</div>
        </Router>
      )}
    </>
  );
};

export default App;

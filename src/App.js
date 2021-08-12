import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import AllGames from "./pages/allGames/AllGames";
import About from "./pages/about/About";
import Register from "./pages/register/Register";

function App() {
  const paths = {
    home: "/",
    games: "/games",
    about: "/about",
    register: "/register",
  };
  return (
    <>
      <Switch>
        <Route exact path={paths.home} component={Home} />
        <Route path={paths.games} component={AllGames} />
        <Route path={paths.about} component={About} />
        <Route path={paths.register} component={Register} />
      </Switch>
    </>
  );
}

export default App;

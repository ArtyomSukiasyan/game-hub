import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import paths from "./consts/paths";
import About from "./pages/about/About";
import AllGames from "./pages/allGames/AllGames";
import GamePage from "./pages/gamePage/GamePage";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={paths.home} component={Home} />
        <Route path={paths.games} component={AllGames} />
        <Route path={paths.about} component={About} />
        <Route path={paths.activeGame} component={GamePage} />
      </Switch>
    </>
  );
};

export default App;

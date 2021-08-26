import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import AllGames from "./pages/allGames/AllGames";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import GamePage from "./pages/gamePage/GamePage";
import Header from "./components/header/Header";
import paths from "./consts/paths";

function App() {  
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={paths.home} component={Home} />
        <Route path={paths.games} component={AllGames} />
        <Route path={paths.about} component={About} />
        <Route path={paths.register} component={Register} />
        <Route path={paths.activeGame} component={GamePage} />
      </Switch>
    </>
  );
}

export default App;

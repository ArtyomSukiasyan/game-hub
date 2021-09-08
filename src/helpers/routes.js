import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import paths from "../consts/paths";
import About from "../pages/about/About";
import AllGames from "../pages/allGames/AllGames";
import GamePage from "../pages/gamePage/GamePage";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Header from "../components/header/Header";

export const useRoutes = (userId, verify) => {
  if (!userId) {
    return (
      <Switch>
        <Route path="/login" exact>
          <Register verify={verify} />
        </Route>

        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <>
      <Header id={userId} />
      <Switch>
        <Route exact path={paths.home} component={Home} />
        <Route path={paths.games} component={AllGames} />
        <Route path={paths.about} component={About} />
        <Route path={paths.register} component={Register} />
        <Route path={paths.activeGame} component={GamePage} />
        <Redirect to={"/home/" + userId} />
      </Switch>
    </>
  );
};

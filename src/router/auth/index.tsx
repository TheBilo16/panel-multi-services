import React from "react";
import { Switch, Route } from "react-router-dom";

//Screens
import DashBoard from "../../screens/Dashboard";
import Worker from "../../screens/Worker";
import User from '../../screens/User';
import Specialty from '../../screens/Specialty';
import Curriculum from '../../screens/Curriculum';

//Components
import LateralBar from "../../components/LateralBar";
import RouterStyles from "./styles";


const RouterAuth = () => (
  <RouterStyles.Container>
    <LateralBar />
    <RouterStyles.OverflowContainer>
      <Switch>
        <Route exact path="/worker" component={Worker} />
        <Route exact path='/user' component={User} />
        <Route exact path='/specialty' component={Specialty} />
        <Route exact path='/email' component={Curriculum} />
        <Route exact path="/" component={DashBoard} />
      </Switch>
    </RouterStyles.OverflowContainer>
  </RouterStyles.Container>
);

export default RouterAuth;

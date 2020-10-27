import React from "react";
import { Switch, Route } from "react-router-dom";

//Screens
import DashBoard from "../../screens/Dashboard";
import Worker from "../../screens/Worker";
import User from '../../screens/User';
import Specialty from '../../screens/Specialty';

//Components
import LateralBar from "../../components/LateralBar";
import RouterStyles from "./styles";


const RouterAuth = () => (
  <RouterStyles.Container>
    <LateralBar />
    <RouterStyles.OverflowContainer>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/worker" component={Worker} />
        <Route path='/user' component={User} />
        <Route path='/specialty' component={Specialty} />
      </Switch>
    </RouterStyles.OverflowContainer>
  </RouterStyles.Container>
);

export default RouterAuth;

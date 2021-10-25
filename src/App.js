import React, { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";

import Login from "./Views/Login/Login";
import VerificationOtp from "./Views/VerificationOtp/VerificationOtp";
import ChoseGender from "./Views/ChoseGender/ChoseGender";

import DateOfBirth from "./Views/DateOfBirth/DateOfBirth";
import DeleteUser from "./Views/DeleteUser/DeleteUser";
import HomePage from "./Views/HomePage/HomePage";
import BankDetails from "./Views/OfferingProfileSection/Views/BankDetails";
import CallInfoSection from "./Views/OfferingProfileSection/Views/CallInfoSection";
import EscortSection from "./Views/OfferingProfileSection/Views/EscortSection";
import VideoRecording from "./Views/OfferingProfileSection/Views/VideoRecording";
import ConfirmYou from "./Views/OfferingProfileSection/Views/ConfirmYou";
import ExperienceLevel from "./Views/OfferingProfileSection/Views/ExperienceLevel";
import ReceiptSection from "./Views/OfferingProfileSection/Views/ReceiptSection";
import DemoVideoRecording from "./Views/OfferingProfileSection/Views/DemoVideoRecording";

const App = () => {
  const [innerHeightDiv, setInnerHeightDiv] = useState(0);

  useEffect(() => {
    let height = window.innerHeight;

    setInnerHeightDiv(height);
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />

        {/* <ReceiptSection /> */}
      </Route>

      <Route exact path="/confirm">
        <ConfirmYou />
      </Route>
      <Route exact path="/confirm-experience">
        <ExperienceLevel />
      </Route>
      <Route exact path="/demo-video">
        <DemoVideoRecording />
      </Route>
      <Route exact path="/record-video">
        <VideoRecording />
      </Route>
      <Route exact path="/escort-section">
        <EscortSection />
      </Route>
      <Route exact path="/sexworker-section">
        <CallInfoSection />
      </Route>
      <Route exact path="/bankdetails-section">
        <BankDetails />
      </Route>

      <Route exact path="/login">
        <Login screenHeight={innerHeightDiv} />
      </Route>
      <Route exact path="/verification">
        <VerificationOtp screenHeight={innerHeightDiv} />
      </Route>
      <Route exact path="/gender-selection">
        <ChoseGender screenHeight={innerHeightDiv} />
      </Route>
      <Route exact path="/date-of-birth">
        <DateOfBirth screenHeight={innerHeightDiv} />
      </Route>
      <Route exact path="/delete-profile">
        <DeleteUser screenHeight={innerHeightDiv} />
      </Route>
    </Switch>
  );
};

export default App;

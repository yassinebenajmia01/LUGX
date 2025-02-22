import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Introduction from "./components/Introduction";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SignupSuccess from "./components/SignupSuccess";
import Content from "./components/Atast/Content";
import Profile from "./components/Atast/Profile";
import SettingsComponent from "./components/Atast/Settings";
import PrivacyPolicy from "./components/Atast/Privacy";
import SearchBar from "./components/Atast/SearchBar";
import SearchPage from "./components/Atast/SearchPage";
import Saved from "./components/Atast/Saved";
import Atast from "./components/Atast/Atast";
import Isitcom from "./components/Atast/Isitcom";
import Digitium from "./components/Atast/Digitium";
import Chat from "./components/Atast/Chat";
import Members from "./components/Atast/Members";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} /> 
        <Route path="/introduction" element={<Introduction />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signupsuccess" element={<SignupSuccess />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<SettingsComponent />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route  inde path="/searchbar" element={<SearchBar />} />
        <Route  inde path="/search" element={<SearchPage />} />
        <Route  inde path="/saved" element={<Saved />} />
        <Route  inde path="/atastss" element={<Atast />} />
        <Route  inde path="/isitcom" element={<Isitcom />} />
        <Route  inde path="/content" element={<Content />} />
        <Route  inde path="/chat" element={<Chat/>} />
        <Route  inde path="/digitium" element={<Digitium />} />
        <Route  inde path="/members" element={<Members />} />



         
      </Routes>
    </Router>
  );
};

export default App;
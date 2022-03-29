import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/dashboard/createnote/CreateNote";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Home from "./pages/dashboard/home/Home";
import Setting from "./pages/dashboard/setting/Setting";
import SplashScreen from "./pages/splash/SplashScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />}  /> 
        <Route path="/login" element={<h1>login</h1>}  /> 
        <Route path="/register" element={<h1>register</h1>}  /> 

        <Route path="/dashboard" element={<Dashboard />} >
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="createnote" element={<CreateNote />} />
            <Route path="setting" element={<Setting />} />
        </Route> 

      </Routes>
    </BrowserRouter>
  );
};

export default App;

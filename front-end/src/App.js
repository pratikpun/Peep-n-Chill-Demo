import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthService from "./services/auth.services";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import AddPeepForm from "./components/AddPeepForm/AddPeepForm";
import Login from "./components/Login/login";
import Home from "./Pages/Home/Home.jsx";
import Register from "./components/Register/register";
import { useState, useEffect } from "react";
import { getAllPeeps, submitPeepForm } from "./components/utils/peepsAPI.js";

function App() {
  const [peeps, setPeeps] = useState([]);
  const [error, setError] = useState([]);
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState(undefined);

  const getAllPeepsHandler = async () => {
    const getPeepsResult = await getAllPeeps();
    if (getPeepsResult?.error) {
      const err = { ...getPeepsResult.error };
      err.message = `Error found: ${getPeepsResult.error.message}`;
      setError(err);
    }

    const peeps = getPeepsResult?.peeps ? getPeepsResult.peeps : [];
    setPeeps(peeps);
  };

  useEffect(() => {
    const userLoggingIn = AuthService.getCurrentUser();
    if (userLoggingIn) {
      // setCurrentUser(JSON.parse(userLoggingIn));
      // console.log(JSON.parse(userLoggingIn).name);
    }
    getAllPeepsHandler();
  }, []);

  const submitPeepFormHandler = async (peep) => {
    const externalDataCallResult = await submitPeepForm(peep);
    if (externalDataCallResult?.error) {
      const errorObject = { ...externalDataCallResult.error };
      errorObject.message = `There was a problem adding your peep: ${externalDataCallResult.error.message}`;

      return setError(errorObject);
    }
    console.log("Peep Added");
    getAllPeepsHandler();
  };
  return (
    <>
      <div className="App">
        <Header currentUser={currentUser} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home peeps={peeps} />} />
            <Route
              path="/add"
              element={<AddPeepForm submitAction={submitPeepFormHandler} />}
            />

            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;

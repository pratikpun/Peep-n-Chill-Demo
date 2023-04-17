import React from "react";
// import AddPeepForm from "../../components/AddPeepForm/AddPeepForm";
import AllPeeps from "../../components/AllPeeps/AllPeeps";
import "./home.css";

const Home = ({ peeps }) => {
  return (
    <div className="home">
      {/* <AddPeepForm /> */}
      <AllPeeps peeps={peeps} />
    </div>
  );
};

export default Home;

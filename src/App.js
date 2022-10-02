import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
// import "./App.scss";
import Form from "./components/Form/Form";
import StyledCard from "./components/MovieCard/StyledCard";
import UpdateCard from "./components/MovieCard/Updatecard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Header></Header> */}
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/detail/:id" element={<MovieDetail />} />
            <Route path="/form" element={<Form />} />
            <Route path="/style" element={<StyledCard />} />
            <Route path="/update/:id" element={<UpdateCard />} />

            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import CardComponent from "./components/CardComponent";
import ReservationForm from "./components/ReservationForm";
import WebFooter from "./components/WebFooter";
import FullMenu from "./components/FullMenu";

function App() {
  return (
    <Router>
      <div className="bg-dark-subtle">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <CarouselComponent />
              <CardComponent />
              <ReservationForm />
            </>
          } />
          <Route path="/full-menu" element={<FullMenu />} />
        </Routes>
        <WebFooter />
      </div>
    </Router>
  );
}

export default App;
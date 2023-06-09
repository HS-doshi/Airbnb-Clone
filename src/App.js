import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Mainsec from "./components/Mainsec";
import SectionSec from "./components/SectionSec";
import SecThird from "./components/SecThird";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Online Experience - Airbnb</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>
          <Header />
          <Mainsec />
          <SectionSec />
          <SecThird />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

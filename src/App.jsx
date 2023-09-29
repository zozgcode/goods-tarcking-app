import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShippingTools from "./pages/shippingTools/ShippingTools";
import Packaging from "./pages/packaging/Packaging";
import Rating from "./pages/rating/Rating";
import HeavyFreight from "./pages/heavyFreight/HeavyFreight";
import About from "./pages/about/About";
import Careers from "./pages/careers/Careers";
// import Resources from "./pages/resources/Resources";
// import ErrorPage from "./pages/errorPage/ErrorPage";
import Tracking from "./pages/tracking/Tracking";
import { useState } from "react";
import { trackingNumbersData } from "./components/data/trackingNumbersData";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ResultPage from "./pages/resultPage/ResultPage";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [resultModalVisible, setResultModalVisible] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const checkTracking = () => {
    setLoading(true);
    if (!inputValue) {
      alert("Tracking id can't be empty");
      setLoading(false);
      return;
    }
    setTimeout(() => {
      const foundNumber = trackingNumbersData.find(
        (item) => item.number === inputValue
      );
      if (foundNumber) {
        setResult(`Tracking number ${inputValue} found!`);
        setResultModalVisible(true);
      } else {
        setResult("Tracking number not found");
        setErrorModalVisible(true);
      }

      setLoading(false);
    }, 1000);
  };

  const closeResultModal = () => {
    setResultModalVisible(false); // Hide the ResultPage modal
    disableBodyScroll();
  };

  const closeErrorModal = () => {
    setErrorModalVisible(false); // Hide the ErrorPage modal
    enableBodyScroll();
  };

  const disableBodyScroll = () => {
    // Disable body scroll by applying CSS styles
    document.body.style.overflow = "no-scroll";
  };

  const enableBodyScroll = () => {
    // Enable body scroll by removing applied CSS styles
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              checkTracking={checkTracking}
              result={result}
              handleInputChange={handleInputChange}
              loading={loading}
              resultModalVisible={resultModalVisible}
              errorModalVisible={errorModalVisible}
              closeResultModal={closeResultModal}
              closeErrorModal={closeErrorModal}
              inputValue={inputValue}
              
            />
          }
        />
        <Route path="/shipping-tools" element={<ShippingTools />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/heavyfreight" element={<HeavyFreight />} />
        <Route path="/heavyfreight" element={<HeavyFreight />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route
          path="/tracking"
          element={
            <Tracking
              inputValue={inputValue}
              handleInputChange={handleInputChange}
              checkTracking={checkTracking}
              loading={loading}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

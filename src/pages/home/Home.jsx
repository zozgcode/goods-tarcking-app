import Banner from "../../components/banner/Banner";
import ErrorPage from "../errorPage/ErrorPage";
import ResultPage from "../resultPage/ResultPage";
import FedExOffers from "./sections/FedExOffers";
import ManageYourShipments from "./sections/ManageYourShipments";
import Recognize from "./sections/Recognize";
import SignUpNow from "./sections/SignUpNow";
import WhenYouAndYourCustomers from "./sections/WhenYouAndYourCustomers";

export default function Home({
  inputValue,
  handleInputChange,
  checkTracking,
  loading,
  resultModalVisible,
  errorModalVisible,
  closeResultModal,
  closeErrorModal,
}) {
  return (
    <div className="pt-[85px]">
      <Banner
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        checkTracking={checkTracking}
        loading={loading}
      />
      {resultModalVisible && (
        <ResultPage onClose={closeResultModal} inputValue={inputValue} />
      )}
      {errorModalVisible && (
        <ErrorPage onClose={closeErrorModal} inputValue={inputValue} />
      )}
      <div className="custom_container">
        <ManageYourShipments />
        <SignUpNow />
        <Recognize />
        <FedExOffers />
        <WhenYouAndYourCustomers />
      </div>
    </div>
  );
}

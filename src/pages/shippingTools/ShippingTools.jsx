import Banner from "./sections/banner/Banner";
import NewFedEx from "./sections/NewFedEx";
import WhenYouAndYourCustomers from "./sections/TakeControl";

export default function ShippingTools() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
        <NewFedEx />
        <WhenYouAndYourCustomers />
      </div>
    </div>
  );
}

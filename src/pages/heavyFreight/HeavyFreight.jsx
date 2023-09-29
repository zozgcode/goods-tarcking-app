import BenefitsOfShipping from "./sections/BenefitsOfShipping";
import SendingHeavyFreight from "./sections/SendingHeavyFreight";
import Banner from "./sections/banner/Banner";

export default function HeavyFreight() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
       <SendingHeavyFreight />
       <BenefitsOfShipping />
      </div>
    </div>
  );
}

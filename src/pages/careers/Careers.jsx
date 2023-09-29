import LifeAtFedEx from "./sections/LifeAtFedEx";
import TogetherWeCan from "./sections/TogetherWeCan";
import Banner from "./sections/banner/Banner";

export default function Careers() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
        <LifeAtFedEx />
        <TogetherWeCan />
      </div>
    </div>
  );
}

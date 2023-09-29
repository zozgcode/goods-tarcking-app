import FirstSection from "./sections/FirstSection";
import PackGeneral from "./sections/PackGeneral";
import Banner from "./sections/banner/Banner";

export default function Packaging() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
        <FirstSection />
        <PackGeneral />
      </div>
    </div>
  );
}

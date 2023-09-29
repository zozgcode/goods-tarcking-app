import CorporateReports from "./sections/CorporateReports";
import Banner from "./sections/banner/Banner";

export default function Resources() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
       <CorporateReports />
      </div>
    </div>
  );
}

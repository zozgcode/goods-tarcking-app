import OurSolutionsConnect from "./sections/OurSolutionsConnect";
import Banner from "./sections/banner/Banner";

export default function About() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
       <OurSolutionsConnect />
      </div>
    </div>
  );
}

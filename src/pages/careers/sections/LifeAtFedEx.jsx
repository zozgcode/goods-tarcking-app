import { Link } from "react-router-dom";
import { careers } from "./data";

export default function LifeAtFedEx() {
  return (
    <div className="text-[#333333] mt-[40px] border-b pb-[30px]">
      <div className="mt-[20px] mb-[50px] flex flex-col md:flex-row gap-5 justify-between max-w-[800px] mx-auto">
        <Link
          to=""
          className="border-2 text-center text-[14px] md:max-full border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
        >
          SEE ALL FEDEX LOGISTICS JOBS
        </Link>
        <Link
          to=""
          className="border-2 text-center text-[14px] md:max-full border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
        >
          SEE ALL FEDEX EXPRESS JOBS
        </Link>
      </div>
      <div className="text-center">
        <h2 className="font-light text-[35px] mb-[20px]">Life at FedEx</h2>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-[20px] mb-[15px]">The Company</h2>
        <p className="text-[18px mb-[50px]">
          At FedEx Express, we believe that a connected world is a better world.
          We connect people and possibilities with our diverse portfolio of
          transportation, e-commerce, and business solutions. Today, our
          networks reach more than 220 countries and territories, linking more
          than 99 percent of the world’s GDP. FedEx is consistently recognized
          as one of the most admired brands in the world and one of the best
          places to work. Our people are the foundation of our success and the
          key to our future.
        </p>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-[20px] mb-[15px]">Our Philosophy</h2>
        <p className="text-[18px mb-[50px]">
          People-Service-Profit (PSP) is the philosophy and business model FedEx
          was founded on, and continues to be a way of life for all employees.
          Taking care of our People, results in outstanding customer Service,
          allowing us to earn a fair Profit that we reinvest in our People and
          our future.
        </p>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-[20px] mb-[15px]">Our Culture</h2>
        <p className="text-[18px mb-[50px]">
          We believe in making every FedEx experience outstanding—for the
          customer and for our team members.
        </p>
      </div>

      <div className="max-w-[600px] mx-auto">
        <img src="https://i.imgur.com/trbJnld.png" alt="" />
      </div>

      <div className="mt-[80px]">
        <div className="flex justify-between flex-col md:flex-row gap-5">
          {careers.map((data, i) => (
            <div className="w-full md:w-[33.333%] h-full" key={i}>
              <div className="w-full h-[230px]">
                <img className="w-full h-full" src={data.img} alt="" />
              </div>
              <div className="p-5 flex flex-col justify-between h-full md:min-h-[300px]">
                <div>
                  <div className="mt-[25px] leading-snug mb-[25px] text-center">
                    <h3 className="text-[20px] md:text-[25px]">{data.title}</h3>
                  </div>
                  <div className="mt-[25px] text-[18px] mb-[25px] leading-snug text-center">
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

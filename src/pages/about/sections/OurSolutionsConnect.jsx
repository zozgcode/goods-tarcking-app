import { Link } from "react-router-dom";
import { ourSolutionsConnect, ourSolutionsConnect2 } from "./data";

export default function OurSolutionsConnect() {
  return (
    <div className="text-[#333333] mt-[40px]">
      <div className="text-left">
        <h2 className="font-light text-[35px] mb-[40px]">
          Our solutions connect people and possibilities.
        </h2>
        <p className="text-[18px mb-[50px]">
          Connecting people with goods, services and ideas creates opportunities
          and improves lives. At FedEx, we believe that a connected world is a
          better world, and that belief guides everything we do.
        </p>
      </div>

      <div>
        <div className="flex justify-between flex-col md:flex-row gap-5">
          {ourSolutionsConnect.map((data, i) => (
            <div className="border w-full md:w-[100%] h-full" key={i}>
              <div className="border w-full">
                <img className="w-full h-auto" src={data.img} alt="" />
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
                <div className="flex items-center justify-center">
                  <Link
                    to={data.slug}
                    className="border-2 text-center text-[14px] max-w-[200px] border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
                  >
                    {data.slugText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="flex justify-between flex-col md:flex-row gap-5">
          {ourSolutionsConnect2.map((data, i) => (
            <div className="border w-full md:w-[33.333%] h-full" key={i}>
              <div className="border w-full">
                <img className="w-full h-auto" src={data.img} alt="" />
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
                <div className="flex items-center justify-center">
                  <Link
                    to={data.slug}
                    className="border-2 text-center text-[14px] max-w-[300px] border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
                  >
                    {data.slugText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

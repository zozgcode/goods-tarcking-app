import { Link } from "react-router-dom";

export default function Recognize() {
  return (
    <div className="bg-[#FAFAFA] text-[#333333] flex flex-col-reverse md:flex-row justify-between items-center mt-[50px]">
      <div className="w-full md:w-[56%] pt-[35px] pb-[35px] pl-[20px] md:pl-[60px] pr-[20px] md:pr-[60px]">
        <div className="">
          <h2 className="text-[25px] leading-snug mb-5">
            Recognize & Report Fraud
          </h2>
          <p className="text-lg leading-snug">
            Common Warning Signs of Mail, Text or Online Scams and what to do if
            you receive such communications.
          </p>
        </div>
        <div className="mt-[20px]">
          <Link
            to=""
            className="border-2 text-center text-[14px] max-w-[200px] border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[44%]">
        <img src="https://i.imgur.com/JyLnPNc.png" alt="" />
      </div>
    </div>
  );
}

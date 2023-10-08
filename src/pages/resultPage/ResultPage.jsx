import { trackingNumbersData } from "../../components/data/trackingNumbersData";
import TrackNo065951 from "./TrackNo065951";
import TrackNo789012 from "./TrackNo789012";

export default function ResultPage({ inputValue }) {
  const foundNumber = trackingNumbersData.find(
    (item) => item.number === inputValue
  );

  return (
    <div className="fixed z-50 w-full left-0 right-0 top-0 bg-black/50">
      <div className="w-full bg-[#ffffff] overflow-x-auto h-screen border mx-auto">
        <div className="w-full p-[16px] text-[#333333]">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-right flex items-center justify-between cursor-pointer font-semibold p-4">
              <a href="/">
                <img
                  className="w-[100px]"
                  src="https://i.imgur.com/qyBZDD9.png"
                  alt=""
                />
              </a>
              <a href="/">close</a>
            </div>
            <div>
              <div className="p-4 bg-[#858585] text-white mb-[30px] mt-[30px] text-center font-semibold">
                Product ID: {inputValue && <span>{inputValue}</span>} found.
              </div>
              <div>
                {foundNumber && foundNumber.id === 1 && <TrackNo065951 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 2 && <TrackNo789012 inputValue={inputValue} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

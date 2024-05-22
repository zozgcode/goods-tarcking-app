import { trackingNumbersData } from "../../components/data/trackingNumbersData";
import TrackNo065951 from "./TrackNo065951";
import TrackNo789012 from "./TrackNo789012";
import TrackNo547712 from "./TrackNo547712/TrackNo547712";
import TrackNo143016 from "./TrackNo143016/TrackNo143016";
import TrackNo238282 from "./TrackNo238282/TrackNo238282";
import TrackNo129309 from "./TrackNo129309/TrackNo129309";
import TrackNo435685 from "./TrackNo435685/TrackNo435685";
import TrackNo382628 from "./TrackNo382628/TrackNo382628";
import TrackNo726290 from "./TrackNo726290/TrackNo726290";
import TrackNo441880 from "./TrackNo441880/TrackNo441880";
import TrackNo542809 from "./TrackNo542809/TrackNo542809";

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
                {foundNumber && foundNumber.id === 3 && <TrackNo547712 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 4 && <TrackNo143016 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 5 && <TrackNo238282 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 6 && <TrackNo129309 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 7 && <TrackNo435685 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 8 && <TrackNo382628 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 9 && <TrackNo726290 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 10 && <TrackNo441880 inputValue={inputValue} />}
                {foundNumber && foundNumber.id === 11 && <TrackNo542809 inputValue={inputValue} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

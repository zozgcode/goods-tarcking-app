import { EstherGeorgeShippingInfo } from "../data";
import TimeLine382628 from "./TimeLin382628";

export default function TrackNo382628({ inputValue }) {
  return (
    <div>
      <div className="border p-4 md:p-8 rounded-lg">
        <TimeLine382628 />
        <div>
          <div className="p-4 pl-0 flex gap-3 mt-[10px] font-semibold">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Sender&apos;s Information</span>
          </div>
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white uppercase border-b bg-[#858585]">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Sender Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-[#333333] border">
                    <td className="px-4 py-2 w-[200px]">Esther George</td>
                    <td className="px-4 py-2 w-[200px]">740-500-4226</td>
                    <td className="px-4 py-2 w-[300px]">
                      571 Robert Livingston St, Orange Park, FL 32073
                    </td>
                    <td className="px-4 py-2 w-[200px]">
                      esthergeorge145@gmail.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="p-4 pl-0 flex gap-3 mt-[10px] font-semibold">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Receiver&apos;s Information</span>
          </div>
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white uppercase border-b bg-[#858585]">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Receiver Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-[#333333] border">
                    <td className="px-4 py-2 w-[200px]">Patrick Francis Miller</td>
                    <td className="px-4 py-2 w-[200px]">605-400-9612</td>
                    <td className="px-4 py-2 w-[300px]">
                    2305 south holly ave. Sioux Falls, Sd. 57105
                    </td>
                    <td className="px-4 py-2 w-[200px]">tollboothwillie23@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 pl-0 flex gap-3 mt-[30px] font-semibold">
            <span>
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            </span>
            <span> Shipment Information</span>
          </div>
          <div>
            {EstherGeorgeShippingInfo.map((itemInfo, i) => (
              <div
                className={`flex ${
                  itemInfo.bgChange ? "bg-gray-100" : "bg-[#858585] text-white"
                }`}
                key={i}
              >
                <div className="border-r w-full p-2">{itemInfo.title}</div>
                <div className="w-full p-2">
                  {itemInfo.content}
                  {itemInfo.trackingNumber && inputValue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

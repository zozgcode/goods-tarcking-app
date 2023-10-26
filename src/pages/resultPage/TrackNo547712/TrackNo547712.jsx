import { BarristerJamesShippingInfo } from "../data";
import TimeLine547712 from "./TimeLine547712";

export default function TrackNo789012({ inputValue }) {
  return (
    <div>
      <div className="border p-4 md:p-8 rounded-lg">
        {/* <div className="forNonPaymentYet border p-5 mb-8 bg-black text-white font-bold">
          SCAM WEBSITE SCAM WEBSITE SCAM WEBSITE SCAM WEBSITE SCAM WEBSITE SCAM
          WEBSITE SCAM WEBSITE: <br />
          Note: This section will be removed when you pay. thank you
        </div> */}
        <TimeLine547712 />
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
                    <td className="px-4 py-2 w-[200px]">Barrister James</td>
                    <td className="px-4 py-2 w-[200px]">+1 567-343-234</td>
                    <td className="px-4 py-2 w-[300px]">
                      South Market Street, Suite 1075, San Jose CA 95113
                    </td>
                    <td className="px-4 py-2 w-[200px]">
                      barristerjames719@gmail.com
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
                    <td className="px-4 py-2 w-[200px]">Jacob Myerss</td>
                    <td className="px-4 py-2 w-[200px]">+1 803-238-0523</td>
                    <td className="px-4 py-2 w-[300px]">
                      325 south lake Dr apt 2 Lexington SC 29072{" "}
                    </td>
                    <td className="px-4 py-2 w-[200px]">
                      optiona-jacobmyers860@gmail.com
                    </td>
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
            {BarristerJamesShippingInfo.map((itemInfo, i) => (
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

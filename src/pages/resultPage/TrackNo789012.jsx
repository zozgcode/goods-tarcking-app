import TimeLine789012 from "./TimeLine789012";
import { attorneyAndrewShippingInfo } from "./data";

export default function TrackNo789012({ inputValue }) {
  return (
    <div>
      <div className="border p-4 md:p-8 rounded-lg">
        <TimeLine789012 />
        <div>
          <div className="p-4 pl-0 flex gap-3 mt-[10px] font-semibold">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Sender&apos;s Information</span>
          </div>
          <div>
            <div className="flex font-semibold bg-[#858585] text-white">
              <div className="border w-[300px] p-2">Receiver Name</div>
              <div className="border w-[300px] p-2">Phone</div>
              <div className="border w-full p-2">Address</div>
              <div className="border w-[200px] p-2">Email</div>
            </div>
            <div className="flex text-sm">
              <div className="border w-[300px] p-2">Attorney Andrew S.</div>
              <div className="border w-[300px] p-2">+1 651-219-7640</div>
              <div className="border w-full text-sm p-2">
                815 S Casino Center Blvd, Las Vegas, NV 89101, United States
              </div>
              <div className="border w-[200px] p-2">****</div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 pl-0 flex gap-3 mt-[10px] font-semibold">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Receiver&apos;s Information</span>
          </div>
          <div>
            <div className="flex font-semibold bg-[#858585] text-white">
              <div className="border w-[300px] p-2">Receiver Name</div>
              <div className="border w-[200px] p-2">Phone</div>
              <div className="border w-full p-2">Address</div>
              <div className="border w-[200px] p-2">Email</div>
            </div>
            <div className="flex text-sm">
              <div className="border w-[300px] p-2">Scott Amey</div>
              <div className="border w-[200px] p-2">****</div>
              <div className="border w-full text-sm p-2">
                305 Anne st. Cornwall ontario Canada
              </div>
              <div className="border w-[200px] p-2">****</div>
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
            {attorneyAndrewShippingInfo.map((itemInfo, i) => (
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
